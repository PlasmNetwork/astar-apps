export enum LOCAL_STORAGE {
  DEFAULT_CURRENCY = 'defaultCurrency',
  NETWORK_IDX = 'networkIdx',
  SELECTED_ENDPOINT = 'selectedEndpoint',
  CUSTOM_ENDPOINT = 'customEndpoint',
  SELECTED_ADDRESS = 'selectedAddress',
  EVM_ADDRESS_MAPPING = 'evmAddressMapping',
  EVM_TOKEN_IMPORTS = 'evmTokenImports',
  XVM_TOKEN_IMPORTS = 'xvmTokenImports',
  CONFIRM_COOKIE_POLICY = 'confirmCookiePolicy',
  SELECTED_WALLET = 'selectedWallet',
  SELECTED_LANGUAGE = 'selectedLanguage',
  XCM_DEPOSIT_EVM_WALLET = 'xcmDepositEvmWallet',
  TX_HISTORIES = 'txHistories',
  XCM_TX_HISTORIES = 'xcmTxHistories',
  XVM_TX_HISTORIES = 'xvmTxHistories',
  BALLOON_NATIVE_TOKEN = 'balloonNativeToken',
  THEME_COLOR = 'themeColor',
  IS_LEDGER = 'isLedger',
  MULTISIG = 'multisig',
  IS_APPLIED_RANDOM_ENDPOINT = 'isAppliedRandomEndpoint', // Todo: Remove this line in middle of July'23
}

// Memo: A helper function to return the account's history data that is stored in the browser
export const getAccountHistories = ({
  storageKey,
  address,
  network,
}: {
  storageKey: LOCAL_STORAGE;
  address: string;
  network: string;
}): any[] => {
  const histories = localStorage.getItem(storageKey);
  /*
  Data structure:
  {
    [address]: {
      [network] : {
        [ {transactionData} ]
      }
    }
  }
  */
  const data = histories ? JSON.parse(histories) : {};
  if (data.hasOwnProperty(address)) {
    const addressData = data[address];
    if (addressData.hasOwnProperty(network)) {
      return addressData[network];
    }
  }
  return [];
};

export const updateAccountHistories = ({
  storageKey,
  address,
  network,
  txs,
}: {
  storageKey: LOCAL_STORAGE;
  address: string;
  network: string;
  txs: any[];
}): void => {
  let newDataObj;
  const numberOfStoredTxs = 5;
  txs.slice(0, numberOfStoredTxs);

  const histories = localStorage.getItem(storageKey);
  const historiesData = histories ? JSON.parse(histories) : {};
  const networkName = network === 'shibuya-testnet' ? 'shibuya' : network;

  if (historiesData.hasOwnProperty(address)) {
    const addressData = historiesData[address];
    newDataObj = { ...historiesData, [address]: { ...addressData, [networkName]: txs } };
  } else {
    const newData = { [networkName]: txs };
    newDataObj = { ...historiesData, [address]: newData };
  }
  localStorage.setItem(storageKey, JSON.stringify(newDataObj));
};
