import { ref, watch } from 'vue';
import { useEthProvider } from './useEthProvider';

export function useEvmAccount() {
  const { ethProvider } = useEthProvider();
  const loadedAccounts = ref<string[]>([]);

  const requestAccounts = async () => {
    let provider = ethProvider.value;

    if (!provider) {
      throw new Error('Cannot detect any EVM Account');
    }

    const accounts = (await provider.request({
      method: 'eth_requestAccounts',
    })) as string[];
    loadedAccounts.value = accounts;
    return accounts;
  };

  const requestSignature = async (message: string, account: string = loadedAccounts.value[0]) => {
    if (!account || !ethProvider.value) {
      throw new Error('No account was provided for the signature');
    }

    const sigResponse = await ethProvider.value.request({
      method: 'personal_sign',
      params: [account, message],
    });
    if (!sigResponse || typeof sigResponse !== 'string') {
      throw new Error('Failed to get signature');
    }

    return sigResponse;
  };

  watch(
    ethProvider,
    (provider, _, registerCleanup) => {
      if (provider?.isMetaMask || provider?.isTalisman) {
        const handleAccountsChanged = (accounts: string[]) => {
          loadedAccounts.value = accounts;
        };
        const handleChainChanged = () => {
          // refresh the page if the user changes the network
          window.location.reload();
        };

        // subscribe to changes
        provider.on('accountsChanged', handleAccountsChanged);
        provider.on('chainChanged', handleChainChanged);

        // unsubscribe / prevent memory leak
        registerCleanup(() => {
          provider.off('accountsChanged', handleAccountsChanged);
          provider.off('chainChanged', handleChainChanged);
        });
      }
    },
    { immediate: true }
  );

  return { loadedAccounts, requestAccounts, requestSignature };
}
