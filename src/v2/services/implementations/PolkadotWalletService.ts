import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult, Signer } from '@polkadot/types/types';
import { InjectedExtension } from '@polkadot/extension-inject/types';
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';
import { inject, injectable } from 'inversify-props';
import { ethers } from 'ethers';
import { IWalletService } from 'src/v2/services';
import { Account } from 'src/v2/models';
import { IMetadataRepository } from 'src/v2/repositories';
import { BusyMessage, ExtrinsicStatusMessage, IEventAggregator } from 'src/v2/messaging';
import { WalletService } from './WalletService';

@injectable()
export class PolkadotWalletService extends WalletService implements IWalletService {
  private readonly extensions: InjectedExtension[] = [];

  constructor(
    @inject() private metadataRepository: IMetadataRepository,
    @inject() eventAggregator: IEventAggregator
  ) {
    super(eventAggregator);
  }

  public async signAndSend(
    extrinsic: SubmittableExtrinsic<'promise', ISubmittableResult>,
    senderAddress: string,
    tip?: string,
    successMessage?: string
  ): Promise<void> {
    try {
      await this.checkExtension();
      await extrinsic.signAndSend(
        senderAddress,
        {
          signer: await this.getSigner(senderAddress),
          nonce: -1,
          tip: tip ? ethers.utils.parseEther(String(tip)).toString() : '1',
        },
        (result) => {
          if (result.isFinalized) {
            if (!this.isExtrinsicFailed(result.events)) {
              this.eventAggregator.publish(
                new ExtrinsicStatusMessage(
                  true,
                  successMessage ?? 'Transaction successfully executed'
                )
              );
            }

            this.eventAggregator.publish(new BusyMessage(false));
          } else {
            this.eventAggregator.publish(new BusyMessage(true));
          }
        }
      );
    } catch (e) {
      const error = e as unknown as Error;
      this.eventAggregator.publish(new ExtrinsicStatusMessage(false, error.message));
    }
  }

  private async getAccounts(): Promise<Account[]> {
    await this.checkExtension();
    const metadata = await this.metadataRepository.getChainMetadata();
    const accounts = await web3Accounts({ ss58Format: metadata.ss58format });
    const result = accounts.map((x) => {
      return new Account(x.address, x.meta.genesisHash, x.meta.name, x.meta.source);
    });

    return result;
  }

  private async getSigner(address: string): Promise<Signer> {
    const sender = (await this.getAccounts()).find((x) => x.address === address);

    if (sender) {
      const extension = this.extensions.find((x) => x.name === sender.source);

      if (extension) {
        return extension.signer;
      } else {
        throw new Error(`Can't find polkadot extension for ${sender.address}, ${sender.source}`);
      }
    } else {
      throw new Error(`Can't find account for ${address}`);
    }
  }

  private async checkExtension(): Promise<void> {
    if (this.extensions.length === 0) {
      const maxRetryCount = 10;
      let retryCount = 0;
      let extensions: InjectedExtension[] = [];
      do {
        extensions = await web3Enable('Astar portal');
        await this.wait(100);
        retryCount++;
      } while (extensions.length === 0 && retryCount <= maxRetryCount);

      if (extensions.length === 0) {
        throw new Error('Polkadot extension not installed.');
      }

      this.extensions.push(...extensions);
    }
  }

  // TODO move to common lib
  wait(ms: number): Promise<number> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
