export default {
  confirm: 'Confirm',
  cancel: 'Cancel',
  change: 'Change',
  connect: 'Connect',
  disconnect: 'Disconnect',
  copy: 'Copy',
  from: 'From',
  to: 'To',
  add: 'Add',
  estimated: 'Estimated',
  forget: 'Forget',
  close: 'Close',
  manage: 'Manage',
  subscan: 'Subscan',
  blockscout: 'Blockscout',
  usd: 'USD',
  'polkadot-js': 'Polkadot.js',
  metamask: 'MetaMask',
  clover: 'Clover',
  mathwallet: 'Math Wallet',
  wallet3: 'Wallet 3',
  alert: 'Alert',
  warning: {
    insufficientFee: 'Warning! Transaction might failed due to insufficient fee',
  },
  common: {
    updateMetadata: 'Update Metadata',
    metadataAlreadyInstalled: 'Metadata Already Installed',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    dApps: 'dApps',
    dappStaking: 'dApp Staking',
    staking: 'Staking',
    contract: 'Contract',
    plasmLockdrop: 'Plasm Lockdrop',
    closeSidebar: 'Close sidebar',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    docs: 'Documentation',
  },
  drawer: {
    endpoint: 'Endpoint',
    viaEndpoint: 'via {value}',
  },
  wallet: {
    connectWallet: 'Connect Wallet',
    select: 'Please select a wallet to connect to this portal',
    nativeAccount: 'Native Account',
    evmAccount: 'EVM Account',
    math: {
      supportsNetwork: 'Math Wallet supports Shiden network only',
      switchNetwork:
        "Switch your network to 'Shiden' in the Math Wallet extension and refresh this page",
    },
  },
  installWallet: {
    getWallet: 'Haven’t got a {value} yet?',
    installWallet:
      "You'll need to install {value} to continue. Once you have it installed, go ahead and refresh this page",
    installExtension: 'Install {value} extension',
    howToConnect: 'Learn how to Connect',
  },
  dappStaking: {
    dappsStore: 'dApps Store',
    dappStaking: 'dApp Staking',
    registerDapp: 'Register dApp',
    noDappsRegistered: 'No dApps registered. Be the first to register one.',
    totalStake: 'Total stake:',
    yourStake: 'Your stake: ',
    add: 'Add',
    unbond: 'Unbond',
    unstake: 'Unstake',
    stake: 'Stake',
    claim: 'Claim',
    stakersCount: 'Stakers:',
    warning: 'Minimum Staking Amount is {amount} and Up to {stakers} Stakers Per Contract',
    tvl: 'TVL IN DAPPS',
    dappsCount: 'DAPPS COUNT',
    requirement: 'REQUIREMENT',
    unlockingChunks: 'Unlocking chunks',
    maxChunksWarning: 'You reached maximum unlocking chunks ({chunks}). Unstake rewards first.',
    withdraw: 'Withdraw',
    chunk: 'Chunk',
    chunks: 'Chunks',
    amount: 'Amount',
    era: 'Era',
    unbondedFunds: 'Unbonded funds',
    currentEra: 'CURRENT ERA',
    blocksUntilNextEra: 'Blocks until next era',
    stakerApy: 'APY: {value}%',
    stakerApr: 'APR: {value}%',
    ttlPendingRewards: 'Your Pending Rewards',
    palletDisabled:
      'Dapps staking is in maintenance mode. All actions are temporary disabled, but you can still browse dapps.',
    modals: {
      alreadyClaimed: 'Already claimed:',
      contractRewards: 'Contract rewards:',
      availableToStake: 'Available to stake',
      yourTransferableBalance: 'Your transferable balance',
      yourRewards: 'Your rewards',
      contractAddress: 'Contract address {address}',
      logo: 'Logo',
      register: 'Register',
      address: 'Address',
      estimatedRewards: 'Pending rewards',
      unclaimedEras: 'Unclaimed eras:',
      estimatedClaimedRewards: 'Claimed rewards',
      next: 'Next',
      previous: 'Previous',
      viewProject: 'View Project',
      license: 'License',
      staked: 'Staked',
      startUnbonding: 'Start unbonding',
      chunks: 'Chunks',
      unbondingPeriod: 'Unbonding period: {period} era',
      maxUnlockingChunks: 'Maximum unlocking chunks: {chunks}',
      unbondingInfo:
        'Your funds will be unbonded and available for withdrawal after {era} full eras.',
      availableInEra: 'Available in era',
      erasToGo: 'eras to pass: {era}',
      chunksModalDescription: 'This table shows when your funds will be eligible for withdrawal.',
      multipleClaimInfo: '{steps} requests are required to claim all unclaimed eras.',
    },
    contracts: {
      file: 'File: {name}',
      uploadFile: 'Upload a file',
      dropFile: 'Drop the files here ...',
      orDrag: 'or drag and drop',
    },
  },
  bridge: {
    bridge: 'Bridge',
    connectEvmWallet: 'Connect EVM wallet',
    max: 'MAX',
    balance: 'Available Balance:',
    approve: 'Approve',
    addWallet: 'Add to wallet',
    bridgeRate: 'Bridge rate',
    fee: 'Fee',
    timeOfArrival: 'Estimated time of arrival',
    minAmount: 'Min. amount greater than',
    maxAmount: 'Max. amount less than',
    time: '{from} ~ {to} mins',
    rateSymbol: '{value} {symbol} on ',
    history: 'History',
    noHistory: "You don't have any transaction record yet",
    updateTime: 'The new transaction will be reflected in {from} ~ {to} mins',
    viewDetails: 'View details',
    contactSupport: 'Contact Support',
    poweredBy: 'Powered by',
    cbridge: 'cBRIDGE',
    destToken: 'Destination token address',
    multichain: 'MultiChain',
    multichainLink: 'Bridge any other assets to Shiden with',
    status: {
      TRANSFER_UNKNOWN: 'Unknown transfer',
      TRANSFER_SUBMITTING: 'Submitting',
      TRANSFER_FAILED: 'Failed',
      TRANSFER_WAITING_FOR_SGN_CONFIRMATION: 'Waiting for confirmation',
      TRANSFER_WAITING_FOR_FUND_RELEASE: 'Fund releasing',
      TRANSFER_COMPLETED: 'Completed',
      TRANSFER_TO_BE_REFUNDED: 'To be refunded',
      TRANSFER_REQUESTING_REFUND: 'Requesting refund',
      TRANSFER_REFUND_TO_BE_CONFIRMED: 'Refund to be confirmed',
      TRANSFER_CONFIRMING_YOUR_REFUND: 'Confirming refund',
      TRANSFER_REFUNDED: 'Refunded',
    },
  },
  assets: {
    assets: 'Assets',
    nativeAccount: 'Native Account',
    evmAccount: 'EVM Account',
    switchToNative: 'Switch to Lockdrop',
    switchToEvm: 'Switch to EVM',
    totalBalance: 'Total Balance',
    transfer: 'Transfer',
    faucet: 'Faucet',
    bridge: 'Bridge',
    wrap: 'Wrap',
    explorer: 'Explorer',
    withdraw: 'Withdraw',
    view: 'View',
    transferableBalance: 'Transferable Balance',
    yourEvmDeposit: 'Your EVM deposit',
    yourVestingInfo: 'Your Vesting Info',
    yourStaking: 'Your Staking',
    lockdropAccount: 'Lockdrop Account',
    inLockdropAccount: 'You are in a Lockdrop account',
    cantTransferToExcahges: "You can't transfer to Exchanges",
    noHash: 'Your transaction will not have a hash',
    addToWallet: 'Add to wallet',
    noResults: 'No results found :(',
    wrongNetwork: 'Wallet connected to the wrong network',
    connectNetwork: 'Connect to {network} RPC',
    invalidAddress: 'The address is not valid',
    modals: {
      max: 'Max',
      balance: 'Balance: {amount} {token}',
      available: 'Available: {amount} {token}',
      notSendToExchanges: 'I’m NOT sending tokens to Exchanges',
      youWillReceive: 'You will receive',
      faucetNextRequest: 'Time left until the next request',
      countDown: '{hrs} hrs {mins} mins {secs} secs',
      whatIsFaucet: ' What is faucet and how does it help you?',
      faucetIntro:
        'There will be minimal costs for each transaction, and this is paid as gas using {unit} token. If you have no {unit} in your account, you cannot send any tokens. Faucet sends enough {unit} to cover the transaction cost.',
      availableToWithdraw: 'Available to withdraw',
      totalDistribution: 'Total Distribution',
      alreadyVested: 'Already vested',
      remainingVests: 'Remaining vests',
      unlockPerBlock: '{perToken} {symbol} per block until block {untilBlock}',
      availableToUnlocked: 'Available to unlocked',
      unlock: 'Unlock',
    },
  },
  dashboard: {
    dashboard: 'Dashboard',
    tvl: 'TVL',
    chart: {
      tvl: {
        title: 'Total Value Locked',
        tooltip: 'TVL',
      },
      dappStaking: {
        title: 'Total Value Locked in dApp Staking',
        tooltip: 'TVL in dApp Staking',
      },
      ecosystem: {
        title: 'Total Value Locked in EVM Ecosystem',
        tooltip: 'TVL in EVM Ecosystem',
      },
      ttlTransactions: {
        title: 'Total Transactions',
        tooltip: 'Total Transactions',
      },
      tokenPrice: {
        title: 'Token Price',
        tooltip: 'Token Price',
      },
    },
  },
};
