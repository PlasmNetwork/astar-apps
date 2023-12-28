import { inject, injectable } from 'inversify';
import { IDappStakingService } from './IDappStakingService';
import { DappStakingService } from './DappStakingService';
import { DappStakeInfo } from '../models';
import { IWalletService } from '../../../v2/services/IWalletService';
import { IDappStakingRepository } from '../repositories';
import { Symbols } from 'src/v2/symbols';
import { evmPrecompiledContract } from 'src/modules/precompiled';
import { IAccountUnificationRepository } from 'src/v2/repositories';
import { Guard } from 'src/v2/common';

const { dispatch } = evmPrecompiledContract;

@injectable()
export class DappStakingServiceEvm extends DappStakingService implements IDappStakingService {
  private readonly wallet: IWalletService;

  constructor(
    @inject(Symbols.DappStakingRepositoryV3) dappStakingRepository: IDappStakingRepository,
    @inject(Symbols.WalletFactory) walletFactory: () => IWalletService,
    @inject(Symbols.AccountUnificationRepository)
    private accountUnificationRepository: IAccountUnificationRepository
  ) {
    super(dappStakingRepository, walletFactory);
    this.wallet = walletFactory();
  }

  // @inheritdoc
  public async claimUnstakeAndUnlock(
    contractAddress: string,
    amount: number,
    senderAddress: string,
    successMessage: string
  ): Promise<void> {
    const ss58Address = await this.getSS58Address(senderAddress);
    Guard.ThrowIfUndefined(contractAddress, 'contractAddress');
    Guard.ThrowIfUndefined(senderAddress, 'senderAddress');
    Guard.ThrowIfNegative('amount', amount);

    const claimStakerCalls = await this.getClaimStakerAndBonusRewardsCalls(ss58Address);
    const unstakeCalls = await this.dappStakingRepository.getUnstakeAndUnlockCalls(
      contractAddress,
      amount
    );
    const batch = await this.dappStakingRepository.batchAllCalls([
      ...claimStakerCalls,
      ...unstakeCalls,
    ]);

    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: batch.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  // @inheritdoc
  public async claimStakerRewards(senderAddress: string, successMessage: string): Promise<void> {
    Guard.ThrowIfUndefined(senderAddress, 'senderAddress');

    const ss58Address = await this.getSS58Address(senderAddress);
    const calls = await this.getClaimStakerRewardsCall(ss58Address);

    if (!calls) {
      throw 'Staker rewards expired.';
    }

    const batch = await this.dappStakingRepository.batchAllCalls(calls);
    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: batch.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  // @inheritdoc
  public async claimAllAndUnstakeFromUnregistered(
    senderAddress: string,
    contractAddress: string,
    successMessage: string
  ): Promise<void> {
    Guard.ThrowIfUndefined(senderAddress, 'senderAddress');
    Guard.ThrowIfUndefined(contractAddress, 'contractAddress');

    const ss58Address = await this.getSS58Address(senderAddress);
    const stakerRewards = await this.getClaimStakerAndBonusRewardsCalls(ss58Address);
    const unstakeCall = await this.dappStakingRepository.getUnstakeFromUnregisteredCall(
      contractAddress
    );

    const batch = await this.dappStakingRepository.batchAllCalls([...stakerRewards, unstakeCall]);

    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: batch.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  // @inheritdoc
  public async claimDappRewards(
    contractAddress: string,
    senderAddress: string,
    successMessage: string
  ): Promise<void> {
    const calls = await this.getClaimDappRewardsCalls(contractAddress);

    if (!calls) {
      throw `No dApp rewards to claim for contract address ${contractAddress}.`;
    }

    const batch = await this.dappStakingRepository.batchAllCalls(calls);
    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: batch.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  // @inheritdoc
  public async claimBonusRewards(senderAddress: string, successMessage: string): Promise<void> {
    Guard.ThrowIfUndefined('senderAddress', senderAddress);
    const ss58Address = await this.getSS58Address(senderAddress);
    const calls = await this.getClaimBonusRewardsCalls(ss58Address);

    if (!calls) {
      throw `No bonus rewards to claim for sender address ${senderAddress}.`;
    }

    const batch = await this.dappStakingRepository.batchAllCalls(calls);
    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: batch.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  public async claimStakerAndBonusRewards(
    senderAddress: string,
    successMessage: string
  ): Promise<void> {
    Guard.ThrowIfUndefined('senderAddress', senderAddress);
    const ss58Address = await this.getSS58Address(senderAddress);

    const calls = await this.getClaimStakerAndBonusRewardsCalls(ss58Address);
    const batch = await this.dappStakingRepository.batchAllCalls(calls);

    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: batch.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  // @inheritdoc
  public async claimLockAndStake(
    senderAddress: string,
    amountToLock: bigint,
    stakeInfo: DappStakeInfo[],
    unstakeFromAddress: string,
    unstakeAmount: bigint,
    successMessage: string
  ): Promise<void> {
    const ss58Address = await this.getSS58Address(senderAddress);
    this.guardStake(ss58Address, stakeInfo, unstakeFromAddress, unstakeAmount);

    const batch = await this.getClaimLockAndStakeBatch(
      ss58Address,
      amountToLock,
      stakeInfo,
      unstakeFromAddress,
      unstakeAmount
    );

    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: batch.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  // @inheritdoc
  public async claimUnlockedTokens(senderAddress: string, successMessage: string): Promise<void> {
    Guard.ThrowIfUndefined('senderAddress', senderAddress);

    const call = await this.dappStakingRepository.getClaimUnlockedTokensCall();
    // Memo: check if the call works with EVM
    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: call.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  // @inheritdoc
  public async relockUnlockingTokens(senderAddress: string, successMessage: string): Promise<void> {
    Guard.ThrowIfUndefined('senderAddress', senderAddress);

    const call = await this.dappStakingRepository.getRelockUnlockingTokensCall();
    // Memo: check if the call works with EVM
    await this.wallet.sendEvmTransaction({
      from: senderAddress,
      to: dispatch,
      data: call.method.toHex(),
      successMessage,
      failureMessage: 'Call failed',
    });
  }

  private async getSS58Address(evmAddress: string): Promise<string> {
    return await this.accountUnificationRepository.getConvertedNativeAddress(evmAddress);
  }
}
