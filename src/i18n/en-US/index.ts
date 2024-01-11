export default {
  confirm: 'Confirm',
  cancel: 'Cancel',
  change: 'Change',
  connect: 'Connect',
  connected: 'Connected',
  disconnect: 'Disconnect',
  copy: 'Copy',
  from: 'From',
  to: 'To',
  add: 'Add',
  and: 'and',
  approve: 'Approve',
  estimated: 'Estimated',
  forget: 'Forget',
  remove: 'Remove',
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
  clear: 'Clear',
  join: 'Join',
  native: 'Native',
  evm: 'EVM',
  wasm: 'WASM',
  new: 'NEW',
  next: 'Next',
  addressFormat: '{network} Wallet Address',
  addressPlaceholder: 'Destination {network} Address',
  evmAddressPlaceholder: 'Destination EVM address',
  ticker: 'Ticker',
  isComingSoon: '{value} is coming soon',
  amountToken: '{amount} {token}',
  select: 'Select',
  help: 'Help',
  share: 'Share',
  multisig: 'Multisig',
  sort: {
    sortBy: 'Sort by',
    amountHightToLow: 'Amount: High to Low',
    amountLowToHigh: 'Amount: Low to High',
    alphabeticalAtoZ: 'Alphabetical: A to Z',
    alphabeticalZtoA: 'Alphabetical: Z to A',
  },
  warning: {
    warning: 'Warning',
    insufficientBalance: 'Insufficient {token} balance',
    insufficientFee: 'Warning! Transaction might fail due to insufficient fee',
    inputtedInvalidDestAddress: 'Inputted invalid destination address',
    inputtedNotUnifiedDestAddress: 'Inputted destination address has not been unified',
    blankDestAddress: 'Destination address is blank',
    inputtedInvalidAddress: 'Inputted invalid address',
    selectedInvalidNetworkInWallet: 'Selected invalid network in your wallet',
    insufficientBridgeAmount: 'Minimum transfer amount is {amount} {token}',
    insufficientOriginChainBalance: 'Minimum balance on {chain} network is {amount} {token}',
    insufficientOriginChainNativeBalance: 'Insufficient native token balance on {chain}',
    insufficientExistentialDeposit:
      'Account balances in {network} network is below than the existential deposit amount',
    withdrawalNotSupport: "The portal doesn't support withdrawing to {chain} at this moment",
    ledgerNotOpened: 'Ledger has not opened Astar App. Please open it and refresh this page.',
    claimRewards:
      'DApp Staking V3 is coming early 2024! Make sure to claim your rewards and stay tuned for the release date.',
    underDevelopmentShibuyaWarning:
      'dApp Staking V3 is in beta. We are adding fixes and improves everyday to get ready for the launch.',
  },
  toast: {
    transactionFailed: 'Transaction failed with error: {message}',
    completedHash: 'Completed at block hash #{hash}',
    completedTxHash: 'Completed at transaction hash #{hash}',
    unableCalculateMsgPayload: 'Unable to calculate the message payload',
    amountMustNotBeZero: 'The amount of token to be transmitted must not be zero',
    copyAddressSuccessfully: 'Copy address success!',
    clearedLocalStorage: 'Cleared your local storage! The portal will be reloaded in a few seconds',
    checkYourTransactions: 'Check your transactions',
    approveOnPolkasafe: 'Approve on PolkaSafe',
    success: 'Success',
    note: 'Note',
    error: 'Error',
    copied: 'Copied',
    info: 'Info',
    enablePolkasafe:
      'Please sign on the wallet extension to enable PolkaSafe functionality; the popup may take a while to appear',
  },
  common: {
    updateMetadata: 'Update Metadata',
    metadataAlreadyInstalled: 'Metadata Already Installed',
    lightTheme: 'Light theme',
    darkTheme: 'Dark theme',
    dApps: 'dApps',
    dappStaking: 'dApp Staking',
    staking: 'Staking',
    contract: 'Contract',
    ecosystem: 'Ecosystem',
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
    loading: 'Loading...',
    comingSoon: 'Coming soon',
    speed: {
      speed: 'Transaction speed',
      speedTip: 'Transaction speed (Tip)',
      average: 'Average',
      fast: 'Fast',
      superFast: 'Super Fast',
      tipHelp: 'A tip is important to help speed up transactions',
    },
    status: {
      working: 'Working',
      fixing: 'Fixing',
      restricted: 'Restricted',
    },
  },
  sidenavi: {
    community: 'Community',
    myAssets: 'My Assets',
    data: 'Data',
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
    comingsoon: 'Something ink!redible coming soon',
  },
  drawer: {
    network: 'Network',
    wallet: 'Wallet',
    endpoint: 'Endpoint',
    viaEndpoint: 'via {value}',
    lightClientWarning: 'Connecting via Light client is in beta. Use at your own risk.',
    shibuyaTakes20mins: 'It might take more than 20 mins to connect to Shibuya via Light client',
    takeLongerTimeToConnect: 'It might take a longer time to load data from chains',
    takeLongerTimeToSend: 'It might take a longer time or fail in sending transactions',
    zkNetworkTip: 'Please connect to EVM wallets first',
  },
  wallet: {
    connectWallet: 'Connect Wallet',
    select: 'Please select a wallet to connect to this portal',
    nativeAccount: 'Native Accounts',
    evmAccount: 'EVM Accounts',
    multisigAccount: 'Multisig Accounts',
    accountUnification: 'Account Unification',
    math: {
      supportsNetwork: 'Math Wallet supports Shiden network only',
      switchNetwork:
        "Switch your network to 'Shiden' in the Math Wallet extension and refresh this page",
    },
    showBalance: 'Show {token} balance',
    isLedgerAccount: 'This is a Ledger account, connected and running Astar app',
    multisig: {
      initPolkasafe: 'Initializing PolkaSafe SDK for signature request; this may take a while',
      noAccounts: 'There are no multisig accounts found',
      goToPokasafe: 'Go to PolkaSafe to create one',
      proxy: 'Proxy',
    },
    unifiedAccount: {
      create: 'Create Unified Account',
      readCarefully: 'Please read carefully',
      yourAccount: 'Your Account',
      astarNative: 'Astar Native',
      astarEvm: 'Astar EVM',
      introduce: 'Introducing new technology, unified account',
      general: 'General',
      onceUnified: 'Once accounts are unified, they will not be separated.',
      evmWallet: 'EVM wallet (Metamask only)',
      brandNewAccount: 'A brand-new empty account is recommended.',
      unstakedFirst:
        'If the EVM account holds any staked ASTR token, those need to be unstaked first, it will not be merged automatically.',
      xcTokens:
        'If you have custom xcTokens or any xcTokens are not listed on Astar EVM Portal, you must transfer them to a different account first. We will not able to find those tokens therefore unable to move them to the new account.',
      automaticallyTransferred:
        'All other already listed xcTokens as well as ERC20 tokens will be automatically transferred to new unified account.',
      override:
        'If you already have an account ID that is created on Polkadot.js app, this account unification information will override.',
      agreeToProceed:
        'I have read all and I would like to proceed to create a unified account please.',
      agreeToDeposit: 'Creating unified account costs {cost}',
      agreeToSubmit: 'I understand that once accounts have been unified, they cannot be separated.',
      requirement:
        'To create an unified account, both Substrate and EVM wallet extension are required and currently not possible from mobile apps.',
      haveAstarNative: '😎 I HAVE an Astar Native account',
      connectAstarNative:
        'Unified account is owned by an Astar Native account. Please connect with a desired address and create an account.',
      selectWallet: 'Select a wallet',
      notHaveAstarNative: '🥲 I DON’T HAVE an Astar Native account',
      withoutUnifying:
        'You can receive full benefit while you are connecting with EVM account without unifying. So nothing to worry if you don’t own a Astar Native account. However there might be a feature that the unified account can benefit and you could always create an account anytime.',
      howToCreate: 'How to create a Astar Native account',
      findSubstrateWallets:
        'You could also find Substrate based wallets which might be friendlier. ',
      checkNativeWallets: 'Check our Native wallets.',
      haveStakingBalance:
        'You have some Staking balance. Those staked token will not be merged to the unified account. Please unstake first.',
      unifiedAccountName: 'Unified Account Name',
      accountIcon: 'Account icon',
      balanceTransferred: 'Your balance in the EVM account are going to be transferred.',
      readyToUnify:
        'Now xcTokens are sent and you are ready to unify both accounts! Please check below before confirm.',
      congrats: 'Congrats!!\nYour account is unified!\n\nNo need EVM deposit anymore!',
      onlyShibuya: 'This feature is only available for Shibuya testnet.',
      userTutorials: 'Documentation and tutorials',
      sendingXc20: 'Start sending XC20 tokens, please wait...',
      editUnifiedAccount: 'Edit Unified Account',
      selectAvatar: 'Select Avatar',
      save: 'Save',
      noNfts:
        "You don't have NFTs minted at the moment. When you mint some you will be able to update your unified account with a NFT. For the moment default icon will be used.",
    },
  },
  installWallet: {
    getWallet: 'Haven’t got {value} yet?',
    installWallet:
      "You'll need to install {value} to continue. Once you have it installed, go ahead and refresh this page.",
    install: 'Install',
    learn: 'Learn',
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
    estimatedRewards: 'Estimated Rewards',
    era: 'Era',
    claim: 'Claim',
    restake: 'Re-Stake After Claiming',
    turnOff: 'Turn Off',
    totalEarned: 'Total Earned (all time)',
    availableToClaimTip:
      'The amount of unclaimed rewards is estimated and there may be a small difference between what is shown and what you actually receive.',
    availableToClaimTip2:
      'The number of eras that is shown here is per dApp. You may need to claim multiple times if you have too many unclaimed eras.',
    restakeTip:
      'By turning on, your rewards will be automatically re-staked when you make a claim.',
    claimable: {
      limitation:
        'There is a limitation on the number of eras that can be claimed in one transaction.',
      nativeWallets: 'Native wallets: ≒56 eras',
      ledgerX: 'Ledger Nano X: 6 eras',
      ledgerSPlus: 'Ledger Nano S Plus: 6 eras',
      ledgerS: 'Ledger Nano S: 2 eras',
    },
    dappsOwners: 'DApps owners! We can now help to promote your campaign. Please check',
    dappsOwnersLink: 'the details.',
  },
  dappStaking: {
    myStaking: 'My Staking',
    myRewards: 'My Rewards',
    unbonding: 'Unbonding',
    myDapps: 'My dApps',
    dappRegistered: 'Congrats!! your contract is approved. Please submit the details',
    welcomeBanner:
      'Congratulations 🎉 Please fill in your dApp information to give users better overview of your application. Updated data will appear on the dApp page shortly.',
    desktopOnlyBanner: 'dApp registration is only available on desktop',
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
    willUnstakeAll:
      'It will unstake all of your staked balance because the minimum staking amount is {minStakingAmount} {symbol}',
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
    transactions: 'Transactions',
    uaw: 'Unique Active Wallets',
    cantClaimWihtoutError:
      'You cannot claim with automatic re-stake because it is been a while since you claimed your rewards. Please turn off the Auto Re-Stake feature to be able to claim. After you claimed rewards you can turn on re-stake again. The UI team is working to fix this issue.',
    migrationSupport: {
      actionRequired: 'Action Required',
      yourTokensAreLocked:
        'Your tokens are locked in dAppStaking V2. Please migrate your funds to V3 today and start participating.',
      balanceFromV2: 'Balance from V2 (locked)',
      migrateNow: 'Migrate Now',
    },
    stakePage: {
      backToDappList: 'Back to dApps list',
      whereFundsFrom: 'Where would you like to bring your funds from?',
    },
    last30days: '(last 30 days)',
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
        image: "Builder's image (maximum upload file size: {size})",
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
        githubAccount: 'GitHub account',
        communityRequired: 'At least one community link is required.',
      },
      introduction: {
        title: 'One more thing!',
        promotionCard:
          'When you are listed, a promotion card will appear like this, please fill in the description within 65 characters.',
        placeholder: 'Please add your introduction',
        characters: '{characters} out of 65 characters',
      },
      description: 'Description',
      markdown: 'Markdown',
      preview: 'Preview',
      addAccount: 'Add an account',
      addLogo: 'Add a logo image',
      addImage: 'Add an image',
      images: 'Images (Recommended size {ratio} within {size})',
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
      successfullyWithdrawn: 'Balance successfully withdrawn',
      successfullySetRewardDest: 'You successfully set reward destination',
      successfullyStaked: 'You successfully staked to {contractAddress}',
      successfullyUnbond: 'You successfully started unbonding process for {contractAddress}',
      successfullyNominationTransfer:
        'You successfully staked to {targetContractId} from {fromContractId}',
    },
    error: {
      onlySupportsSubstrate: 'dApp staking only supports Substrate wallets',
      notSupportZkEvm: "dApp staking doesn't support zkEVM networks",
      notEnoughMinAmount:
        'The amount of token to be staking must be greater than {amount} {symbol}',
      allFundsWillBeTransferred:
        'All funds will be transferred because the min. staking amount is {minStakingAmount} {symbol}',
      invalidBalance: 'Insufficient transferrable balance to complete the transaction',
      warningLeaveMinAmount:
        'Account must hold greater than {amount}{symbol} in transferrable when you stake.',
    },
    maintenance: {
      switching: 'Switching to',
      willBeBack: 'We will be back',
      verySoon: 'very soon',
    },
  },
  assets: {
    astarNativeAccount: 'Astar Native Account',
    astarEvmAccount: 'Astar EVM Account',
    assets: 'Assets',
    xcmAssetsShort: 'XCM Assets',
    xcmAssets: 'XCM (Cross Chain Message) Assets',
    xvmAssetsShort: 'XVM ERC-20 Assets',
    xvmAssets: 'XVM (Cross Virtual Machine) ERC-20 Assets',
    nativeAccount: 'Native Account',
    evmAccount: 'EVM Account',
    switchToEvm: 'Switch to EVM',
    totalBalance: 'Total Balance',
    transfer: 'Transfer',
    send: 'Send',
    syncing: 'Syncing...',
    faucet: 'Faucet',
    bridge: 'Bridge',
    manage: 'Manage',
    xcm: 'XCM',
    wrap: 'Wrap',
    explorer: 'Explorer',
    withdraw: 'Withdraw',
    view: 'View',
    expand: 'Expand',
    collapse: 'Collapse',
    transferableBalance: 'Transferable Balance',
    transferable: 'Transferable',
    evmDeposit: 'EVM deposit',
    yourEvmDeposit: 'Your EVM deposit',
    yourVestingInfo: 'Your Vesting Info',
    yourStaking: 'Your Staking',
    cantTransferToExcahges: "You can't transfer to Exchanges",
    noHash: 'Your transaction will not have a hash',
    addToWallet: 'Add to wallet',
    noResults: 'No results found :(',
    letsImportToken: 'There are no tokens listed. Let’s import them!',
    wrongNetwork: 'Wallet connected to the wrong network',
    connectNetwork: 'Connect to {network} RPC',
    invalidAddress: 'The address is not valid',
    importTokens: 'Import tokens',
    importXvmTokens: 'Import ERC-20 tokens via XVM',
    importErc20Tokens: 'Import tokens (ERC-20)',
    hideSmallBalances: 'Hide small balances',
    unhideSmallBalances: 'Unhide small balances',
    tokenHasBeenAdded: 'The token has been added already',
    assetsAreNowFolded: 'All utilities for {token} token are now folded - open up here!',
    theSignatory: '{account} is the signatory',
    myWallet: 'My Wallet',
    reward: 'Reward',
    lockedTokens: 'Locked tokens',
    vesting: 'Vesting',
    reserved: 'Reserved',
    favorite: 'Favorite',
    addToFavorite: 'Add to favorite',
    removeFromFavorite: 'Remove from favorite',
    unifyAccounts: 'Unify accounts',
    yourEstimatedRewards: 'Claim your estimated rewards',
    yourProject: 'Your Project',
    toast: {
      completedMessage: 'You have sent {transferAmt} {symbol} to {toAddress}',
      completedBridgeMessage: 'You have sent {transferAmt} {symbol} from {fromChain} to {toChain}',
    },
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
      xcmIsDisabled: 'XCM with {network} is temporarily disabled',
      xcmEvmIsDisabled: 'XCM to {network} via EVM wallets is temporarily disabled',
    },
    modals: {
      max: 'Max',
      balance: 'Balance: {amount} {token}',
      available: 'Available: {amount} {token}',
      cannotBeSentErc20: 'ERC20 tokens cannot be sent to {network} Native addresses',
      notSendToExchanges: 'I’m NOT sending tokens to Exchanges',
      notSendToEvmExchanges:
        "I’m NOT sending tokens to Exchange's EVM deposit addresses. I understand that if I do so, the funds will likely be lost.",
      understandWarning: 'I understand that if I do so, the funds will likely be lost',
      notDestIsLedgerAccount:
        'The destination address is neither a ledger native account nor an exchange address. I understand that if I do so, the funds will likely be lost.',
      notDestIsExchangeAddress: 'Destination address is not an Exchange address',
      youWillReceive: 'You will receive',
      faucetNextRequest: 'Time left until the next request',
      countDown: '{hrs} hrs {mins} mins {secs} secs',
      whatIsFaucet: ' What is faucet and how does it help you?',
      faucetBalance: 'Faucet Balance: {amount} {symbol}',
      faucetIntro:
        'There is a small fee for each transaction, and this is paid using {symbol} tokens. If you have no {symbol} in your account, you cannot send any tokens. Faucet sends enough {symbol} to cover the transaction fee.',
      faucetDriedOut: 'Faucet id dried out. Please report to one of our team members in Discord',
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
      howToImportXvmTokens: 'Find out how to import ERC-20 tokens via XVM',
      riskOfImportTokens:
        'Please be aware of the risk that anyone can create a token, including creating fake versions of existing tokens.',
      tokenContractAddress: 'Token Contract Address',
      erc20ContractAddress: 'ERC-20 Token Contract Address',
      tipDestAddressFormat: 'Where can I find my {chain} address?',
      titleWithdraw: 'Withdraw {token}',
      titleVesting: 'Vesting info',
      connectionTroubles: {
        connectionTroubles: 'Connection Troubles',
        tipsDescription:
          'There are many reasons why you are unable to connect. Try below if it did not get sorted ask member of the community.',
        tryOtherEndpoints: 'Try other endpoints',
        changeFromHeader: 'Change the endpoint from network button on the header',
        clearLocalStorage: 'Clear the Local Storage',
        clearLocalStorageTip: 'This means your cache of the Portal on this browser will be cleared',
        metaUpdate: 'Metadata Update on Polkadot.js app',
        metaUpdateTip:
          'To ensure your wallet extension is up to date, check the Metadata tab and update if prompted.',
        goToDocs: 'Go to Troubleshoot on Docs',
        goToDocsTip: 'Any other issues please also go through the docs.',
        askCommunity: 'Ask our community',
        askCommunityDiscord: 'Ask our Discord community',
        askCommunityTip: 'Someone is always there for you.',
      },
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
    collators: 'Collators',
    tokenSupply: 'Token Supply',
    circulating: {
      circulatingSupply: 'Circulating Supply',
      supply: 'of {totalSupply}: ',
      circulating: 'Circulating',
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
    network: {
      networkStatuses: 'Network Status',
      updatedAgo: 'Updated {time} ago',
      xcmDepositWithdrawalAssets: 'XCM Deposit/Withdrawal Assets',
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
    treasury: 'Treasury',
    other: 'Other',
    locked: 'Locked',
    others: 'Others',
  },
  links: {
    gridlockWallet: 'Gridlock Wallet',
    goDecentralized: 'Go Decentralized!',
    portalIpfs: 'Portal is now on IPFS!',
    astarHome: 'Astar Home',
    astarDocs: 'Astar Docs',
  },
  disclaimer: {
    disclaimer: 'Disclaimer',
    introduce1: `By accessing and using the Astar ecosystem dApps, you confirm that you are eligible to do
    so and agree to the Astar Foundation`,
    introduce2: `. You understand and accept that your use of the dApps is at your own risk, and they are provided on an "as
    is" and "as available" basis without any express or implied warranties of any kind.`,
    terms: 'Terms of Services',
    privacy: 'Privacy Policy',
    chapter1: '1. Liability:',
    para1: `You understand and agree that the Astar Foundation shall not be held liable for any
    direct, indirect, incidental, special, consequential, or exemplary damages arising from
    your use of the Astar ecosystem dApps. This includes, but is not limited to, damages for
    loss of profits, goodwill, use, data or other intangible losses.`,
    chapter2: '2. Assumption of Network Risks:',
    para2: `You understand and agree that the Astar Foundation does not guarantee the security of the
    Astar ecosystem dApps or the safety of your personal information, including your wallet
    address, transaction history, and private keys. You agree to take appropriate measures to
    protect your personal information and to prevent unauthorized access to your wallet.`,
    chapter3: '3. No Guarantee of Security:',
    closeWord: `You also confirm that you are not a "Prohibited Person" and that neither you nor any
    person or entity that controls, is controlled by, or is under common control with you is a
    Prohibited Person. Finally, by clicking "Accept," you agree to the terms and conditions
    set forth above. If you do not agree, please click "Decline."`,
    agree: 'Agree',
    decline: 'Decline',
  },
  stakingV3: {
    title: 'dApp Staking v3',
    noDappSelected: 'No dApp selected.',
    stakerRewardsExpired: 'Staker rewards expired.',
    dappStaking: {
      Disabled: 'Pallet is disabled/in maintenance mode.',
      NoExpiredEntries: 'There are no expired entries to clean up.',
      NoStakingInfo: 'Account has no staking information for the contract',
      NotOperatedDApp: 'dApp is part of dApp staking but is not active anymore.',
      PeriodEndsNextEra: 'Period ends in the next era.',
      TooManyStakedContracts:
        'There are too many contract stake entries for the account. This can be cleaned up by either unstaking or cleaning expired entries.',
      TooManyUnlockingChunks:
        'Contract has too many unlocking chunks. Withdraw the existing chunks if possible or wait for current chunks to complete unlocking process to withdraw them.',
      UnavailableStakeFunds:
        'The staking amount surpasses the current balance available for staking.',
      UnclaimedRewards:
        'There are unclaimed rewards remaining from past eras or periods. They should be claimed before attempting any stake modification again.',
      UnstakeAmountTooLarge: 'Unstake amount is greater than the staked amount.',
      UnstakeFromPastPeriod:
        'Unstaking is rejected since the period in which past stake was active has passed.',
      ZeroAmount: 'Amount must be greater than 0.',
    },
    successfullyStaked: 'You successfully staked to {contractAddress}',
    voteTitle: 'Vote!',
    voteText: 'I would like to vote my tokens with',
    transferText: 'I would like to move my funds from',
    stakeVoteOn: 'And vote/stake on',
    stakeTitle: 'Stake!',
    minimumStakingAmount: 'Minimum staking amount is {amount} {symbol}',
    minBalanceAfterStaking:
      'Account must hold more than {amount} {symbol} transferrable tokens after you stake.',
    selectProjects: 'Select projects',
    chooseProject: 'Choose a project to vote',
    availableToVote: 'Available to vote',
    totalVote: 'Total vote',
    totalStake: 'Total stake',
    totalTransferable: 'Total transferable',
    lockedBalance: 'Locked balance',
    alreadyVoted: 'Already voted',
    alreadyStaked: 'Already staked',
    remainingLockedBalance: 'Remaining locked balance',
    voteLockedTokensWarning:
      'Be sure you vote on dapps otherwise those tokens are not eligible for any rewards.',
    rewardsWillBeClaimed: 'Your unclaimed rewards will be claimed.',
    basicRewards: 'Basic rewards',
    bonusRewards: 'Bonus rewards',
    dAppRewards: 'dApp rewards',
    done: 'Done',
    search: 'Search',
    build: 'Build',
    newDappPromotion: 'New dApp promotion',
    votingNow: 'Voting Now',
    voteNow: 'Vote now',
    voteStakeToday: 'Vote / Stake today',
    vote: 'Vote',
    voteToday: 'Be entitled to bonus pool today',
    stakeOn: 'Stake on {name}',
    tier: 'Tier',
    tierLeaderboard: 'Tier Leaderboard',
    projectLeaderboards: 'Project Leaderboards',
    rewardPerDay: 'Reward per era',
    myStaking: 'My Staking',
    myDapps: 'My dApps',
    unbonding: 'Unbonding',
    totalEstimatedRewards: 'Total estimated rewards',
    claim: 'Claim',
    dApp: 'dApp',
    stakedAmount: 'Staked amount',
    unstakedAmount: 'Locked but unstaked amount',
    bonusReward: 'Bonus reward',
    manage: 'Manage',
    add: 'Add',
    unbond: 'Unbond',
    unlock: 'Unlock',
    stake: 'Stake',
    move: 'Move',
    index: 'Index',
    chunk: 'Chunk',
    unbondingAmount: 'Unbonding amount',
    withdraw: 'Withdraw',
    relock: 'Re-lock',
    currentTier: 'Current Tier',
    numberOfStakers: 'Number of Stakers',
    totalEarned: 'Total Earned',
    yourDashboard: 'Your Dashboard',
    edit: 'Edit',
    editProjectPage: {
      title: 'Edit Project Page',
      text: 'You can change the images, description at any time.',
    },
    editYourInfo: {
      title: 'Edit your owner info',
      text: 'If you wish to change registered smart contract or rewards receiving address.',
    },
    addPromotion: {
      title: 'Add a promotion card',
      text: 'If you have anything to share with the community, you can create a card on the top page to promote about it!',
    },
    yourRewards: 'Your Rewards',
    availableToClaim: 'Available to claim',
    alreadyClaimed: 'Already claimed',
    eras: '{era} eras',
    claimed: 'Claimed',
    period: 'Period {period}',
    claimNow: 'Claim these rewards now, as they will expire at the end of the current period.',
    remainingEras: 'Remaining eras / blocks',
    back: 'Back',
    era: 'Era',
    numberOfDapps: 'Number of dApps',
    tvl: 'TVL',
    filledSlot: 'Filled slots',
    unfilledSlot: 'Unfilled slots',
    ourDapps: 'Our dApps',
    ourData: 'Our data',
    dapp: {
      voteAndStake: 'Vote & Stake',
      overview: 'Overview',
    },
    unregisteredDappInfo:
      "This project has been unregistered. You don't have to do anything - If you do not move funds within this period, you will continue to earn basic rewards and be entitled to receive bonus.",
    voteSuccess: 'You successfully voted on {number} dApp(s). All pending rewards are claimed.',
    unbondSuccess: 'You successfully unbonded from {dapp}.',
    unbondFromUnregisteredSuccess: 'You successfully unbonded from unregistered dApp {dapp}.',
    claimRewardSuccess: 'You successfully claimed your rewards.',
    withdrawSuccess: 'You successfully withdrew your locked tokens.',
    relockSuccess: 'You successfully re-locked your tokens.',
    searchDapps: 'Search dapps',
    startStakingNow: 'Start Staking Now',
    noEntry: 'No entry',
    burn: 'Burn',
  },
  bridge: {
    bridge: 'Bridge',
    history: 'Recent History',
    actionRequired: 'Action Required',
    claim: 'Claim',
    noHistory: 'No histories found',
    completed: 'Completed',
    inProgress: 'In Progress',
    approvalMaxAmount: 'Approve Max Amount (option)',
    ethereumBridge: {
      title: 'Ethereum Bridge',
      text: 'Bridge assets between {l1} and {l2}',
      text2:
        'Available on testnet! - To experience, connect your wallet to Astar zKatana (zkEVM testnet) and get testnet ETH',
      lean: '(learn more)',
    },
    astarBridge: {
      title: 'Astar Bridge',
      text: 'Bridge ASTR token and assets to {l2} from {substrateNetwork} EVM',
      text2: 'Currently under development',
    },
    celetBridge: {
      title: 'Celer Bridge',
      text: 'Bridge assets to {cbridgeNetworkName} Polkadot EVM via Celer Bridge',
    },
    warning32blocks: 'It could take around 10~20mins or more to finalize',
    warning2steps:
      'Bridging to L1 (Ethereum) involves 2 steps, and it requires users to make a claim on the L1 network (available in Recent History)',
    tokenInfo: {
      invalidTokenAddress: 'Invalid token address',
      tokenAddress: '{network} token address',
      tokenName: 'Token Name',
      tokenSymbol: 'Token Symbol',
      fromChainBal: 'From Chain Balance',
      destChainBal: 'Destination Chain Balance',
      tokenHasBeenAdded: 'The token has been added already',
      tokenNotSupported: "This token isn't supported on zkEVM",
      interactCarefully: 'Interact carefully with new or suspicious tokens',
    },
  },
};
