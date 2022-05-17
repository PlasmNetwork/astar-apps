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
  max: 'Max',
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
    speed: {
      speed: 'Transaction speed',
      speedTip: 'Transaction speed (Tip)',
      average: 'Average',
      fast: 'Fast',
      superFast: 'Super Fast',
      tipHelp: 'A tip is important to help speed up transactions',
    },
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
    chunks: 'Unbonding chunks',
    chunksTooltip:
      'Unbonding takes {era} eras (1 era is about 24 hours). {chunks} chunks are in the process of being unbonded.',
    unbondingEra: '*Unbonding takes {unbondingPeriod} era.',
    amount: 'Amount',
    era: 'Era',
    unbondedFunds: 'Unbonded funds',
    unbondedFundsTooltip: 'Unbonded Funds are ready to be withdrawn.',
    currentEra: 'CURRENT ERA',
    blocksUntilNextEra: 'Blocks until next era',
    stakerApy: 'APY: {value}%',
    stakerApr: 'APR: {value}%',
    apr: 'APR',
    ttlPendingRewards: 'Your Pending Rewards',
    autoCompound: 'Re-stake after claiming',
    autoCompoundingTooltip:
      'By turning on the Auto compound, your rewards will re-stake after claiming.',
    view: 'View',
    unclaimedRewards: 'Unclaimed Rewards',
    unclaimedRewardsTooltip: 'Currently we are working on displaying number of unclaimed era.',
    palletDisabled:
      'Dapps staking is in maintenance mode. All actions are temporary disabled, but you can still browse dapps.',
    turnOn: 'Turn on',
    turnOff: 'Turn off',
    on: 'ON',
    off: 'OFF',
    yourRewards: 'Your Rewards',
    claimedRewards: {
      short: 'Claimed rewards: ',
      long: 'Total rewards you have claimed: ',
    },
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
      fundsFrom: 'Where you would like to bring your funds from',
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
      title: {
        stakeOn: 'Stake on {dapp}',
        startUnbonding: 'Start unbonding from {dapp}',
        unStakeFrom: 'Unstake from {dapp}',
      },
    },
    toast: {
      staked: 'You staked {amount} on {dapp}',
      unstaked: 'You unstaked {amount} on {dapp}',
    },
    contracts: {
      file: 'File: {name}',
      uploadFile: 'Upload a file',
      dropFile: 'Drop the files here ...',
      orDrag: 'or drag and drop',
    },
    error: {
      onlySupportsSubstrate: 'dApp staking only supports Substrate wallets',
      notEnoughMinAmount:
        'The amount of token to be staking must be greater than {amount} {symbol}',
      allFundsWillBeTransferred:
        'All funds will be transferred because the min. staking amount is {minStakingAmount} {symbol}',
    },
  },
  bridge: {
    bridge: 'Bridge',
    send: 'Send',
    xcm: 'XCM',
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
    xcmAssets: 'XCM Assets',
    nativeAccount: 'Native Account',
    evmAccount: 'EVM Account',
    switchToNative: 'Switch to Lockdrop',
    switchToEvm: 'Switch to EVM',
    totalBalance: 'Total Balance',
    transfer: 'Transfer',
    faucet: 'Faucet',
    bridge: 'Bridge',
    xcm: 'XCM',
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
      transfer: 'Transfer',
      depositToNative: 'Deposit to Native',
      depositToEvm: 'Deposit to EVM',
      evmWalletAddress: 'EVM Wallet Address',
      xcmWarning: {
        avoidRisk: 'Avoid risk of loosing your balance',
        tooltip:
          "Account with balance below the existential deposit will be reaped ({amount} {symbol} for {network}'s existential deposit)",
      },
    },
  },
  dashboard: {
    dashboard: 'Dashboard',
    tvl: 'TVL',
    circulating: {
      circulatingSupply: 'Circulating Supply',
      supply: 'of {totalSupply}: ',
    },
    block: {
      block: 'Block',
      blockHeight: 'Block Height',
      blockTime: 'Block Time',
      avgBlockTime: 'avg. block time (secs)',
      oneEra: '1 era:',
      sevenEras: '7 eras:',
      thirtyEras: '30 eras:',
      secs: ' secs',
      era: 'Era',
      progress: '{value}%',
      eta: 'ETA {value}',
    },
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
