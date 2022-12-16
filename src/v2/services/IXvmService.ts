import { XvmAsset } from 'src/modules/token';
import { XvmAssets } from 'src/store/assets/state';

export interface XvmGetAssetsParam {
  currentAccount: string;
  isFetchUsd: boolean;
  srcChainId: number;
}

export interface IXvmService extends IXvmTransfer {
  getAssets(param: XvmGetAssetsParam): Promise<XvmAssets>;
}

export interface XvmTransferParam {
  token: XvmAsset;
  senderAddress: string;
  recipientAddress: string;
  amount: string;
  isWasmErc20: boolean;
  finalizedCallback: () => void;
}

export interface IXvmTransfer {
  transfer({
    token,
    senderAddress,
    finalizedCallback,
    recipientAddress,
    amount,
    isWasmErc20,
  }: XvmTransferParam): Promise<void>;
}
