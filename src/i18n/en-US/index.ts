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
  'polkadot-js-app': 'Polkadot.js App',
  metamask: 'MetaMask',
  clover: 'Clover',
  mathwallet: 'Math Wallet',
  wallet3: 'Wallet 3',
  alert: 'Alert',
  max: 'Max',
  native: 'Native',
  evm: 'EVM',
  wasm: 'WASM',
  addressFormat: '{network} Wallet Address',
  addressPlaceholder: 'Destination {network} Address',
  evmAddressPlaceholder: 'Destination EVM address',
  ticker: 'Ticker',
  isComingSoon: '{value} is coming soon',
  amountToken: '{amount} {token}',
  select: 'Select',
  sort: {
    sortBy: 'Sort by',
    amountHightToLow: 'Amount: High to Low',
    amountLowToHigh: 'Amount: Low to High',
    alphabeticalAtoZ: 'Alphabetical: A to Z',
    alphabeticalZtoA: 'Alphabetical: Z to A',
  },
  warning: {
    insufficientBalance: 'Insufficient balance',
    insufficientFee: 'Warning! Transaction might failed due to insufficient fee',
    inputtedInvalidDestAddress: 'Inputted invalid destination address',
    inputtedInvalidAddress: 'Inputted invalid address',
    selectedInvalidNetworkInWallet: 'Selected invalid network in your wallet',
    insufficientBridgeAmount: 'Minimum transfer amount is {amount} {token}',
    insufficientOriginChainBalance: 'Minimum balance on {chain} network is {amount} {token}',
    insufficientExistentialDeposit:
      'Account balances in {network} network is below than the existential deposit amount',
    withdrawalNotSupport: "The portal doesn't support withdrawing to {chain} at this moment",
  },
  toast: {
    transactionFailed: 'Transaction failed with error: {message}',
    completedHash: 'Completed at block hash #{hash}',
    completedTxHash: 'Completed at transaction hash #{hash}',
    unableCalculateMsgPayload: 'Unable to calculate the message payload',
    amountMustNotBeZero: 'The amount of token to be transmitted must not be zero',
    copyAddressSuccessfully: 'Copy address success!',
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
    linkedIn: 'LinkedIn',
    reddit: 'Reddit',
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'YouTube',
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
  sidenavi: {
    community: 'Community',
    discord: 'Discord',
    twitter: 'Twitter',
    telegram: 'Telegram',
    reddit: 'Reddit',
    youtube: 'Youtube',
    forum: 'Forum',
    github: 'Github',
    docs: 'Docs',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    close: 'Close',
  },
  drawer: {
    endpoint: 'Endpoint',
    viaEndpoint: 'via {value}',
  },
  wallet: {
    connectWallet: 'Connect Wallet',
    select: 'Please select a wallet to connect to this portal',
    nativeAccount: 'Native Accounts',
    evmAccount: 'EVM Accounts',
    math: {
      supportsNetwork: 'Math Wallet supports Shiden network only',
      switchNetwork:
        "Switch your network to 'Shiden' in the Math Wallet extension and refresh this page",
    },
    showBalance: 'Show {token} balance',
  },
  installWallet: {
    getWallet: 'Haven’t got a {value} yet?',
    installWallet:
      "You'll need to install {value} to continue. Once you have it installed, go ahead and refresh this page",
    installExtension: 'Install {value} extension',
    howToConnect: 'Learn how to Connect',
  },
  updateWallet: {
    getUpdatedWallet: 'Haven’t updated {value} yet?',
    updateWallet:
      "You'll need to update {value} to continue. Once you have it updated to the latest version, go ahead and refresh this page",
    updateExtension: 'Update {value} extension',
  },
  topMetric: {
    build2earn: 'Build2Earn',
    wayOfStaking: 'An innovative way of Staking',
    tvlInDapps: 'TVL in dApps',
    currentEra: 'Current Era',
    eraInfo: '(ETA: {eta})',
    stakersRewards: 'Stakers Rewards',
    currentBlock: 'Current Block',
    totalDapps: 'Total dApps',
    apr: 'APR',
    apy: 'APY',
  },
  myDapps: {
    index: 'Index',
    dapps: 'dApps',
    stakedAmount: 'Staked Amount',
    unbondingAmount: 'Unbonding Amount',
    remainingEra: 'Remaining Era',
    withdraw: 'Withdraw',
    rebond: 'Re-bond',
    totalEarned: 'Total Earned',
    manage: 'Manage',
    add: 'Add',
    unbond: 'Unbond',
    rebondGuide:
      'Once re-bond your funds goes back to staking. You will need 10era to unstake again.',
    rebondTitle: 'The amount you wish to rebond',
    withdrawGuide: 'Your funds are available to withdraw.',
    withdrawTitle: 'Ready to withdraw',
    unregisteredAlert:
      'This project has been unregistered. Claim action is required and your funds will be returned.',
    claimAndUnbond: 'Claim and Unbond',
  },
  myReward: {
    totalStaked: 'Total Staked',
    availableToClaim: 'Available to claim',
    era: 'Era',
    claim: 'Claim',
    restake: 'Re-Stake after claiming',
    turnOff: 'Turn Off',
    totalEarned: 'Total Earned (all-time)',
    availableToClaimTip:
      'Number of eras that is shown here is per dApp. The maximum number of eras you can claim at once is 50. You may need to claim multiple times if you leave it too long.',
    restakeTip:
      'By turning on, your rewards will be automatically re-staked when you make a claim.',
  },
  dappStaking: {
    myStaking: 'My Staking',
    myRewards: 'My Rewards',
    unbonding: 'Unbonding',
    myDapps: 'My dApps',
    dappRegistered: 'Congrats!! your contract is approved. Please submit the details',
    welcomeBanner:
      'Congratulations 🎉 Please fill in your dApp information to give users better overview of your application. Updated data will appear on the dApp page shortly.',
    registerNow: 'Register now',
    transferableBalance: 'Transferable Balance',
    totalStake: 'Total stake:',
    yourStake: 'Your stake: ',
    add: 'Add',
    unbond: 'Unbond',
    unstake: 'Unstake',
    stake: 'Stake',
    claim: 'Claim',
    withdraw: 'Withdraw',
    unbondingEra: 'Unbonding takes {unbondingPeriod} eras before you can withdraw',
    turnOn: 'Turn on',
    turnOff: 'Turn off',
    on: 'ON',
    off: 'OFF',
    stakeNow: 'Stake Now',
    edit: 'Edit',
    developerIncentive: 'Developer Incentive',
    tokenEra: '{token}/era',
    dappStakingEvm: 'dApp Staking is available on EVM',
    onChainData: 'On-Chain Data',
    stakingTvl: 'Staking TVL',
    stakePage: {
      backToDappList: 'Back to dApps list',
      whereFundsFrom: 'Where would you like to bring you funds from?',
    },
    dappPage: {
      back: 'Back',
      goBackToTopPage: 'Go back to the top page',
      stakeOrSwitchTo: 'Stake or switch to',
      totalStaked: 'Total Staked',
      totalStaker: 'Total Staker',
      team: 'Team',
      projectOverview: 'Project Overview',
      projectSite: 'Project Site',
      goToApp: 'Go to App',
      goToWebsite: 'Go to website',
      virtualMachine: 'Virtual Machine',
      contractAddress: 'Contract Address',
      license: 'License',
      community: 'Community',
      wallets: 'Wallets',
      stats: 'Stats',
    },
    modals: {
      contractAddress: 'Contract address {address}',
      license: 'License',
      startUnbonding: 'Start unbonding',
      unbondFrom: 'Unbond from {name}',
      builder: {
        title: 'Builder',
        githubAccount: 'GitHub account',
        twitterAccount: 'Twitter account',
        linkedInAccount: 'LinkedIn account',
        image: "Builder's image",
        imageRecomendation: 'A square image of minimum 500px is recommended.',
        error: {
          name: 'Builder name is required.',
          nameExists: 'Given name is already used by another developer',
          invalidUrl: 'Invalid url.',
          accountRequired: 'At least one account is required.',
          builderImageRequired: 'Builder image is required',
          buildersRequired: 'At least two builders are required.',
          builderUrlRequired: 'At least one account URL is required.',
        },
      },
      builders: 'Builders information',
      communityLabel: 'Community',
      community: {
        title: 'Communities',
        discordAccount: 'Discord account',
        twitterAccount: 'Twitter account',
        redditAccount: 'Reddit account',
        facebookAccount: 'Facebook account',
        tiktokAccount: 'TikTok account',
        youtubeAccount: 'YouTube account',
        instagramAccount: 'Instagram account',
        communityRequired: 'At least one community link is required.',
      },
      description: 'Description',
      markdown: 'Markdown',
      preview: 'Preview',
      addAccount: 'Add an account',
      addLogo: 'Add a logo image',
      addImage: 'Add an image',
      images: 'Images',
      imagesRequired: 'At least 4 images are required.',
      descriptionRequired: 'Tell the world something about your dApp.',
      contractTypeTitle: 'Is your project on',
      tagsTitle: 'Tags',
      categoryTitle: 'Choose main category',
      submit: 'Submit',
      dappNameRequired: 'dApp name is required',
      projectUrlRequired: 'Project URL is required.',
      name: 'Name',
      projectUrl: 'Project URL',
      dappImageRequired: 'Project logo is required.',
      projectLogo: 'Project logo',
    },
    toast: {
      successfullyClaimed: 'Successfully claimed {amount}',
      requiredClaimFirst: 'Please claim your rewards before sending transaction',
      requiredClaimFirstCompounding:
        '{message} -Disable compounding, claim your rewards and then enable compounding again',
      successfullyWithdrew: 'Balance is successfully withdrew',
      successfullySetRewardDest: 'You successfully set reward destination',
    },
    error: {
      onlySupportsSubstrate: 'dApp staking only supports Substrate wallets',
      notEnoughMinAmount:
        'The amount of token to be staking must be greater than {amount} {symbol}',
      allFundsWillBeTransferred:
        'All funds will be transferred because the min. staking amount is {minStakingAmount} {symbol}',
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
    manage: 'Manage',
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
    importTokens: 'Import tokens',
    hideSmallBalances: 'Hide small balances',
    unhideSmallBalances: 'Unhide small balances',
    tokenHasBeenAdded: 'The token has been added already',
    transferPage: {
      backToAssets: 'Back to Assets',
      crossChainTransfer: 'Cross-chain Transfer',
      xcm: '(XCM)',
      faq: 'FAQ',
      recentHistory: 'Recent History',
      hotTopic: 'Hot Topic',
      inputAddressManually: 'Input an address manually',
      goBack: 'Go back',
      selectChain: 'Select Chain',
      selectToken: 'Select Token',
      noTxRecords: "The account doesn't have any transaction records yet",
      mintTransferAmount: 'Min. transfer amount is {amount} {symbol}',
      howToUsePortal: 'HOW TO USE THE PORTAL',
    },
    modals: {
      max: 'Max',
      balance: 'Balance: {amount} {token}',
      available: 'Available: {amount} {token}',
      notSendToExchanges: 'I’m NOT sending tokens to Exchanges',
      youWillReceive: 'You will receive',
      faucetNextRequest: 'Time left until the next request',
      countDown: '{hrs} hrs {mins} mins {secs} secs',
      whatIsFaucet: ' What is faucet and how does it help you?',
      faucetBalance: 'Faucet Balance: {amount} {symbol}',
      faucetIntro:
        'There is a small fee for each transaction, and this is paid using {symbol} tokens. If you have no {symbol} in your account, you cannot send any tokens. Faucet sends enough {symbol} to cover the transaction fee.',
      faucetDriedOut: 'Faucet id dried out. Please report to one of our team members',
      availableToWithdraw: 'Available to withdraw',
      totalDistribution: 'Total Distribution',
      alreadyVested: 'Already vested',
      remainingVests: 'Remaining vests',
      unlockPerBlock: '{perToken} {symbol} per block until block {untilBlock}',
      availableToUnlock: 'Available to unlock',
      unlock: 'Unlock',
      transfer: 'Transfer',
      evmXcmDeposit: 'EVM (Deposit)',
      evmXcmWithdrawal: 'EVM (Withdrawal)',
      depositToNative: 'Deposit to Native',
      depositToEvm: 'Deposit to EVM',
      evmWalletAddress: 'EVM Wallet Address',
      riskOfImportTokens:
        'Please be aware of the risk that anyone can create a token, including creating fake versions of existing tokens.',
      tokenContractAddress: 'Token Contract Address',
      tipDestAddressFormat: 'Where can I find my {chain} address?',
      titleWithdraw: 'Withdraw {token}',
      titleVesting: 'Vesting info',
      xcmWarning: {
        minBalIsRequired: 'Min. balance is required on origin chain',
        fee: 'Fee is deducted from the amount entered',
        notInputExchanges: 'Do not input wallet address of exchanges',
        tooltip:
          'We keep {amount} {symbol} in origin chain account to avoid losing the funds. When depositing from origin chain, only tokens that are above the minimum balance are transferable.',
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
    uniqueActiveUsers: {
      title: 'Unique Active Users',
      tooltip: 'Unique Active Users',
    },
    numberOfCalls: {
      title: 'Number Of Transactions',
      tooltip: "Number of transactions users called to dApp's smart contract address",
    },
  },
};
