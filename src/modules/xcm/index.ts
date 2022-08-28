import { objToArray } from 'src/hooks/helper/common';

export { xcmToken, generateAssetFromEvmToken } from './tokens';
export {
  getXcmToken,
  fetchXcmBalance,
  fetchExistentialDeposit,
  checkIsDeposit,
  monitorBalanceIncreasing,
  checkIsRelayChain,
  castChainName,
  removeEvmName,
} from './utils';

export interface XcmTxHistory {
  hash: string;
  from: string;
  to: string;
  symbol: string;
  amount: string;
  timestamp: number;
}

export interface XcmTokenInformation {
  symbol: string;
  assetId: string;
  logo: string;
  isNativeToken: boolean;
  isXcmCompatible: boolean;
  originAssetId: string;
  originChain: string;
  minBridgeAmount: string;
}

export interface ExistentialDeposit {
  amount: string;
  chain: string;
  symbol: string;
  // Memo: minimum balance keeps in relaychain
  originChainMinBal: number;
}

// Ref: RPC calls -> system -> chain()
export enum Chain {
  POLKADOT = 'Polkadot',
  ASTAR = 'Astar',
  ASTAR_EVM = 'Astar-evm',
  KUSAMA = 'Kusama',
  SHIDEN = 'Shiden',
  SHIDEN_EVM = 'Shiden-evm',
  KARURA = 'Karura',
  ACALA = 'Acala',
  MOONRIVER = 'Moonriver',
  // MOONBEAM = 'Moonbeam',
}

export enum parachainIds {
  ASTAR = 2006,
  SHIDEN = 2007,
  KARURA = 2000,
  ACALA = 2000,
  MOONRIVER = 2023,
  // MOONBEAM = 2004,
}

// Memo: give it 0 ide for convenience in checking para/relay chain logic
export const relaychainParaId = 0;

export interface XcmChain {
  name: Chain;
  relayChain: Chain;
  img: string;
  parachainId: parachainIds;
  endpoint?: string;
}

type XcmChainObj = {
  [key in Chain]: XcmChain;
};

export const xcmChainObj: XcmChainObj = {
  [Chain.POLKADOT]: {
    name: Chain.POLKADOT,
    relayChain: Chain.POLKADOT,
    img: require('/src/assets/img/ic_polkadot.png'),
    parachainId: relaychainParaId,
    endpoint: 'wss://polkadot.api.onfinality.io/public-ws',
  },
  [Chain.ASTAR]: {
    name: Chain.ASTAR,
    relayChain: Chain.POLKADOT,
    img: require('/src/assets/img/ic_astar.png'),
    parachainId: parachainIds.ASTAR,
  },
  [Chain.ASTAR_EVM]: {
    name: Chain.ASTAR_EVM,
    relayChain: Chain.POLKADOT,
    img: require('/src/assets/img/ic_astar.png'),
    parachainId: parachainIds.ASTAR,
  },
  [Chain.KUSAMA]: {
    name: Chain.KUSAMA,
    relayChain: Chain.KUSAMA,
    img: require('/src/assets/img/ic_kusama.png'),
    parachainId: relaychainParaId,
    endpoint: 'wss://kusama-rpc.polkadot.io',
  },
  [Chain.SHIDEN]: {
    name: Chain.SHIDEN,
    relayChain: Chain.KUSAMA,
    img: require('/src/assets/img/ic_shiden.png'),
    parachainId: parachainIds.SHIDEN,
  },
  [Chain.SHIDEN_EVM]: {
    name: Chain.SHIDEN_EVM,
    relayChain: Chain.KUSAMA,
    img: require('/src/assets/img/ic_shiden.png'),
    parachainId: parachainIds.SHIDEN,
  },
  [Chain.KARURA]: {
    name: Chain.KARURA,
    relayChain: Chain.KUSAMA,
    img: 'https://polkadot.js.org/apps/static/karura.6540c949..svg',
    parachainId: parachainIds.KARURA,
    endpoint: 'wss://karura-rpc.dwellir.com',
  },
  [Chain.ACALA]: {
    name: Chain.ACALA,
    relayChain: Chain.POLKADOT,
    img: 'https://polkadot.js.org/apps/static/acala.696aa448..svg',
    parachainId: parachainIds.ACALA,
    endpoint: 'wss://acala-polkadot.api.onfinality.io/public-ws',
  },
  [Chain.MOONRIVER]: {
    name: Chain.MOONRIVER,
    relayChain: Chain.KUSAMA,
    img: 'https://assets.coingecko.com/coins/images/17984/small/9285.png?1630028620',
    parachainId: parachainIds.MOONRIVER,
    endpoint: 'wss://wss.api.moonriver.moonbeam.network',
  },
  // Todo: un-comment-out after channel between Astar and Moonbeam has been opened
  // [Chain.MOONBEAM]: {
  //   name: Chain.MOONBEAM,
  //   relayChain: Chain.POLKADOT,
  //   img: 'https://polkadot.js.org/apps/static/moonbeam.3204d901..png',
  //   parachainId: parachainIds.MOONBEAM,
  //   endpoint: 'wss://wss.api.moonbeam.network',
  // },
};

export const xcmChains = objToArray(xcmChainObj);

export const kusamaParachains = xcmChains.filter(
  (it) => it.relayChain === Chain.KUSAMA && it.name !== Chain.KUSAMA
);
export const polkadotParachains = xcmChains.filter(
  (it) => it.relayChain === Chain.POLKADOT && it.name !== Chain.POLKADOT
);
