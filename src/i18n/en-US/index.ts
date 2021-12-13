export default {
  confirm: 'Confirm',
  cancel: 'Cancel',
  change: 'Change',
  copy: 'Copy',
  max: 'Max',
  forget: 'Forget',
  close: 'Close',
  subscan: 'Subscan',
  usd: 'USD',
  warning: {
    insufficientFee: 'Warning! Transaction might failed due to insufficient fee',
  },
  common: {
    updateMetadata: 'Update Metadata',
    metadataAlreadyInstalled: 'Metadata Already Installed',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    dApps: 'dApps', // replaced by contract
    store: 'Store', // replaced by dappStaking
    dappStaking: 'dApp Staking',
    contract: 'Contract',
    plasmLockdrop: 'Plasm Lockdrop',
    closeSidebar: 'Close sidebar',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    docs: 'Documentation',
  },
  balance: {
    totalBalance: 'Total Balance',
    balance: 'Balance',
    transfer: 'Transfer',
    withdrawEvm: 'Withdraw EVM Deposit',
    faucet: 'Faucet',
    transferable: 'Transferable',
    vested: 'Vested',
    locked: 'Locked',
    evmDeposit: 'EVM Deposit',
    addressScheme: 'Current address scheme',
    modals: {
      connectMetamask: 'Connect Account with Ethereum Wallet',
      ethereumExtension: 'Ethereum Extension',
      chooseAccount: 'Choose Account',
      chooseNetwork: 'Choose Networks',
      switch: 'Switch',
      sigExtrinsicBlocked: 'Custom sig extrinsic calls has been temporarily blocked',
      transferToken: 'Transfer {token}',
      withdrawalToken: 'Withdrawal {token}',
      transferableBalance: '{token} transferable balance',
      withdrawableBalance: '{token} withdrawable balance',
      sendFrom: 'Send from',
      withdrawnFrom: 'Withdrawn from',
      sendTo: 'Send to',
      alert: 'Alert',
      invalidAddress: 'The address is not valid',
      faucet: 'Faucet',
      faucetAmount: 'Faucet amount',
      faucetNextRequest: 'Time left until the next request',
      countDown: '{hrs} hrs {mins} mins {secs} secs',
      whatIsFaucet: ' What is faucet and how does it help you?',
      faucetIntro:
        'There will be minimal costs for each transaction, and this is paid as gas using {unit} token. If you have no {unit} in your account, you cannot send any tokens. Faucet sends enough {unit} to cover the transaction cost.',
    },
  },
  contracts: {
    codeHashes: 'Code hashes',
    codeHash: 'Code hash',
    msgs: 'Messages',
    copyAbi: 'Copy ABI',
    contracts: 'Contracts',
    createYourDapp: 'Create your dApp',
    addExistingCodeHash: 'Add an existing code hash',
    modals: {
      createYourDapps: 'Create Your dApps ({step} / 2)',
      deploymentAccount: 'Deployment Account',
      projectName: 'Project name',
      nextStep: 'Next Step',
      previousStep: 'Previous Step',
      instantiationConstructor: 'Instantiation Constructor',
      upload: 'upload',
      contractFile: 'Contract file',
      file: 'File: {name}',
      uploadFile: 'Upload a file',
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
      save: 'Save',
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
          ' This operation does not remove the history of the contract from the chain, nor any associated funds from its account. The forget operation only limits your access to the contract on his browser.',
      },
      fees: {
        feesOf: 'Fees of',
        appliedToSubmission: 'will be applied to the submission',
      },
    },
  },
  dappStaking: {
    dappsStore: 'dApps Store',
    dappStaking: 'dApp Staking',
    registerDapp: 'Register dApp',
    noDappsRegistered: 'No dApps registered. Be the first to register one.',
    totalStake: 'Total stake:',
    yourStake: 'Your stake: ',
    add: 'Add',
    unstake: 'Unstake',
    stake: 'Stake',
    claim: 'Claim',
    stakersCount: 'Stakers:',
    warning: 'Minimum Staking Amount is {amount} and Up to {stakers} Stakers Per Contract',
    tvl: 'TVL IN DAPPS',
    dappsCount: 'DAPPS COUNT',
    requirement: 'REQUIREMENT',
    currentEra: 'CURRENT ERA',
    blocksUntilNextEra: 'Blocks until next era',
    stakerApy: 'APY: {value}%',
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
      unclaimedEras: 'Number of unclaimed eras',
      estimatedClaimedRewards: 'Claimed rewards',
      next: 'Next',
      previous: 'Previous',
      viewProject: 'View Project',
      license: 'License',
      staked: 'Staked',
    },
  },
};
