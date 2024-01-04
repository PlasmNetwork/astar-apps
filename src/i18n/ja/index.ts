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
    inputtedInvalidDestAddress: '無効な宛先アドレスが入力されました。',
    inputtedNotUnifiedDestAddress: '入力された宛先アドレスが規定に合っていません。',
    blankDestAddress: '宛先アドレスが空です。',
    inputtedInvalidAddress: 'アドレスが有効ではありません。',
    selectedInvalidNetworkInWallet: 'ウォレットに対して無効なネットワークです。',
    insufficientBridgeAmount: '最小送金額は {amount} {token} です。',
    insufficientOriginChainBalance: ' {chain} network の最低必要残高は {amount} {token} です。',
    insufficientOriginChainNativeBalance: '{chain} のネイティブトークンの残高不足です。',
    insufficientExistentialDeposit:
      '{network} network にある残高が existential depositi 以下です。',
    withdrawalNotSupport: '現在のところ {chain} への送金はサポートされていません。',
    ledgerNotOpened: 'Ledger が Astar アプリを開いていません。アプリを開き、このページを更新してください。',
  },
  toast: {
    transactionFailed: '送金失敗: {message}',
    completedHash: '表記ブロックハッシュで完了 #{hash}',
    completedTxHash: '表記トランザクションハッシュで完了 #{hash}',
    unableCalculateMsgPayload: 'メッセージのペイロードを計算できません。',
    amountMustNotBeZero: '送金額は0以上でなければいけません。',
    copyAddressSuccessfully: 'コピー完了!',
    clearedLocalStorage: 'ローカルストレージをクリアしました！ポータルは数秒で再読み込みされます。',
    checkYourTransactions: 'トランザクションをチェックしてください。',
    approveOnPolkasafe: 'Approve on PolkaSafe',
    success: '成功',
    note: 'Note',
    error: 'エラー',
    copied: 'コピーした',
    info: '情報',
    enablePolkasafe:
      'PolkaSafeの機能を有効にするには、ウォレットエクステンションにサインオンしてください。ポップアップが表示されるまで時間がかかる場合があります。',
  },
  common: {
    updateMetadata: 'Metadata をアップデートしてください。',
    metadataAlreadyInstalled: 'Metadata はインストールされています。',
    lightTheme: 'ライトテーマ',
    darkTheme: 'ダークテーマ',
    dApps: 'dApps',
    dappStaking: 'dApp Staking',
    staking: 'ステーキング',
    contract: 'Contract',
    ecosystem: 'エコシステム',
    closeSidebar: 'サイドバーを閉じる',
    twitter: 'X',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    linkedIn: 'LinkedIn',
    reddit: 'Reddit',
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'YouTube',
    docs: 'ドキュメント',
    loading: '読み込み中...',
    speed: {
      speed: 'トランザクションスピード',
      speedTip: 'トランザクションスピード(Tip)',
      average: '平均',
      fast: 'Fast',
      superFast: 'Super Fast',
      tipHelp: 'Tipは送金スピードを上げるのに重要です。',
    },
    status: {
      working: 'Working',
      fixing: 'Fixing',
      restricted: 'Restricted',
    },
  },
  sidenavi: {
    community: 'コミュニティ',
    myAssets: 'マイアセット',
    data: 'Data',
    discord: 'ディスコード',
    twitter: 'X',
    telegram: 'テレグラム',
    reddit: 'Reddit',
    youtube: 'Youtube',
    forum: 'Forum',
    github: 'Github',
    docs: 'Docs',
    settings: '設定',
    language: '言語',
    theme: 'テーマ',
    close: 'Close',
    comingsoon: 'Something ink!redible coming soon',
  },
  drawer: {
    endpoint: 'エンドポイント',
    viaEndpoint: '{value}経由',
    lightClientWarning: 'ライトクライアントによる接続はベータ版です。自己責任でご利用ください。',
    shibuyaTakes20mins: 'ライトクライアント経由でShibuyaに接続するのに20分以上かかるかもしれません。',
    takeLongerTimeToConnect: 'チェーンからデータをロードするのに時間がかかる場合があります。',
    takeLongerTimeToSend: 'トランザクションの送信に時間がかかったり、失敗する可能性があります。',
    zkNetworkTip: 'まずはじめに、EVMウォレットに接続してください',
  },
  wallet: {
    connectWallet: 'ウォレットを接続',
    select: 'このポータルに接続するウォレットを選択してください。',
    nativeAccount: 'Native アカウント',
    evmAccount: 'EVM アカウント',
    multisigAccount: 'マルチシグ アカウント',
    accountUnification: 'Account Unification',
    math: {
      supportsNetwork: 'MathウォレットはShidenネットワークにのみ対応です。',
      switchNetwork:
        'Mathウォレットの拡張機能であなたのネットワークをShidenに切り替え、このページを更新してください。',
    },
    showBalance: '{token}の残高を表示する',
    isLedgerAccount: 'これはLedgerアカウントです。Ledgerを接続し、Astar app が動いています。',
    multisig: {
      initPolkasafe: '署名要求のためにPolkaSafe SDKを初期化しています。しばらく時間がかかります。',
      noAccounts: 'マルチシグアカウントが見つかりません。',
      goToPokasafe: 'PolkaSafe で作成します。',
      proxy: 'Proxy',
    },
    unifiedAccount: {
      create: 'Unified Accountを作成',
      readCarefully: '必ずお読みください。',
      yourAccount: 'あなたのアカウント',
      astarNative: 'Astar Native',
      astarEvm: 'Astar EVM',
      introduce: '新技術の導入、Unified Account',
      general: '全般',
      onceUnified: 'アカウントは一度統一されると、分離されることはありません。',
      evmWallet: 'EVM ウォレット (Metamask のみ)',
      brandNewAccount: '新しく空のアカウントを作ることをお勧めします。',
      unstakedFirst:
        'もし、EVMアカウントがASTRトークンを保持している場合は、まずそれらのトークンをアンステークする必要があります。',
      xcTokens:
        'カスタム xcTokens をお持ちの場合、または Astar EVM ポータルにリストされていない xcTokens をお持ちの場合は、まず別のアカウントに転送する必要があります。私たちはトークンが見つからないため、新しいアカウントに移動できません。',
      automaticallyTransferred:
        'ERC20トークンだけでなく、すでにリストアップされている他のすべてのxcTokensは、新しいunified accountに自動的に転送されます。',
      override:
        'Polkadot.jsアプリで作成されたアカウントIDをすでにお持ちの場合は、このアカウント統一情報が上書きされます。',
      agreeToProceed:
        'すべて読みましたので、unified accountの作成に進みたいと思います。',
      agreeToDeposit: 'unified accountの作成には{cost}の費用がかかります。',
      agreeToSubmit: '私は一度統合されたアカウントは、切り離すことはできないと理解しています。',
      requirement:
        'unified accountを作成するには、SubstrateとEVM ウォレットの両方の拡張機能が必要であり、現在のところモバイルアプリからは不可能です。',
      haveAstarNative: '😎 私はAstar Nativeアカウントを持っています。',
      connectAstarNative:
        'Unified account はAstar Nativeアカウントが所有しています。ご希望のアドレスで接続し、アカウントを作成してください。',
      selectWallet: 'ウォレットを選択',
      notHaveAstarNative: '🥲 私はAstar Nativeアカウントを持っていません。',
      withoutUnifying:
        'あなたは統合せずにEVMアカウントで接続している間はすべてのメリットを受けることができます。ですから、Astar Nativeアカウントを持っていなくても心配はありません。しかしながら、 unified accountはメリットをもたらす可能性もあり、いつでもアカウントを作成することができます。',
      howToCreate: 'Astar Native アカウントの作成方法',
      findSubstrateWallets:
        'あなたは、より使いやすいSubstrateベースのウォレットを見つけることができるかもしれません。',
      checkNativeWallets: 'Native ウォレットをチェックします。',
      haveStakingBalance:
        'ステーキング残高があります。これらのステークされたトークンはunified accountにマージされません。まずはステークを解除してください。',
      unifiedAccountName: 'Unified Account 名',
      accountIcon: 'アカウントアイコン',
      balanceTransferred: 'EVMアカウントの残高が転送されます。',
      readyToUnify:
        'これで xcTokens が送信され、両方のアカウントを統合する準備ができました！確認する前に以下をチェックしてください。',
      congrats: 'おめでとうございます！\nあなたのアカウントは統合されました！\n\nもうEVM deposit（入金）は必要ありません！',
      onlyShibuya: 'この機能はShibuyaテストネットのみで利用可能です。',
      userTutorials: 'ドキュメントとチュートリアル',
      sendingXc20: 'XC20 トークンの送信を開始します。お待ちください...',
      editUnifiedAccount: 'Unified Accountを編集',
      selectAvatar: 'アバターを選択',
      save: '保存',
      noNfts:
        '現時点では NFT はミントされていません。 NFTをミントすると、unified accountをNFTで更新できるようになります。 当面はデフォルトのアイコンが使用されます。',
    },
  },
  installWallet: {
    getWallet: 'まだ{value}を得ていませんか？?',
    installWallet:
      "続行するには{value}をインストールする必要があります。インストールしたら、このページを更新してください。",
    install: 'インストール',
    learn: '学ぶ',
  },
  topMetric: {
    build2earn: 'Build2Earn',
    wayOfStaking: '革新的なステーキング',
    tvlInDapps: 'dAppsのTVL',
    currentEra: '現在のEra',
    eraInfo: '(ETA: {eta})',
    stakersRewards: 'ステーカー報酬',
    currentBlock: '現在のブロック',
    totalDapps: 'dAppの合計数',
    apr: 'APR',
    apy: 'APY',
  },
  myDapps: {
    index: 'Index',
    dapps: 'dApps',
    stakedAmount: 'ステークされた量',
    unbondingAmount: 'アンボンドしている量',
    remainingEra: '残りのEra',
    withdraw: '引き出し',
    rebond: '再ボンド',
    totalEarned: '獲得報酬合計',
    manage: '管理',
    add: '追加',
    unbond: 'アンボンド',
    rebondGuide:
      '再ボンドすると、資金はステーキングに戻ります。再度ステーキングを解除するには10eraが必要です。',
    rebondTitle: '再ボンド希望量',
    withdrawGuide: 'あなたの資金は引き出すことができます。',
    withdrawTitle: '引き出し準備完了',
    unregisteredAlert:
      'このプロジェクトは登録されていません。請求アクションが必要であり、資金は返却されます。',
    claimAndUnbond: '請求とアンボンド',
  },
  myReward: {
    totalStaked: 'ステーク合計',
    availableToClaim: '請求可能',
    estimatedRewards: '推定報酬額',
    era: 'Era',
    claim: '請求',
    restake: '請求後の再ステーク',
    turnOff: 'オフにする',
    totalEarned: '獲得報酬合計（通算）',
    availableToClaimTip:
      '未請求の報奨金の金額は推定であり、表示されている金額と実際に受け取る金額には若干の差がある場合があります。',
    availableToClaimTip2:
      'ここに表示されているERA数はdAppごとのものです。未請求のERAが多すぎる場合は、複数回請求する必要があるかもしれません。',
    restakeTip:
      'オンにすることで、クレーム時に報酬が自動的に再ステークされます。',
    claimable: {
      limitation:
        '1回の取引で請求できるERA数には制限があります。',
      nativeWallets: 'Native wallets: ≒56 eras',
      ledgerX: 'Ledger Nano X: 6 eras',
      ledgerSPlus: 'Ledger Nano S Plus: 6 eras',
      ledgerS: 'Ledger Nano S: 2 eras',
    },
    dappsOwners: 'dAppsオーナー！私たちはあなたのキャンペーンを促進するお手伝いをします。ご確認ください。',
    dappsOwnersLink: '詳細はこちら',
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
