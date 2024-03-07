export default {
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  change: 'Cambiar',
  connect: 'Conectar',
  connected: 'Conectado',
  disconnect: 'Desconectado',
  copy: 'Copiar',
  from: 'Desde',
  to: 'Para',
  add: 'Agregar',
  and: 'Y',
  approve: 'Aprobar',
  estimated: 'Estimado',
  forget: 'Olvidar',
  remove: 'Remover',
  close: 'Cerrar',
  manage: 'Manejar',
  subscan: 'Subscan',
  blockscout: 'Blockscout',
  usd: 'USD',
  'polkadot-js': 'Polkadot.js',
  'polkadot-js-app': 'App de Polkadot.js',
  metamask: 'MetaMask',
  clover: 'Trébol',
  mathwallet: 'Math Wallet',
  wallet3: 'Wallet 3',
  alert: 'Alerta',
  max: 'Máximo',
  clear: 'Limpiar',
  join: 'Unir',
  native: 'Nativo',
  evm: 'EVM',
  wasm: 'WASM',
  new: 'NUEVO',
  next: 'Siguiente',
  addressFormat: 'Dirección de la billetera {network}',
  addressPlaceholder: 'Dirección destino {network} ',
  evmAddressPlaceholder: 'Dirección EVM de destino',
  ticker: 'Marcador',
  isComingSoon: '{value} pronto estará disponible',
  amountToken: '{amount} {token}',
  select: 'Selecciona',
  help: 'Ayuda',
  share: 'Comparte',
  multisig: 'Multisig',
  sort: {
    sortBy: 'Ordenar por',
    amountHightToLow: 'Cantidad: mayor a menor',
    amountLowToHigh: 'Cantidad: menor a mayor',
    alphabeticalAtoZ: 'Letra inicial: A a la Z',
    alphabeticalZtoA: 'Letra inicial: Z a la A',
  },
  warning: {
    warning: 'Advertencia',
    insufficientBalance: 'Balance {token} insuficiente',
    insufficientFee: '¡Advertencia! La transacción podría fallar debido a una tasa insuficiente',
    inputtedInvalidDestAddress: 'Dirección de destino introducida no válida',
    inputtedNotUnifiedDestAddress: 'La dirección de destino introducida no ha sido unificada',
    blankDestAddress: 'Dirección de destino está en blanco',
    inputtedInvalidAddress: 'Dirección introducida no válida',
    selectedInvalidNetworkInWallet: 'Red no válida seleccionada en su cartera',
    insufficientBridgeAmount: 'Mínimo monto transferible es {amount} {token}',
    insufficientOriginChainBalance: 'Balance mínimo en la red {chain} es {amount} {token}',
    insufficientOriginChainNativeBalance:
      'Balance insuficiente de tokens nativos en la red {chain}',
    insufficientExistentialDeposit:
      'Los saldos de las cuentas en la red {network} son inferiores al importe del depósito existencial',
    withdrawalNotSupport: 'El Portal no admite retiros en la red {chain} en este momento',
    ledgerNotOpened:
      'Ledger no ha abierto la aplicación Astar. Por favor, ábrala y actualice esta página.',
  },
  toast: {
    transactionFailed: 'Transacción fallida con el error: {message}',
    completedHash: 'Completado en el hash de bloque #{hash}',
    completedTxHash: 'Completado en el hash de la transacción #{hash}',
    unableCalculateMsgPayload: 'No se ha podido calcular la carga útil del mensaje',
    amountMustNotBeZero: 'La cantidad de token a transmitir no debe ser cero',
    copyAddressSuccessfully: '¡Copiada la dirección correctamente!',
    clearedLocalStorage:
      '¡Has borrado tu almacenamiento local! El portal se recargará en unos segundos',
    checkYourTransactions: 'Compruebe sus transacciones',
    approveOnPolkasafe: 'Aprobar en PolkaSafe',
    success: 'Éxito',
    note: 'Nota',
    error: 'Error',
    copied: 'Copiado',
    info: 'Info',
    enablePolkasafe:
      'Inicie sesión en la extensión del monedero para activar la función PolkaSafe; la ventana emergente puede tardar un poco en aparecer.',
  },
  common: {
    updateMetadata: 'Actualizar metadatos',
    metadataAlreadyInstalled: 'Metadatos ya instalados',
    lightTheme: 'Tema claro',
    darkTheme: 'Tema oscuro',
    dApps: 'dApps',
    dappStaking: 'dApp Staking',
    staking: 'Staking',
    contract: 'Contrato',
    ecosystem: 'Ecosistema',
    closeSidebar: 'Cerrar la barra lateral',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    linkedIn: 'LinkedIn',
    reddit: 'Reddit',
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'YouTube',
    docs: 'Documentación',
    loading: 'Cargando...',
    speed: {
      speed: 'Velocidad de transacción',
      speedTip: 'Velocidad de transacción (Tip)',
      average: 'Promedio',
      fast: 'Rápido',
      superFast: 'Súper rápido',
      tipHelp: 'Una propina es importante para agilizar las transacciones',
    },
    status: {
      working: 'Trabajando',
      fixing: 'Arreglando',
      restricted: 'Restringido',
    },
  },
  sidenavi: {
    community: 'Comunidad',
    myAssets: 'Mis activos',
    data: 'Datos',
    discord: 'Discord',
    twitter: 'Twitter',
    telegram: 'Telegram',
    reddit: 'Reddit',
    youtube: 'Youtube',
    forum: 'Forum',
    github: 'Github',
    docs: 'Documentos',
    settings: 'Configuraciones',
    language: 'Idioma',
    theme: 'Tema',
    close: 'Cerrar',
    comingsoon: 'Pronto habrá ink!redible',
  },
  drawer: {
    endpoint: 'Endpoint',
    viaEndpoint: 'via {value}',
    lightClientWarning:
      'La conexión a través del cliente Light está en fase beta. Utilícelo bajo su propia responsabilidad.',
    shibuyaTakes20mins:
      'Puede tardar más de 20 minutos en conectar con Shibuya a través del cliente Light',
    takeLongerTimeToConnect: 'Puede que tarde más en cargar los datos de las cadenas',
    takeLongerTimeToSend: 'Puede tardar más o fallar en el envío de transacciones',
    zkNetworkTip: 'Por favor, conéctese primero a las billeteras EVM',
  },
  wallet: {
    connectWallet: 'Conectar billetera',
    select: 'Por favor, selecciona una billetera para conectarse a este Portal',
    nativeWallets: 'Cuentas nativas',
    evmWallets: 'Cuentas EVM',
    multisigAccount: 'Cuentas multisig',
    accountUnification: 'Unificación de cuentas',
    math: {
      supportsNetwork: 'Math Wallet solo es compatible con la red Shiden',
      switchNetwork: 'Cambia tu red a "Shiden" en la extensión Math Wallet y actualiza esta página',
    },
    showBalance: 'Mostrar saldo en {token}',
    isLedgerAccount: 'Esta es una cuenta Ledger, conectada y ejecutando la aplicación Astar',
    multisig: {
      initPolkasafe:
        'Inicializando PolkaSafe SDK para la solicitud de firma; esto puede tardar un rato',
      noAccounts: 'No se han encontrado cuentas multisig',
      goToPokasafe: 'Vaya a PolkaSafe para crear una',
      proxy: 'Proxy',
    },
    unifiedAccount: {
      create: 'Crear una cuenta unificada',
      readCarefully: 'Por favor, lea atentamente',
      yourAccount: 'Tu cuenta',
      astarNative: 'Astar nativo',
      astarEvm: 'Astar EVM',
      introduce: 'Introduciendo una nueva tecnología: cuenta unificada',
      general: 'General',
      onceUnified: 'Una vez unificadas las cuentas, no se separarán.',
      evmWallet: 'Billetera EVM (Solo Metamask)',
      brandNewAccount: 'Se recomienda crear una nueva cuenta vacía.',
      unstakedFirst:
        'Si la cuenta EVM tiene algún token ASTR en staking, es necesario sacarlo del staking primero, ya que no se fusionará automáticamente.',
      xcTokens:
        'Si tienes xcTokens personalizados o alguno de los xcTokens no aparece en el Portal Astar EVM, debes transferirlos primero a una cuenta diferente. No podremos encontrar esos tokens y por lo tanto no podremos moverlos a la nueva cuenta.',
      automaticallyTransferred:
        'Todos los demás xcTokens ya listados, así como los tokens ERC20, se transferirán automáticamente a la nueva cuenta unificada.',
      override:
        'Si ya dispone de un ID de cuenta creado en la aplicación Polkadot.js, esta información de unificación de cuenta prevalecerá sobre la siguiente.',
      agreeToProceed:
        'He leído todo y me gustaría proceder a crear una cuenta unificada por favor.',
      agreeToDeposit: 'Costos de crear una cuenta unificada {cost}',
      agreeToSubmit: 'Entiendo que una vez unificadas las cuentas, no se podrán separar.',
      requirement:
        'Para crear una cuenta unificada, se requiere tanto la extensión de Substrate como la de la billetera EVM y actualmente no es posible desde las aplicaciones móviles.',
      haveAstarNative: '😎 TENGO una cuenta Astar nativa',
      connectAstarNative:
        'La cuenta unificada pertenece a una cuenta Astar nativa. Por favor, conéctese con una dirección deseada y cree una cuenta.',
      selectWallet: 'Selecciona una billetera',
      notHaveAstarNative: '🥲 NO TENGO una cuenta Astar nativa',
      withoutUnifying:
        'Usted puede recibir todos los beneficios mientras se está conectando con la cuenta EVM sin unificar. Así que no hay de qué preocuparse si no tienes una cuenta Astar nativa. Sin embargo podría haber una característica que la cuenta unificada puede beneficiarse y siempre se puede crear una cuenta en cualquier momento.',
      howToCreate: '¿Cómo crear una cuenta Astar nativa?',
      findSubstrateWallets:
        'También puede encontrar billeteras basadas en Substrate que pueden ser más amigables. ',
      checkNativeWallets: 'Consulte nuestras billeteras nativas.',
      haveStakingBalance:
        'Tiene algo de saldo en Staking. Esas fichas no se fusionarán con la cuenta unificada. Por favor, sáquelas de Staking primero.',
      unifiedAccountName: 'Nombre de cuenta unificada',
      accountIcon: 'Ícono de la cuenta',
      balanceTransferred: 'Su saldo en la cuenta EVM va a ser transferido.',
      readyToUnify:
        'Ahora los xcTokens han sido enviados y estás listo para unificar ambas cuentas. Por favor, compruebe a continuación antes de confirmar.',
      congrats:
        '¡Felicidades! \n¡Tu cuenta está unificada!\n\n¡Ya no es necesario depositar en EVM!',
      onlyShibuya: 'Esta característica está únicamente disponible para la testnet Shibuya.',
      userTutorials: 'Documentación y tutoriales',
      sendingXc20: 'Comienza el envío de tokens XC20, por favor espere...',
      editUnifiedAccount: 'Editar cuenta unificada',
      selectAvatar: 'Selecciona Avatar',
      save: 'Guardar',
      noNfts:
        'De momento no tienes NFT minteados. Cuando mintees algunos podrás actualizar tu cuenta unificada con un NFT. Por el momento se utilizará el icono por defecto.',
    },
  },
  installWallet: {
    getWallet: '¿Todavía no tienes {value}?',
    installWallet:
      'Tendrás que instalar {value} para continuar. Una vez instalado, actualiza la página.',
    install: 'Instalar',
    learn: 'Aprender',
  },
  topMetric: {
    build2earn: 'Build2Earn',
    wayOfStaking: 'Una forma innovadora de hacer Staking',
    tvlInDapps: 'TVL en dApps',
    currentEra: 'Era actual',
    eraInfo: '(ETA: {eta})',
    stakersRewards: 'Recompensas para los stakers',
    currentBlock: 'Bloque actual',
    totalDapps: 'dApps totales',
    apr: 'APR',
    apy: 'APY',
  },
  myDapps: {
    index: 'Índice',
    dapps: 'dApps',
    stakedAmount: 'Cantidad en Staking',
    unbondingAmount: 'Importe de liberación',
    remainingEra: 'Época restante',
    withdraw: 'Retirar',
    rebond: 'Reafianzar',
    totalEarned: 'Total ganado',
    manage: 'Administrar',
    add: 'Agregar',
    unbond: 'Desvincular',
    rebondGuide:
      'Una vez reafiliado tus fondos vuelven a estar en Staking. Usted necesitará 10era para desteakear de nuevo.',
    rebondTitle: 'El importe que desea reafianzar',
    withdrawGuide: 'Tus fondos están disponibles para retirar.',
    withdrawTitle: 'Listo para retirar',
    unregisteredAlert:
      'Este proyecto no ha sido registrado. Se requiere una acción de reclamación y se le devolverán sus fondos.',
    claimAndUnbond: 'Reclamar y desvincularse',
  },
  myReward: {
    totalStaked: 'Total Stakeado',
    availableToClaim: 'Disponible para reclamar',
    estimatedRewards: 'Recompensas estimadas',
    era: 'Era',
    claim: 'Reclamar',
    restake: 'Reestakear después de reclamar',
    turnOff: 'Desactivar',
    totalEarned: 'Total ganado (todo el tiempo)',
    availableToClaimTip:
      'El importe de las recompensas no reclamadas es estimado y puede haber una pequeña diferencia entre lo que se muestra y lo que realmente recibe.',
    availableToClaimTip2:
      'El número de eras que se muestra aquí es por dApp. Es posible que tengas que reclamar varias veces si tienes demasiadas eras sin reclamar.',
    restakeTip:
      'Al activarlo, tus recompensas se irán a Staking automáticamente cuando hagas una reclamación.',
    claimable: {
      limitation:
        'Existe una limitación en el número de eras que pueden reclamarse en una transacción.',
      nativeWallets: 'Billeteras nativas: ≒56 eras',
      ledgerX: 'Ledger Nano X: 6 eras',
      ledgerSPlus: 'Ledger Nano S Plus: 6 eras',
      ledgerS: 'Ledger Nano S: 2 eras',
    },
    dappsOwners:
      '¡Propietarios de dApps! Ahora podemos ayudarles a promocionar sus campañas. Por favor, compruebe',
    dappsOwnersLink: 'los detalles.',
  },
  dappStaking: {
    myStaking: 'Mi Staking',
    myRewards: 'Mis recompensas',
    unbonding: 'Desvinculación',
    myDapps: 'Mis dApps',
    dappRegistered: '¡Felicidades! Su contrato ha sido aprobado, por favor, suba los detalles',
    welcomeBanner:
      '¡Felicidades! 🎉 Rellena los datos de tu dApp para que los usuarios tengan una mejor visión general de tu aplicación. Los datos actualizados aparecerán en la página de la dApp en breve.',
    desktopOnlyBanner: 'El registro de aplicación está únicamente disponible en computador',
    registerNow: 'Regístrese ahora',
    transferableBalance: 'Saldo transferible',
    totalStake: 'Stake total:',
    yourStake: 'Tu stake: ',
    add: 'Agregar',
    unbond: 'Desvincular',
    unstake: 'Sacar de staking',
    stake: 'Stake',
    claim: 'Reclamar',
    withdraw: 'Retirar',
    unbondingEra: 'La desvinculación tarda {unbondingPeriod} eras antes de que puedas retirar',
    willUnstakeAll:
      'Desaprovechará todo su saldo apostado porque la cantidad mínima apostada es {minStakingAmount} {symbol}',
    turnOn: 'Activar',
    turnOff: 'Desactivar',
    on: 'ON',
    off: 'OFF',
    stakeNow: 'Stakea ahora',
    edit: 'Editar',
    developerIncentive: 'Incentivo al desarrollador',
    tokenEra: '{token}/era',
    dappStakingEvm: 'dApp Staking está disponible en EVM',
    onChainData: 'Datos en la cadena',
    stakingTvl: 'TVL en Staking',
    transactions: 'Transacciones',
    uaw: 'Billeteras únicas activas',
    cantClaimWihtoutError:
      'No puedes reclamar con la reapuesta automática porque ha pasado un tiempo desde que reclamaste tus recompensas. Por favor, desactiva la función de reapuesta automática para poder reclamar. Una vez que hayas reclamado las recompensas, podrás volver a activar la reanudación automática. El equipo de interfaz de usuario está trabajando para solucionar este problema.',
    stakePage: {
      backToDappList: 'Regresar a la lista de dApps',
      whereFundsFrom: '¿De dónde le gustaría obtener sus fondos?',
    },
    last30days: '(Últimos 30 días)',
    dappPage: {
      back: 'Regresar',
      goBackToTopPage: 'Volver a la página principal',
      stakeOrSwitchTo: 'Stake o cambiar a',
      totalStaked: 'Total Stakeado',
      totalStaker: 'Total apostadores',
      team: 'Equipo',
      projectOverview: 'Descripción del proyecto',
      projectSite: 'Sitio del proyecto',
      goToApp: 'Ir a la aplicación',
      goToWebsite: 'Ir al sitio web',
      virtualMachine: 'Máquina virtual',
      contractAddress: 'Dirección del contrato inteligente',
      license: 'Licencia',
      community: 'Comunidad',
      wallets: 'Billeteras',
      stats: 'Estadísticas',
    },
    modals: {
      contractAddress: 'Dirección del contrato {address}',
      license: 'Licencia',
      startUnbonding: 'Empezar a desvincularse',
      unbondFrom: 'Desvinculación desde {name}',
      builder: {
        title: 'Creador',
        githubAccount: 'Cuenta de GitHub',
        twitterAccount: 'Cuenta de Twitter',
        linkedInAccount: 'Cuenta de LinkedIn',
        image: 'Imágenes de los creadores (Tamaño máximo del archivo a subir: {size})',
        imageRecomendation: 'Se recomienda una imagen cuadrada de 500px como mínimo.',
        error: {
          name: 'El nombre del creador es requerido',
          nameExists: 'El nombre ya está siendo utilizado por otro desarrollador',
          invalidUrl: 'Url inválido.',
          accountRequired: 'Se requiere al menos una cuenta.',
          builderImageRequired: 'La imagen del creador es requerida.',
          buildersRequired: 'Se necesitan al menos dos creadores.',
          builderUrlRequired: 'Se necesita al menos una URL de cuenta.',
        },
      },
      builders: 'Información de los creadores',
      communityLabel: 'Comunidad',
      community: {
        title: 'Comunidades',
        discordAccount: 'Cuenta de Discord',
        twitterAccount: 'Cuenta de Twitter',
        redditAccount: 'Cuenta de Reddit',
        facebookAccount: 'Cuenta de Facebook',
        tiktokAccount: 'Cuenta de TikTok',
        youtubeAccount: 'Cuenta de YouTube',
        instagramAccount: 'Cuenta de Instagram',
        githubAccount: 'Cuenta de GitHub',
        communityRequired: 'Se requiere al menos un enlace comunitario.',
      },
      introduction: {
        title: '¡Una cosa más!',
        promotionCard:
          'Cuando aparezca en la lista, aparecerá una tarjeta de promoción como esta, por favor rellene la descripción dentro de los 65 caracteres.',
        placeholder: 'Por favor, agrega tu introducción',
        characters: '{characters} de un total de 65 caracteres',
      },
      description: 'Descripción',
      markdown: 'Marcación',
      preview: 'Vista previa',
      addAccount: 'Agregar una cuenta',
      addLogo: 'Agregar una imagen para el logo',
      addImage: 'Agregar una imagen',
      images: 'Imagénes (Tamaño recomendado {ratio} en {size})',
      imagesRequired: 'Se requieren al menos 4 imágenes.',
      descriptionRequired: 'Cuéntale al mundo algo sobre tu dApp.',
      contractTypeTitle: 'Su proyecto está en',
      tagsTitle: 'Etiquetas',
      categoryTitle: 'Seleccione la categoría principal',
      submit: 'Enviar',
      dappNameRequired: 'El nombre de la dApp es obligatorio',
      projectUrlRequired: 'Se requiere la URL del proyecto.',
      name: 'Nombre',
      projectUrl: 'URL del proyecto',
      dappImageRequired: 'El logo del proyecto es necesario',
      projectLogo: 'Logo del proyecto',
    },
    toast: {
      successfullyClaimed: 'Reclamada {amount} con éxito',
      requiredClaimFirst: 'Reclame sus recompensas antes de enviar la transacción',
      requiredClaimFirstCompounding:
        '{message} -Desactive la capitalización, reclame sus premios y active de nuevo la capitalización.',
      successfullyWithdrawn: 'Saldo retirado con éxito',
      successfullySetRewardDest: 'Ha establecido correctamente el destino de la recompensa',
      successfullyStaked: 'Has hecho Staking con éxito en {contractAddress}',
      successfullyUnbond: 'Ha iniciado con éxito el proceso de desvinculación de {contractAddress}',
      successfullyNominationTransfer:
        'Has hecho Staking con éxito a {targetContractId} desde {fromContractId}',
    },
    error: {
      onlySupportsSubstrate: 'dApp staking sólo admite billeteras Substrate',
      notSupportZkEvm: 'dApp staking no soporta redes zkEVM',
      notEnoughMinAmount:
        'La cantidad de fichas a hacer Staking debe ser superior a {amount} {symbol}',
      allFundsWillBeTransferred:
        'Todos los fondos se transferirán porque el importe mínimo del Staking es de {minStakingAmount} {symbol}',
      invalidBalance: 'Saldo transferible insuficiente para completar la transacción',
      warningLeaveMinAmount:
        'La cuenta debe tener más de {amount}{symbol} en transferible al hacer stake.',
    },
  },
  assets: {
    astarNativeAccount: 'Cuenta Astar nativa',
    astarEvmAccount: 'Cuenta Astar EVM',
    assets: 'Activos',
    xcmAssetsShort: 'Activos XCM',
    xcmAssets: 'Activos XCM (Mensaje de cadena cruzada)',
    xvmAssetsShort: 'Activos XVM ERC-20',
    xvmAssets: 'Activos XVM (Máquina virtual cruzada) ERC-20',
    nativeAccount: 'Cuenta nativa',
    evmAccount: 'Cuenta EVM',
    switchToEvm: 'Cambiar a EVM',
    totalBalance: 'Balance total',
    transfer: 'Transferir',
    send: 'Enviar',
    syncing: 'Sincronizando...',
    faucet: 'Faucet',
    bridge: 'Puente',
    manage: 'Administrar',
    xcm: 'XCM',
    wrap: 'Envuelve',
    explorer: 'Explorar',
    withdraw: 'Retirar',
    view: 'Ver',
    expand: 'Expandir',
    collapse: 'Colapsar',
    transferableBalance: 'Balance transferible',
    transferable: 'Transferible',
    evmDeposit: 'Déposito EVM',
    yourEvmDeposit: 'Tu depósito EVM',
    yourVestingInfo: 'Sus datos de adquisición',
    yourStaking: 'Tu Staking',
    cantTransferToExcahges: 'No se puede transferir a Exchanges',
    noHash: 'Tu transacción no tendrá un hash',
    addToWallet: 'Añadir a la billetera',
    noResults: 'No se han encontrado resultados :(',
    letsImportToken: 'No hay tokens en la lista. ¡Vamos a importarlos!',
    wrongNetwork: 'Billetera conectada a la red equivocada',
    connectNetwork: 'Conectar al RPC {network}',
    invalidAddress: 'La dirección no es válida',
    importTokens: 'Importar tokens',
    importXvmTokens: 'Importar tokens ERC-20 a través de XVM',
    importErc20Tokens: 'Importar tokens (ERC-20)',
    hideSmallBalances: 'Ocultar saldos pequeños',
    unhideSmallBalances: 'Desocultar saldos pequeños',
    tokenHasBeenAdded: 'El token ya ha sido añadido',
    assetsAreNowFolded:
      'Todas las utilidades para el token {token} están ahora plegadas - ¡Abre aquí!',
    theSignatory: '{account} es el firmante',
    myWallet: 'Mi billetera',
    reward: 'Recompensa',
    lockedTokens: 'Tokens bloqueados',
    vesting: 'Adquisición',
    reserved: 'Reservado',
    favorite: 'Favorito',
    addToFavorite: 'Agregar a favorito',
    removeFromFavorite: 'Remover de favorito',
    unifyAccounts: 'Cuentas unificadas',
    yourEstimatedRewards: 'Reclama tus recompensas estimadas',
    toast: {
      completedMessage: 'Has enviado {transferAmt} {symbol} a {toAddress}',
      completedBridgeMessage: 'Has enviado {transferAmt} {symbol} de {fromChain} a {toChain}',
    },
    transferPage: {
      backToAssets: 'Regresar a activos',
      crossChainTransfer: 'Transferir Cross-chain',
      xcm: '(XCM)',
      faq: 'FAQ',
      recentHistory: 'Historia reciente',
      hotTopic: 'Tema del día',
      inputAddressManually: 'Introducir una dirección manualmente',
      goBack: 'Regresar',
      selectChain: 'Seleccionar cadena',
      selectToken: 'Seleccionar token',
      noTxRecords: 'La cuenta aún no tiene ningún registro de transacciones',
      mintTransferAmount: 'El importe mínimo de transferencia es {amount} {symbol}',
      howToUsePortal: '¿CÓMO USAR EL PORTAL?',
      xcmIsDisabled: 'XCM con {network} está temporalmente desabilitado',
      xcmEvmIsDisabled: 'XCM a {network} via billeteras EVM está temporalmente desactivado',
    },
    modals: {
      max: 'Máximo',
      balance: 'Balance: {amount} {token}',
      available: 'Disponible: {amount} {token}',
      cannotBeSentErc20: 'Los tokens ERC20 no pueden enviarse a direcciones nativas {network}',
      notSendToExchanges: 'NO estoy enviando tokens a Exchanges',
      notSendToEvmExchanges:
        'NO voy a enviar tokens a las direcciones de depósito EVM de Exchange. Entiendo que si lo hago, es probable que los fondos se pierdan.',
      understandWarning: 'Entiendo que si lo hago, es probable que los fondos se pierdan',
      notDestIsLedgerAccount:
        'La dirección de destino no es ni una cuenta nativa de ledger ni una dirección de exchange. Entiendo que si lo hago, es probable que los fondos se pierdan.',
      notDestIsExchangeAddress: 'La dirección de destino no es una dirección Exchange',
      youWillReceive: 'Recibirás',
      faucetNextRequest: 'Tiempo restante hasta la siguiente solicitud',
      countDown: '{hrs} horas {mins} minutos {secs} segundos',
      whatIsFaucet: ' ¿Qué es faucet y cómo le ayuda?',
      faucetBalance: 'Balance del faucet: {amount} {symbol}',
      faucetIntro:
        'Hay una pequeña comisión por cada transacción, que se paga con tokens {symbol}. Si no tienes {symbol} en tu cuenta, no puedes enviar ningún token. Faucet envía suficientes {symbol} para cubrir la comisión de la transacción.',
      faucetDriedOut:
        'La identificación del faucet se ha secado. Por favor, informe a uno de los miembros de nuestro equipo en Discord',
      availableToWithdraw: 'Disponible para retirar',
      totalDistribution: 'Distribución total',
      alreadyVested: 'Ya adquirido',
      remainingVests: 'Chalecos restantes',
      unlockPerBlock: '{perToken} {symbol} por bloque hasta el bloque {untilBlock}',
      availableToUnlock: 'Disponible para desbloquear',
      unlock: 'Desbloquear',
      transfer: 'Transferir',
      evmXcmDeposit: 'EVM (Depósito)',
      evmXcmWithdrawal: 'EVM (Retiro)',
      depositToNative: 'Déposito a nativo',
      depositToEvm: 'Depósito a EVM',
      evmWalletAddress: 'Dirección de la billetera EVM',
      howToImportXvmTokens: 'Descubra cómo importar tokens ERC-20 a través de XVM',
      riskOfImportTokens:
        'Tenga en cuenta el riesgo de que cualquiera pueda crear un token, incluyendo la creación de versiones falsas de tokens existentes.',
      tokenContractAddress: 'Dirección del contrato del token',
      erc20ContractAddress: 'Dirección del contrato del token ERC-20',
      tipDestAddressFormat: '¿Dónde puedo encontrar la dirección de mi {chain}?',
      titleWithdraw: 'Retirar {token}',
      titleVesting: 'Información sobre la adquisición',
      connectionTroubles: {
        connectionTroubles: 'Problemas de conexión',
        tipsDescription:
          'Hay muchas razones por las que no puede conectarse. Pruebe a continuación si no se soluciona pregunte a un miembro de la comunidad.',
        tryOtherEndpoints: 'Intenta con otros endpoints',
        changeFromHeader: 'Cambiar el endpoint desde el botón de red de la cabecera',
        clearLocalStorage: 'Borrar el almacenamiento local',
        clearLocalStorageTip: 'Esto significa que se borrará la caché del Portal en este navegador',
        metaUpdate: 'Actualización de metadatos en la aplicación Polkadot.js',
        metaUpdateTip:
          'Para asegurarse de que la extensión de su billetera está actualizada, compruebe la pestaña Metadatos y actualícela si se le solicita.',
        goToDocs: 'Ir a Solucionar problemas en la documentación',
        goToDocsTip: 'Si tiene cualquier otro problema, consulte también la documentación.',
        askCommunity: 'Pregunte a nuestra comunidad',
        askCommunityDiscord: 'Pregunte a nuestra comunidad de Discord',
        askCommunityTip: 'Siempre hay alguien ahí para ti.',
      },
      xcmWarning: {
        minBalIsRequired: 'Se requiere un saldo mínimo en la cadena de origen',
        fee: 'La tarifa se deduce del importe ingresado',
        notInputExchanges: 'No introduzca dirección de billetera de exchanges',
        tooltip:
          'Mantenemos {amount} {symbol} en la cuenta de la cadena de origen para evitar perder los fondos. Al depositar desde la cadena de origen, solo se pueden transferir los tokens que superen el saldo mínimo.',
      },
    },
  },
  dashboard: {
    dashboard: 'Panel de control',
    tvl: 'TVL',
    collators: 'Collators',
    tokenSupply: 'Suministro de tokens',
    circulating: {
      circulatingSupply: 'Suministro circulando',
      supply: 'de {totalSupply}: ',
      circulating: 'Circulando',
    },
    block: {
      block: 'Bloque',
      blockHeight: 'Tamaño del bloque',
      blockTime: 'Tiempo del bloque',
      avgBlockTime: 'Tiempo promedio por bloque (segundos)',
      oneEra: '1 era:',
      sevenEras: '7 eras:',
      thirtyEras: '30 eras:',
      secs: ' segundos',
      era: 'Era',
      progress: '{value}%',
      eta: 'ETA {value}',
    },
    network: {
      networkStatuses: 'Estado de la red',
      updatedAgo: 'Actualizado desde {time}',
      xcmDepositWithdrawalAssets: 'Activos de depósito/retiro de XCM',
    },
  },
  chart: {
    tvl: {
      title: 'Valor total bloqueado',
      tooltip: 'TVL',
    },
    dappStaking: {
      title: 'Valor total bloqueado en dApp Staking',
      tooltip: 'TVL en dApp Staking',
    },
    ecosystem: {
      title: 'Valor total bloqueado en el ecosistema EVM',
      tooltip: 'TVL en el ecosistema EVM',
    },
    ttlTransactions: {
      title: 'Transacciones totales',
      tooltip: 'Transacciones totales',
    },
    tokenPrice: {
      title: 'Precio del token',
      tooltip: 'Precio del token',
    },
    uniqueActiveUsers: {
      title: 'Usuarios únicos activos',
      tooltip: 'Usuarios únicos activos',
    },
    numberOfCalls: {
      title: 'Número de transacciones',
      tooltip:
        'Número de transacciones que los usuarios han llamado a la dirección del contrato inteligente de la dApp',
    },
    treasury: 'Tesorería',
    other: 'Otro',
    locked: 'Bloqueado',
    others: 'Otros',
  },
  links: {
    gridlockWallet: 'Billetera Gridlock',
    goDecentralized: '¡ir a descentralización!',
    portalIpfs: '¡El Portal ahora está en IPFS!',
    astarHome: 'Inicio Astar',
    astarDocs: 'Documentación de Astar',
  },
  disclaimer: {
    disclaimer: 'Aviso legal',
    introduce1: `Al acceder y utilizar las dApps del ecosistema Astar, confirmas que reúnes los requisitos para hacerlo y aceptas los términos y condiciones de la Fundación Astar.
    y acepta las condiciones de la Fundación Astar`,
    introduce2: `. Usted entiende y acepta que el uso de las dApps es bajo su propio riesgo, y que se proporcionan "tal cual" y "según disponibilidad" sin garantías expresas o implícitas de ningún tipo.
    tal cual" y "según disponibilidad", sin garantías expresas o implícitas de ningún tipo.`,
    terms: 'Términos de los servicios',
    privacy: 'Política de privacidad',
    chapter1: '1. Responsabilidad:',
    para1: `Usted entiende y acepta que la Fundación Astar no será responsable de ningunos
    daños directos, indirectos, incidentales, especiales, consecuenciales o ejemplares derivados de
    el uso que usted haga de las dApps del ecosistema Astar. Esto incluye, entre otros, daños por
    pérdida de beneficios, fondo de comercio, uso, datos u otras pérdidas intangibles.`,
    chapter2: '2. Asunción de riesgos de la red:',
    para2: `Entiendes y aceptas que la Fundación Astar no garantiza la seguridad de las dApps del ecosistema Astar ni la seguridad de tu información personal, incluída tu billetera.
    dApps del ecosistema Astar ni la seguridad de su información personal, incluida la dirección de su billetera, su historial de transacciones y sus claves privadas.
    el historial de transacciones y las claves privadas. El usuario se compromete a tomar las medidas necesarias para
    proteger su información personal y evitar el acceso no autorizado a su billetera.`,
    chapter3: '3. No hay garantía de seguridad:',
    closeWord: `Asimismo, confirma que no es una "Persona prohibida" y que ni usted ni ninguna
    persona o entidad que controle, sea controlada por usted o esté bajo control común con usted es una
    persona prohibida. Por último, al hacer clic en "Aceptar", acepta los términos y condiciones
    expuestas anteriormente. Si no está de acuerdo, haga clic en "Rechazar".`,
    agree: 'De acuerdo',
    decline: 'Rechazar',
  },
  bridge: {
    bridge: 'Puente',
    history: 'Historia reciente',
    actionRequired: 'Acción requerida',
    claim: 'Reclamar',
    noTransactions: 'No se encontraron transacciones',
    completed: 'Completado',
    inProgress: 'En progreso',
    approvalMaxAmount: 'Aprobar importe máximo (opcional)',
    ethereumBridge: {
      title: 'Puente de Ethereum',
      text: 'Puente de activos entre {l1} y {l2}',
      text2:
        '¡Disponible en testnet! - Para experimentar, conecte su cartera a Astar zKatana (zkEVM testnet) y obtenga ETH en testnet',
      learn: '(aprenda más)',
    },
    astarBridge: {
      title: 'Puente Astar',
      text: 'Puentear token ASTR y activos a {l2} desde {substrateNetwork} EVM',
      text2: 'Actualmente en desarrollo',
    },
    celerBridge: {
      title: 'Puente Celer',
      text: 'Puente de activos a {cbridgeNetworkName} Polkadot EVM via el puente de Celer',
    },
    warning32blocks: 'Puede tardar unos 10~20 minutos o más en finalizar',
    warning2steps:
      'Pasar a L1 (Ethereum) implica 2 pasos, y requiere que los usuarios hagan una reclamación en la red L1 (disponible en Historial reciente)',
    tokenInfo: {
      invalidTokenAddress: 'Dirección de token inválida',
      tokenAddress: 'Dirección de token {network}',
      tokenName: 'Nombre del token',
      tokenSymbol: 'Símbolo del token',
      fromChainBal: 'Desde el balance de la cadena',
      destChainBal: 'Balance de la cadena de destino',
      tokenHasBeenAdded: 'El token ya ha sido añadido',
      tokenNotSupported: 'Este token no es compatible con zkEVM',
      interactCarefully: 'Interactúa con cuidado con tokens nuevos o sospechosos',
    },
  },
};
