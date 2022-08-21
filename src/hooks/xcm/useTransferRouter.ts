import { SelectedToken } from 'src/c-bridge';
import { endpointKey } from 'src/config/chainEndpoints';
import { isXc20Token } from 'src/config/web3/utils';
import { useCbridgeV2, useNetworkInfo } from 'src/hooks';
import {
  Chain,
  checkIsRelayChain,
  removeEvmName,
  XcmChain,
  xcmChains,
  xcmToken,
} from 'src/modules/xcm';
import { generateAssetFromEvmToken, generateNativeAsset } from 'src/modules/xcm/tokens';
import { useStore } from 'src/store';
import { Asset } from 'src/v2/models';
import { computed, ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { XcmAssets } from './../../store/assets/state';
import { capitalize } from './../helper/common';

export const pathEvm = '-evm';
export type TransferMode = 'local' | 'local-evm' | 'xcm';

export interface NetworkFromTo {
  from: string;
  to: string;
}

export function useTransferRouter() {
  const isLocalTransfer = ref<boolean>(true);
  const token = ref<Asset>();

  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const { tokens: evmTokens } = useCbridgeV2();
  const tokenSymbol = computed<string>(() => route.query.token as string);
  const network = computed<string>(() => route.query.network as string);
  const mode = computed<TransferMode>(() => route.query.mode as TransferMode);
  const from = computed<string>(() => route.query.from as string);
  const to = computed<string>(() => route.query.to as string);
  const isTransferPage = computed<boolean>(() => route.fullPath.includes('transfer'));
  const isEvmBridge = computed<boolean>(() => {
    if (!isTransferPage.value || isLocalTransfer.value) return false;
    return to.value.includes(pathEvm);
  });
  const { nativeTokenSymbol, currentNetworkName, currentNetworkIdx } = useNetworkInfo();
  const isH160 = computed<boolean>(() => store.getters['general/isH160Formatted']);
  const xcmAssets = computed<XcmAssets>(() => store.getters['assets/getAllAssets']);

  const xcmOpponentChain = computed<Chain>(() => {
    const AstarChain = [Chain.ASTAR, Chain.SHIDEN];
    if (AstarChain.includes(capitalize(from.value) as Chain)) {
      return capitalize(to.value) as Chain;
    } else {
      return capitalize(from.value) as Chain;
    }
  });

  const redirect = (): void => {
    console.log('redirect!!');
    const token = nativeTokenSymbol.value.toLowerCase();
    const network = currentNetworkName.value.toLowerCase();
    // const mode = isH160.value ? 'local-evm' : 'local';
    const mode = 'local';
    router.push({
      path: '/assets/transfer',
      query: { token, network, mode },
    });
  };

  const reverseChain = (): void => {
    router.push({
      path: '/assets/transfer',
      query: {
        ...route.query,
        from: to.value.toLowerCase(),
        to: from.value.toLowerCase(),
      },
    });
  };

  // Memo: configure the token data since astar native token is not supported on the Relaychain
  const redirectForRelaychain = (): void => {
    if (!isTransferPage.value || !xcmOpponentChain.value) return;
    try {
      const isRelaychain = checkIsRelayChain(xcmOpponentChain.value);
      if (!isRelaychain || mode.value !== 'xcm') return;

      const relayChainToken = xcmToken[currentNetworkIdx.value]
        .find((it) => it.originChain === xcmOpponentChain.value)
        ?.symbol.toLowerCase();
      if (!relayChainToken) return;
      if (tokenSymbol.value !== relayChainToken) {
        router.replace({
          path: '/assets/transfer',
          query: {
            ...route.query,
            token: relayChainToken?.toLowerCase(),
            network: network.value,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Memo: to avoid without selecting Astar/SDN e.g.: Karura <-> Moonriver
  const setDestChainToAstar = (): void => {
    if (!isTransferPage.value || mode.value !== 'xcm') return;
    const isAstarEvm = from.value.includes(pathEvm) || to.value.includes(pathEvm);
    const currentNetworkNameRef = currentNetworkName.value.toLowerCase();
    const isAstrOrSdn =
      from.value.includes(currentNetworkNameRef) ||
      to.value.includes(currentNetworkNameRef) ||
      isAstarEvm;
    if (!isAstrOrSdn) {
      router.replace({
        path: '/assets/transfer',
        query: {
          ...route.query,
          to: currentNetworkNameRef.toLowerCase(),
        },
      });
    }
  };

  const defaultXcmBridgeForNative = computed<string>(() => {
    return currentNetworkIdx.value === endpointKey.ASTAR
      ? Chain.ACALA.toLowerCase()
      : Chain.KARURA.toLowerCase();
  });

  const monitorProhibitedPair = () => {
    if (!isTransferPage.value || isLocalTransfer.value) return;
    const fromChain = removeEvmName(from.value);
    const toChain = removeEvmName(to.value);
    const isSameNetwork = fromChain === toChain;
    if (isSameNetwork) {
      router.replace({
        path: '/assets/transfer',
        query: {
          ...route.query,
          from: currentNetworkName.value.toLowerCase(),
          to: defaultXcmBridgeForNative.value,
        },
      });
    }
  };

  const getFromToParams = ({
    chain,
    isSelectFromChain,
  }: {
    chain: string;
    isSelectFromChain: boolean;
  }): NetworkFromTo => {
    const isDuplicated =
      chain.toLowerCase() === from.value.toLowerCase() ||
      chain.toLowerCase() === to.value.toLowerCase();
    if (isSelectFromChain) {
      const toParam = isDuplicated ? from.value : to.value;
      return { from: chain.toLowerCase(), to: toParam.toLowerCase() };
    } else {
      const fromParam = isDuplicated ? to.value : from.value;
      return { from: fromParam.toLowerCase(), to: chain.toLowerCase() };
    }
  };

  const setIsLocalTransfer = ({
    isLocal,
    originChain,
  }: {
    isLocal: boolean;
    originChain: string;
  }): void => {
    isLocalTransfer.value = isLocal;
    const mode = isLocal ? 'local' : 'xcm';
    const network = currentNetworkName.value.toLowerCase();
    const isNativeAstarToken = tokenSymbol.value === nativeTokenSymbol.value.toLowerCase();
    const defaultXcmBridgeForNative =
      currentNetworkIdx.value === endpointKey.ASTAR ? Chain.ACALA : Chain.KARURA;

    const opponentNetwork = isNativeAstarToken
      ? defaultXcmBridgeForNative
      : originChain.toLowerCase();
    const astarNetwork = currentNetworkName.value.toLowerCase();
    const from = isH160.value ? astarNetwork : opponentNetwork;
    const to = isH160.value ? opponentNetwork : astarNetwork;

    const query = isLocal
      ? { token: tokenSymbol.value, network, mode }
      : { token: tokenSymbol.value, network, from, to, mode };
    router.replace({
      path: '/assets/transfer',
      query,
    });
  };

  const setToken = (t: Asset): void => {
    const network = currentNetworkName.value.toLowerCase();
    const mode = isLocalTransfer.value ? 'local' : 'xcm';
    const token = t.metadata.symbol.toLowerCase();
    const baseQuery = { token, network, mode };
    const xcmQuery = {
      ...baseQuery,
      from: from.value,
      to: to.value,
    };
    router.replace({
      path: '/assets/transfer',
      query: isLocalTransfer.value ? baseQuery : xcmQuery,
    });
  };

  const setChain = ({
    chain,
    isSelectFromChain,
  }: {
    chain: string;
    isSelectFromChain: boolean;
  }): void => {
    const { from, to } = getFromToParams({ chain, isSelectFromChain: isSelectFromChain });
    const network = currentNetworkName.value.toLowerCase();
    const t =
      xcmToken[currentNetworkIdx.value]
        .filter((it) => {
          const originChain = it.originChain.toLowerCase();
          return originChain === to || originChain === from;
        })
        .find((it) => it.isNativeToken)?.symbol || nativeTokenSymbol.value;

    const isAstarEvm = chain.includes(pathEvm);
    const token = isAstarEvm ? tokenSymbol.value : t.toLowerCase();
    router.replace({
      path: '/assets/transfer',
      query: { ...route.query, token, network, from, to, mode: 'xcm' },
    });
  };

  const tokens = computed<Asset[]>(() => {
    let tokens: Asset[];
    const nativeToken = generateNativeAsset(nativeTokenSymbol.value);
    if (isH160.value) {
      if (evmTokens.value) {
        tokens = evmTokens.value
          .filter((it) => {
            return isXc20Token(it.address);
          })
          .map((it) => {
            return generateAssetFromEvmToken(it as SelectedToken);
          });
      } else {
        tokens = [];
      }
    } else {
      if (!xcmAssets.value || !nativeTokenSymbol.value) return [];
      let selectableTokens;
      if (isLocalTransfer.value) {
        selectableTokens = xcmAssets.value.assets;
        console.log('xcmAssets.value.assets', xcmAssets.value.assets);
        tokens = selectableTokens.filter(({ isXcmCompatible }) => isXcmCompatible);
        console.log('tokens', tokens);
      } else {
        const selectedNetwork = xcmOpponentChain.value;
        const isSelectedRelayChain = checkIsRelayChain(selectedNetwork);
        selectableTokens = xcmAssets.value.assets.filter(
          (it) => it.originChain === selectedNetwork
        );
        tokens = selectableTokens.filter(({ isXcmCompatible }) => isXcmCompatible);
        !isSelectedRelayChain && tokens.push(nativeToken);
      }
    }
    const isEvmShiden = isH160.value && currentNetworkIdx.value === endpointKey.SHIDEN;
    // Memo: SDN is including in evmTokens
    !isEvmShiden && tokens.push(nativeToken);
    tokens.sort((a, b) => a.metadata.symbol.localeCompare(b.metadata.symbol));
    return tokens;
  });

  const handleDefaultConfig = (): void => {
    // Memo: avoid triggering this function whenever users go back to assets page
    if (!isTransferPage.value || !currentNetworkName.value) {
      return;
    }

    const symbol = tokenSymbol.value;
    const nativeTokenSymbolRef = nativeTokenSymbol.value;
    isLocalTransfer.value = mode.value === 'local';

    const isRedirect = !network.value
      .toLowerCase()
      .includes(currentNetworkName.value.toLowerCase());

    if (isRedirect) return redirect();

    token.value = generateNativeAsset(nativeTokenSymbolRef);
    const isFetchedAssets = xcmAssets.value && xcmAssets.value.assets.length !== 0;
    if (isFetchedAssets && symbol) {
      console.log('in?');
      try {
        const isXcmAsset = symbol !== nativeTokenSymbolRef.toLowerCase();
        const xc20Token = xcmAssets.value.assets.find(
          (it) => it.metadata.symbol.toLowerCase() === symbol
        );

        if (xc20Token) {
          token.value = xc20Token;
        } else {
          console.log('evmTokes', evmTokens.value);
          if (!evmTokens.value) return;
          const evmToken = evmTokens.value?.find((it) => it.symbol.toLowerCase() === symbol);
          if (!evmToken) return;
          console.log('evmToken', evmToken);
          token.value = generateAssetFromEvmToken(evmToken as SelectedToken);
          console.log('token.value', token.value);
        }

        console.log('token.value', token.value);
        if (!token.value) throw Error('No token is found');
      } catch (error) {
        console.error('error', error);
        redirect();
      }
    }
    // if (isFetchedAssets && symbol) {
    //   try {
    //     const throwError = (): void => {
    //       throw Error('No token is found');
    //     };
    //     const isXcmAsset = symbol !== nativeTokenSymbolRef.toLowerCase();
    //     const xc20Token = xcmAssets.value.assets.find(
    //       (it) => it.metadata.symbol.toLowerCase() === symbol
    //     );

    //     console.log('xcmAssets.value', xcmAssets.value);
    //     console.log('symbol', symbol);
    //     console.log('xc20Token', xc20Token);

    //     token.value = xc20Token;
    //     if (!isH160.value) {
    //       if (!xc20Token) throwError();
    //     } else {
    //       if (!evmTokens.value) return;
    //       const evmToken = evmTokens.value?.find((it) => it.symbol.toLowerCase() === symbol);
    //       token.value = generateAssetFromEvmToken(evmToken as SelectedToken);
    //     }

    //     if (!token.value) throwError();
    //   } catch (error) {
    //     console.error('error', error);
    //     redirect();
    //   }
    // }
  };

  const chains = computed<XcmChain[]>(() => {
    const relayChainId =
      currentNetworkIdx.value === endpointKey.ASTAR ? Chain.POLKADOT : Chain.KUSAMA;
    const selectableChains = xcmChains.filter((it) => {
      // Memo: temporary suspend acala tokens
      return it.relayChain === relayChainId && it.name !== Chain.ACALA;
    });
    selectableChains.sort((a, b) => a.name.localeCompare(b.name));
    return selectableChains;
  });

  const selectableFromChains = computed<XcmChain[]>(() => {
    return chains.value.filter(
      (it) => !it.name.includes(pathEvm) && from.value !== it.name.toLowerCase()
    );
  });

  watchEffect(handleDefaultConfig);
  watchEffect(redirectForRelaychain);
  watchEffect(setDestChainToAstar);
  watch([from, to], monitorProhibitedPair, { immediate: false });
  // watch([isH160], redirect, { immediate: false });

  watchEffect(() => {
    // console.log('useTransferRouter');
    // console.log('from', from.value);
    // console.log('to', to.value);
    console.log('xcmAssets.value', xcmAssets.value);
  });

  // const { currentAccount } = useAccount();
  // const handleUpdateXcmTokenAssets = (): void => {
  //   console.log('dispatch@');
  //   if (currentAccount.value) {
  //     console.log('go');
  //     store.dispatch('assets/getAssets', currentAccount.value);
  //   }
  // };

  // watch([currentAccount], handleUpdateXcmTokenAssets, { immediate: true });

  return {
    tokenSymbol,
    network,
    mode,
    xcmOpponentChain,
    isTransferPage,
    router,
    route,
    isEvmBridge,
    isLocalTransfer,
    from,
    to,
    token,
    tokens,
    chains,
    selectableFromChains,
    redirect,
    reverseChain,
    getFromToParams,
    setIsLocalTransfer,
    setToken,
    setChain,
  };
}
