export default {
  confirm: '確認',
  cancel: 'キャンセル',
  change: '変更',
  connect: '接続',
  connected: '接続済み',
  disconnect: '接続を切る',
  copy: 'コピー',
  from: 'From',
  to: 'To',
  add: '追加',
  and: 'と',
  approve: '承認',
  estimated: 'およそ',
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
  max: '最大',
  clear: 'Clear',
  join: 'Join',
  native: 'Native',
  evm: 'EVM',
  wasm: 'WASM',
  new: '新',
  next: '次',
  addressFormat: '{network} Wallet アドレス',
  addressPlaceholder: '送金先 {network} アドレス',
  evmAddressPlaceholder: '送金先 EVM アドレス',
  ticker: 'Ticker',
  isComingSoon: '{value} is coming soon',
  amountToken: '{amount} {token}',
  select: 'Select',
  help: 'ヘルプ',
  share: '共有',
  multisig: 'マルチシグ',
  sort: {
    sortBy: 'Sort by',
    amountHightToLow: 'Amount: High to Low',
    amountLowToHigh: 'Amount: Low to High',
    alphabeticalAtoZ: 'Alphabetical: A to Z',
    alphabeticalZtoA: 'Alphabetical: Z to A',
  },
  warning: {
    warning: 'Warning',
    insufficientBalance: '{token} の残高不足',
    insufficientFee: '<注意> 資金不足のためトランザクションが失敗する可能性があります。',
    inputtedInvalidDestAddress: '送金先アドレスが有効ではありません。',
    inputtedNotUnifiedDestAddress: 'Inputted destination address has not been unified',
    blankDestAddress: 'Destination address is blank',
    inputtedInvalidAddress: 'アドレスが有効ではありません。',
    selectedInvalidNetworkInWallet: 'ウォレットに対して無効なネットワークです。',
    insufficientBridgeAmount: '最小送金額は {amount} {token} です。',
    insufficientOriginChainBalance: ' {chain} network の最低必要残高は {amount} {token} です。',
    insufficientOriginChainNativeBalance: 'Insufficient native token balance on {chain}',
    insufficientExistentialDeposit:
      '{network} network にある残高が existential depositi 以下です。',
    withdrawalNotSupport: '現在のところ {chain} への送金はサポートされていません。',
    ledgerNotOpened: 'Ledger has not opened Astar App. Please open it and refresh this page.',
  },
  toast: {
    transactionFailed: '送金失敗: {message}',
    completedHash: '表記ブロックハッシュで完了 #{hash}',
    completedTxHash: '表記トランザクションハッシュで完了 #{hash}',
    unableCalculateMsgPayload: 'Unable to calculate the message payload',
    amountMustNotBeZero: '送金額は0以上でなければいけません。',
    copyAddressSuccessfully: 'コピー完了!',
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
    updateMetadata: 'Metadata をアップデートしてください。',
    metadataAlreadyInstalled: 'Metadata はインストールされています。',
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
    speed: {
      speed: 'Transaction speed',
      speedTip: 'Transaction speed (Tip)',
      average: 'Average',
      fast: 'Fast',
      superFast: 'Super Fast',
      tipHelp: 'Tipは送金スピードを上げるのに重要です。',
  },
  decentralizedBanner: {
    bannerText:
       'Connected to Astar Portal: Decentralized Edition. Experiencing issues? Return to',
    goToClassicPortal: 'our Classic Portal',
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
    select: '接続するウォレットを選んでください。',
    nativeAccount: 'Native Accounts',
    evmAccount: 'EVM Accounts',
    multisigAccount: 'Multisig Accounts',
    accountUnification: 'Account Unification',    
    math: {
      supportsNetwork: 'Math Wallet は Shiden Network のみサポートしています。',
      switchNetwork:
        "Math Wallet エクステンションのネットワークを 'Shiden' に変更し、ページをリフレッシュしてください。",
    },
    showBalance: '{token} バランスを表示',
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
    getWallet: 'Haven’t got a {value} yet?',
    installWallet:
      '{value} をインストールする必要があります。完了したらこのページをリフレッシュしてください。',
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
      'Re-bondしたら資金はステーキングに戻ります。引き出す際は再度10eraのunbond期間が必要になります。',
    rebondTitle: 'The amount you wish to rebond',
    withdrawGuide: '引き出せる資金があります。',
    withdrawTitle: 'Ready to withdraw',
    unregisteredAlert:
      'このプロジェクトの登録は解除されています。Claimをしていただくことにより、ステーキング資金が返金されます。',
    claimAndUnbond: 'ステーキング解除と請求',
  },
  myReward: {
    totalStaked: 'Total Staked',
    availableToClaim: '請求可能額',
    estimatedRewards: 'Estimated Rewards',
    era: 'Era',
    claim: '請求',
    restake: '請求後に再ステーク',
    turnOff: 'Turn Off',
    totalEarned: '現在までのリワード総額',
    availableToClaimTip:
      '記載されているeraの数はdAppごとの総数になります。一度に請求できるのは５０個までで、長く放置すると複数回の請求(Claim）が必要になります。',
    availableToClaimTip2:
      'The number of eras that is shown here is per dApp. You may need to claim multiple times if you have too many unclaimed eras.',
    restakeTip:
      'オンにすることで、請求(Claim)時に自動的にリワードが再ステークされるようになります。',    
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
    transferableBalance: '送金可能残高',
    totalStake: 'Total stake:',
    yourStake: 'Your stake: ',
    add: 'Add',
    unbond: 'Unbond',
    unstake: 'Unstake',
    stake: 'Stake',
    claim: 'Claim',
    withdraw: 'Withdraw',
    unbondingEra: '引き出し可能まで {unbondingPeriod} eras のUnbonding期間があります。',
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
      '一定期間請求(Claim)がなかったためRe-Stakeの機能が一時的に使用できない状態です。一度Re-Stakeの機能をオフにし、Claim完了後に再度オンにしてください。',
    stakePage: {
      backToDappList: 'Back to dApps list',
      whereFundsFrom: '資金はどこから使用しますか？',
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
      requiredClaimFirst: 'トランザクションを送る前に請求(Claim)をしてください。',
      requiredClaimFirstCompounding:
        '{message} -コンパウンドをオフにし、請求(Claim)してから再度オンにしてください。',
      successfullyWithdrawn: '引き出しに成功しました。',
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
        '最小{amount} {symbol}が必要です。',
      allFundsWillBeTransferred:
        '最小 {minStakingAmount} {symbol} が必要なので全てのトークンがトランスファーされます。',
      invalidBalance: 'Insufficient transferrable balance to complete the transaction',
      warningLeaveMinAmount:
        'Account must hold greater than {amount}{symbol} in transferrable when you stake.',
    },
  },
  assets: {
    astarNativeAccount: 'Astar Native Account',
    astarEvmAccount: 'Astar EVM Account',
    assets: 'Assets',
    xcmAssetsShort: 'XCM Assets',
    xcmAssets: 'XCM Assets',
    xvmAssetsShort: 'XVM ERC-20 Assets',
    xvmAssets: 'XVM ERC-20 Assets',
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
    transferableBalance: '送金可能バランス',
    transferable: 'Transferable',
    evmDeposit: 'EVM deposit',
    yourEvmDeposit: 'Your EVM deposit',
    yourVestingInfo: 'Your Vesting Info',
    yourStaking: 'Your Staking',
    cantTransferToExcahges: '取引所には送金できません。',
    noHash: 'このトランザクションにハッシュはつきません。',
    addToWallet: 'Add to wallet',
    noResults: 'No results found :(',
    letsImportToken: 'There are no tokens listed. Let’s import them!',
    wrongNetwork: 'ウォレットが間違ったNetworkに接続されています。',
    connectNetwork: 'Connect to {network} RPC',
    invalidAddress: 'アドレスが有効ではありません。',
    importTokens: 'トークンをインポート',
    importXvmTokens: 'XVM を使いERC-20トークンをインポートする。',
    importErc20Tokens: 'ERC-20トークンをインポート',
    hideSmallBalances: '少ないバランスのトークンを非表示',
    unhideSmallBalances: '0バランス含む全てのトークンを表示',
    tokenHasBeenAdded: 'このトークンはすでに追加されています。',
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
      inputAddressManually: 'マニュアルでアドレスを入力する',
      goBack: 'Go back',
      selectChain: 'Select Chain',
      selectToken: 'Select Token',
      noTxRecords: 'トランザクションのレコードがありません。',
      mintTransferAmount: '最小送金額は {amount} {symbol} です。',
      howToUsePortal: 'HOW TO USE THE PORTAL',
      xcmIsDisabled: 'XCM with {network} is temporarily disabled',
      xcmEvmIsDisabled: 'XCM to {network} via EVM wallets is temporarily disabled',
    },
    modals: {
      max: 'Max',
      balance: 'Balance: {amount} {token}',
      available: 'Available: {amount} {token}',
      cannotBeSentErc20: 'ERC20 tokens cannot be sent to {network} Native addresses',
      notSendToExchanges: '取引所には送金しません。',
      notSendToEvmExchanges:
        '取引所のEVMデポジットアドレスではありません。そうであれば資金が失われるリスクも理解しています。',
      understandWarning: 'I understand that if I do so, the funds will likely be lost',
      notDestIsLedgerAccount:
        'The destination address is neither a ledger native account nor an exchange address. I understand that if I do so, the funds will likely be lost.',
      notDestIsExchangeAddress: 'Destination address is not an Exchange address',
      youWillReceive: 'You will receive',
      faucetNextRequest: 'Time left until the next request',
      countDown: '{hrs} hrs {mins} mins {secs} secs',
      whatIsFaucet: ' Faucet とは?',
      faucetBalance: 'Faucet Balance: {amount} {symbol}',
      faucetIntro:
        '各トランザクションには少額の費用がかかり、 {symbol} がない場合は送金ができないので、トランザクションに必要な {symbol} トークンをFaucetから受け取ります。',
      faucetDriedOut: 'Faucetが枯渇しています。Discordにレポートください。',
      availableToWithdraw: '引き出し可能',
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
      howToImportXvmTokens: 'Find out how to import ERC20 tokens via XVM',
      riskOfImportTokens:
        '既存のトークンの偽バージョンを作成するなど、誰でもトークンを作成できるリスクにご注意ください。',
      tokenContractAddress: 'Token Contract Address',
      erc20ContractAddress: 'ERC-20 Token Contract Address',
      tipDestAddressFormat: '{chain} address はどこで確認すればいい?',
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
        minBalIsRequired: 'Origin chain に最小バランスが設定されています。',
        fee: '費用は入力した金額から差し引かれます。',
        notInputExchanges: '取引所のアドレスを入力しないでください。',
        tooltip:
          '資金の損失を防ぐために、 {amount} {symbol} をオリジンチェーンアカウントに保管しています。origin chainから入金する場合、最小バランスを超えたトークンのみが送金可能です。',
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
