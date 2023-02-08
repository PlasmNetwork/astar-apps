import { Path } from 'src/router';

interface MetaData {
  title: string;
  meta: {
    description: {
      name: string;
      content: string;
    };
  };
}

export const opengraphMeta = (displayName: string, networkName: string) => {
  return {
    ogTitle: {
      property: 'og:title',
      template() {
        return `${networkName} Portal - ${displayName}`;
      },
    },
    ogDescription: {
      property: 'og:description',
      template() {
        return `Your one-stop platform for the ${networkName} ecosystem - Wallet / Staking / Bridging`;
      },
    },
    ogSiteName: {
      property: 'og:site_name',
      template() {
        return `${networkName} Portal`;
      },
    },
  };
};

export const meta = {
  title: {
    assets: {
      assets: 'Assets',
      transfer: 'Transfer',
      xvmTransfer: 'XVM Transfer',
    },
    dashboard: 'Dashboard',
    dappsStaking: {
      dappStaking: 'Dapp Staking',
      discoverDapps: 'Discover dApps',
      registerDapp: 'Register dApp',
      stake: 'Stake',
    },
  },
  description: {
    assets:
      'Astar Portal is the hub of multi-chain, one-stop platform for managing assets and dApp Staking - build2earn protocol. Asset page provides seem less cross-chain transfers using Polkadot unique technology XCM as well as newly invented Cross Virtual Machine technology XVM.',
    dappsStaking:
      'Astar dApp Staking is a unique protocol that designed to support builders by providing basic income. Build2Earn program sustains the early stage of builders as well as rewarding the successful projects',
    dashboard:
      'Astar Portal is the hub of multi-chain, one-stop platform for managing assets and dApp Staking - build2earn protocol. Dashboard page provides statics of ASTR, blocks of the Astar Network and TVL.',
  },
};

const buildMeta = ({ title, content }: { title: string; content: string }) => {
  return {
    title,
    meta: {
      description: {
        name: 'description',
        content,
      },
    },
  };
};

export const generateMeta = (path: Path): MetaData => {
  switch (path) {
    case Path.Assets:
      return buildMeta({
        title: meta.title.assets.assets,
        content: meta.description.assets,
      });

    case Path.Transfer:
      return buildMeta({
        title: meta.title.assets.transfer,
        content: meta.description.assets,
      });

    case Path.XvmTransfer:
      return buildMeta({
        title: meta.title.assets.xvmTransfer,
        content: meta.description.assets,
      });

    case Path.Discover:
      return buildMeta({
        title: meta.title.dappsStaking.discoverDapps,
        content: meta.description.dappsStaking,
      });

    case Path.Dapp:
      return buildMeta({
        title: meta.title.dappsStaking.dappStaking,
        content: meta.description.dappsStaking,
      });

    case Path.Dashboard:
      return buildMeta({
        title: meta.title.dashboard,
        content: meta.description.dashboard,
      });

    case Path.Register:
      return buildMeta({
        title: meta.title.dappsStaking.registerDapp,
        content: meta.description.dappsStaking,
      });

    case Path.Stake:
      return buildMeta({
        title: meta.title.dappsStaking.stake,
        content: meta.description.dappsStaking,
      });

    default:
      return buildMeta({
        title: meta.title.assets.assets,
        content: meta.description.assets,
      });
  }
};
