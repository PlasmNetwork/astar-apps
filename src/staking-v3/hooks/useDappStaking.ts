import { watch, computed } from 'vue';
import { getShortenAddress } from '@astar-network/astar-sdk-core';
import { useNetworkInfo } from '../../hooks/useNetworkInfo';
import { container } from 'src/v2/common';
import {
  AccountLedger,
  Constants,
  IDappStakingRepository,
  IDappStakingService,
  PeriodType,
  ProtocolState,
  Rewards,
} from '../logic';
import { Symbols } from 'src/v2/symbols';
import { useStore } from 'src/store';
import { useAccount, useChainMetadata } from 'src/hooks';
import { useI18n } from 'vue-i18n';
import { useDapps } from './useDapps';
import { ethers } from 'ethers';

export function useDappStaking() {
  const { t } = useI18n();
  const { currentNetworkIdx } = useNetworkInfo();
  const store = useStore();
  const { currentAccount } = useAccount();
  const { registeredDapps } = useDapps();
  const { decimal } = useChainMetadata();

  const protocolState = computed<ProtocolState | undefined>(
    () => store.getters['stakingV3/getProtocolState']
  );
  const ledger = computed<AccountLedger | undefined>(() => store.getters['stakingV3/getLedger']);
  const rewards = computed<Rewards | undefined>(() => {
    const rewards = store.getters['stakingV3/getRewards'];
    if (!rewards) {
      getAllRewards();
    }

    return rewards;
  });
  const constants = computed<Constants | undefined>(() => {
    const consts = store.getters['stakingV3/getConstants'];
    if (!consts) {
      fetchConstantsToStore();
    }

    return consts;
  });
  const hasStakerRewards = computed<boolean>(() => !!rewards.value?.staker);
  const hasDappRewards = computed<boolean>(() => !!rewards.value?.dApp);
  const hasBonusRewards = computed<boolean>(() => !!rewards.value?.bonus);
  const hasRewards = computed<boolean>(
    () => hasStakerRewards.value || hasDappRewards.value || hasBonusRewards.value
  );

  const totalStake = computed<bigint>(() => {
    let result = BigInt(0);

    if (
      ledger.value?.stakedFuture &&
      ledger.value.stakedFuture.period === protocolState.value?.periodInfo.number
    ) {
      result += !isRewardOrStakeExpired(ledger.value.stakedFuture.period)
        ? ledger.value.stakedFuture.voting + ledger.value.stakedFuture.buildAndEarn
        : BigInt(0);
    } else if (
      ledger.value &&
      ledger.value.staked.period === protocolState.value?.periodInfo.number
    ) {
      result += !isRewardOrStakeExpired(ledger.value.staked.period)
        ? ledger.value.staked.voting + ledger.value.staked.buildAndEarn
        : BigInt(0);
    }

    return result;
  });

  const isRewardOrStakeExpired = (period: number): boolean =>
    protocolState.value && constants.value
      ? protocolState.value.periodInfo.number < period - constants.value.rewardRetentionInPeriods
      : true;

  const stake = async (dappAddress: string, amount: number): Promise<void> => {
    const [result, error] = canStake(amount);
    if (!result) {
      throw error;
    }

    const successMessage = t('stakingV3.successfullyStaked', {
      contractAddress: getShortenAddress(dappAddress, 5),
    });
    const stakingService = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);
    await stakingService.lockAndStake(dappAddress, amount, currentAccount.value, successMessage);
  };

  const unstake = async (dappAddress: string, amount: number): Promise<void> => {
    const stakingService = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);
    await stakingService.unstakeAndUnlock(dappAddress, amount, currentAccount.value, 'success');
  };

  const claimStakerRewards = async (): Promise<void> => {
    const stakingService = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);
    await stakingService.claimStakerRewards(currentAccount.value, 'success');
    const staker = await stakingService.getStakerRewards(currentAccount.value);
    store.commit('stakingV3/setRewards', { ...rewards.value, staker });
  };

  const claimLockAndStake = async (
    stakeInfo: Map<string, number>,
    lockAmount: bigint
  ): Promise<void> => {
    const dAppsToClaim = registeredDapps.value
      .filter((x) => x.chain.owner === currentAccount.value)
      .map((x) => x.chain.address);
    const stakingService = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);

    await stakingService.claimLockAndStake(
      currentAccount.value,
      Number(ethers.utils.formatEther(lockAmount.toString())),
      stakeInfo,
      dAppsToClaim
    );
    await getAllRewards();
  };

  const claimBonusRewards = async (): Promise<void> => {
    const stakingService = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);
    await stakingService.claimBonusRewards(currentAccount.value, 'success');
    const bonus = await stakingService.getBonusRewards(currentAccount.value);
    store.commit('stakingV3/setRewards', { ...rewards.value, bonus });
  };

  const claimDappRewards = async (): Promise<void> => {
    const stakingService = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);
    const contractAddress = getOwnedDappAddress();

    if (contractAddress) {
      await stakingService.claimDappRewards(contractAddress, currentAccount.value, 'success');
      const dApp = await stakingService.getDappRewards(contractAddress);
      store.commit('stakingV3/setRewards', { ...rewards.value, dApp });
    } else {
      throw 'No dapp found';
    }
  };

  const getAllRewards = async (): Promise<void> => {
    const stakingV3service = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);
    const ownedContractAddress = getOwnedDappAddress();

    let staker = BigInt(0);
    let dApp = BigInt(0);
    let bonus = BigInt(0);

    if (currentAccount.value) {
      staker = await stakingV3service.getStakerRewards(currentAccount.value);
      bonus = await stakingV3service.getBonusRewards(currentAccount.value);

      if (ownedContractAddress) {
        dApp = await stakingV3service.getDappRewards(ownedContractAddress ?? '');
      }
    }

    store.commit('stakingV3/setRewards', { staker, dApp, bonus }, { root: true });
  };

  const getOwnedDappAddress = (): string | undefined => {
    return registeredDapps.value.find(
      (x) =>
        x.chain.rewardDestination === currentAccount.value || x.chain.owner === currentAccount.value
    )?.chain.address;
  };

  const fetchConstantsToStore = async (): Promise<void> => {
    const stakingRepo = container.get<IDappStakingRepository>(Symbols.DappStakingRepositoryV3);
    const constants = await stakingRepo.getConstants();
    constants.minStakeAmountToken = Number(
      (constants.minStakeAmount ?? 0) / BigInt(10 ** decimal.value)
    );
    store.commit('stakingV3/setConstants', constants);
  };

  const canStake = (amount: number): [boolean, string] => {
    if (amount <= 0) {
      return [false, t('stakingV3.amountGreater0')];
    } else if (
      protocolState.value?.periodInfo.subperiod === PeriodType.BuildAndEarn &&
      protocolState.value.periodInfo.subperiodEndEra <= protocolState.value.era + 1
    ) {
      return [false, t('stakingV3.periodEndsNextEra')];
    }

    return [true, ''];
  };

  watch(
    currentNetworkIdx,
    async () => {
      if (currentNetworkIdx) {
        const stakingRepo = container.get<IDappStakingRepository>(Symbols.DappStakingRepositoryV3);
        const state = await stakingRepo.getProtocolState();
        store.commit('stakingV3/setProtocolState', state);
      }
    },
    { immediate: true }
  );

  return {
    protocolState,
    ledger,
    rewards,
    constants,
    totalStake,
    hasStakerRewards,
    hasDappRewards,
    hasBonusRewards,
    hasRewards,
    stake,
    unstake,
    claimStakerRewards,
    canStake,
    claimDappRewards,
    claimBonusRewards,
    getAllRewards,
    fetchConstantsToStore,
    claimLockAndStake,
  };
}
