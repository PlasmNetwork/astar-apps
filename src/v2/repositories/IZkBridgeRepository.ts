import { ParamBridgeAsset, ParamBridgeLzAsset, ParamClaim } from 'src/v2/services';
import Web3 from 'web3';
import { TransactionConfig } from 'web3-eth';

export interface IZkBridgeRepository {
  getApproveData({
    param,
    web3,
  }: {
    param: ParamBridgeAsset;
    web3: Web3;
  }): Promise<TransactionConfig>;

  getBridgeAssetData({
    param,
    web3,
  }: {
    param: ParamBridgeAsset;
    web3: Web3;
  }): Promise<TransactionConfig>;
  getBridgeLzAssetData({
    param,
    web3,
  }: {
    param: ParamBridgeLzAsset;
    web3: Web3;
  }): Promise<TransactionConfig>;
  getClaimData({ param, web3 }: { param: ParamClaim; web3: Web3 }): Promise<TransactionConfig>;
}
