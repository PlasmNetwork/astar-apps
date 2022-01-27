import axios from 'axios';
import { objToArray } from 'src/hooks/helper/common';
import {
  cBridgeEndpoint,
  EvmChain,
  PeggedPairConfig,
  TransferConfigs,
  supportChains,
  Chain,
} from './../index';

export const getChainName = (chain: number) => {
  switch (chain) {
    case EvmChain.Ethereum:
      return 'Ethereum';
    case EvmChain.BSC:
      return 'BSC';
    case EvmChain.Astar:
      return 'Astar';
    case EvmChain.Shiden:
      return 'Shiden';

    default:
      return '';
  }
};

const pushToken = ({
  tokens,
  srcChain,
  destChain,
  token,
}: {
  tokens: PeggedPairConfig[];
  srcChain: EvmChain;
  destChain: EvmChain;
  token: PeggedPairConfig;
}) => {
  if (token.org_chain_id === srcChain && token.pegged_chain_id === destChain) {
    tokens.push(token);
  }
  return;
};

export const getTransferConfigs = async () => {
  const url = cBridgeEndpoint + '/getTransferConfigsForAll';
  try {
    const { data } = await axios.get<TransferConfigs>(url);
    const { chains, pegged_pair_configs } = data;

    const ethToAstar: PeggedPairConfig[] = [];
    const ethToShiden: PeggedPairConfig[] = [];
    const bscToAstar: PeggedPairConfig[] = [];
    const bscToShiden: PeggedPairConfig[] = [];
    const shidenToAstar: PeggedPairConfig[] = [];

    const { Ethereum, BSC, Astar, Shiden } = EvmChain;

    pegged_pair_configs.forEach((token) => {
      pushToken({ tokens: ethToAstar, srcChain: Ethereum, destChain: Astar, token });
      pushToken({ tokens: ethToShiden, srcChain: Ethereum, destChain: Shiden, token });
      pushToken({ tokens: bscToAstar, srcChain: BSC, destChain: Astar, token });
      pushToken({ tokens: bscToShiden, srcChain: BSC, destChain: Shiden, token });
      pushToken({ tokens: shidenToAstar, srcChain: Shiden, destChain: Astar, token });
    });

    const supportChain = chains.filter((it) => supportChains.find((that) => that === it.id));
    if (!supportChain) return;

    return {
      supportChain,
      tokens: {
        [Astar]: {
          [Ethereum]: ethToAstar,
          [BSC]: bscToAstar,
          [Shiden]: shidenToAstar,
        },
        [Shiden]: {
          [Ethereum]: ethToShiden,
          [BSC]: bscToShiden,
          [Astar]: shidenToAstar,
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
  }
};

export const isAstarOrShiden = (chainId: number) => {
  switch (chainId) {
    case EvmChain.Astar:
      return true;

    case EvmChain.Shiden:
      return true;

    default:
      return false;
  }
};

export const pushToSelectableChains = ({
  tokensObj,
  chainId,
  lookChain,
  selectableChains,
  supportChains,
}: {
  tokensObj: any;
  chainId: EvmChain;
  lookChain: EvmChain;
  selectableChains: Chain[];
  supportChains: Chain[];
}) => {
  console.log('tokensObj', tokensObj);
  console.log('lookChain', lookChain);
  // const isSelectableDestChain = tokensObj[lookChain] || [];
  const lookupArray: number[] = [];
  const chains = objToArray(tokensObj);
  console.log('chains', chains);
  chains.forEach((it) => {
    // @ts-ignore
    const tokens = objToArray(it) as PeggedPairConfig[];
    const token = tokens[0];
    console.log('token', token);
    if (lookupArray.includes(token.org_chain_id)) return;
    lookupArray.push(token.org_chain_id);
  });
  console.log('lookupArray', chains);

  lookupArray.forEach((it) => {
    const chain = supportChains.find((it: Chain) => it.id === chainId);
    chain && supportChains.push(chain);
  });
};
