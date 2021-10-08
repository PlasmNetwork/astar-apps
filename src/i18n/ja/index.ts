export default {
  confirm: '確認',
  cancel: 'キャンセル',
  change: '変更',
  copy: 'コピー',
  max: '最大',
  close: '閉じる',
  forget: 'Forget',
  common: {
    updateMetadata: 'Metadataアップデート',
    metadataAlreadyInstalled: 'Metadata Already Installed',
    lightMode: 'ライトモード',
    darkMode: 'ダークモード',
    dApps: 'dApps',
    store: 'Store',
    plasmLockdrop: 'Plasm ロックドロップ',
    closeSidebar: 'サイドバーを閉じる',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    docs: 'ドキュメント',
  },
  balance: {
    totalBalance: 'Total Balance',
    balance: 'Balance',
    transfer: '送金',
    transferable: '支払可能残高',
    modals: {
      connectMetamask: 'MetaMaskへ接続',
      ethereumExtension: 'ECDSA (Ethereum extension)',
      chooseAccount: 'アカウントの選択',
      chooseNetwork: 'ネットワークの選択',
      switch: 'スイッチ',
      sigExtrinsicBlocked:
        'Custom sig extrinsic calls has been temporarily blocked',
      transferToken: 'Transfer {token}',
      transferableBalance: '{token} 支払可能残高',
      sendFrom: '送信元',
      sendTo: '送信先',
      alert: 'Alert',
    },
  },
  dapps: {
    codeHashes: 'Code hashes',
    codeHash: 'Code hash',
    msgs: 'Messages',
    copyAbi: 'Copy ABI',
    contracts: 'Contracts',
    createYourDapp: 'Create your dApp',
    addExistingCodeHash: 'Add an existing code hash',
    modals: {
      createYourDapps: 'dAppsの作成 ({step} / 2)',
      deploymentAccount: 'Deployment Account',
      projectName: 'Project name',
      nextStep: '次に進む',
      previousStep: '前に戻る',
      instantiationConstructor: 'Instantiation Constructor',
      upload: 'アップロード',
      contractFile: 'コントラクトファイル',
      file: 'ファイル: {name}',
      uploadFile: 'ファイルをアップロード',
      dropFile: 'Drop the files here ...',
      orDrag: 'or drag and drop',
      callContract: 'Call a Contract',
      contractToUse: 'Contract to use:',
      callFromAccount: 'Call from account',
      msgToSend: 'Message to send',
      outcome: 'Outcome',
      read: 'Read',
      execute: 'Execute',
      codeBundleName: 'Code bundle name',
      contractAbi: 'Contract ABI',
      save: '保存',
      removal: 'removal',
      removeCode: {
        first:
          'You are about to remove this code from your list of available code hashes. Once completed, should you need to access it again, you will have to manually add the code hash again.',
        second:
          'This operation does not remove the uploaded code WASM and ABI from the chain, nor any deployed contracts. The forget operation only limits your access to the code on this browser.',
      },
      removeContract: {
        first:
          "You are about to remove this contract from your list of available contracts. Once completed, should you need to access it again, you will have to manually add the contract's address in the Instantiate tab.",
        second:
          'This operation does not remove the history of the contract from the chain, nor any associated funds from its account. The forget operation only limits your access to the contract on his browser.',
      },
      fees: {
        feesOf: 'Fees of',
        appliedToSubmission: 'will be applied to the submission',
      },
    },
  },
  store: {
    registerDapp: 'dAppを登録',
    noDappsRegistered: 'No dApps registered. Be a first to register one.',
    totalStake: 'Total stake:',
    yourStake: 'Your stake: ',
    add: 'Add',
    unstake: 'Unstake',
    stake: 'Stake',
    claim: '報酬',
    modals: {
      alreadyClaimed: 'Already claimed:',
      contractRewards: 'Contract rewards:',
      yourRewards: 'Your rewards',
      contractAddress: 'Contract address {address}',
      logo: 'ロゴ',
      register: '登録',
      address: 'アドレス',
    },
  },
};
