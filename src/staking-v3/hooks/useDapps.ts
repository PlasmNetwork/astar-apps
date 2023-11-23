import { computed } from 'vue';
import { container } from 'src/v2/common';
import { CombinedDappInfo, DappBase, IDappStakingRepository, IDappStakingService, StakeAmount } from '../logic';
import { Symbols } from 'src/v2/symbols';
import { useNetworkInfo } from 'src/hooks';
import { BusyMessage, IEventAggregator } from 'src/v2/messaging';
import { useStore } from 'src/store';
import { each } from 'store';

export function useDapps() {
  const store = useStore();
  const { currentNetworkName } = useNetworkInfo();
  let isLoadingDapps = false;
  const registeredDapps = computed<CombinedDappInfo[]>(() => {
    const dapps = store.getters['stakingV3/getRegisteredDapps'];
    if (!dapps.length && !isLoadingDapps) {
      isLoadingDapps = true;
      fetchDappsToStore();
    }

    return dapps;
  });

  const fetchDappsToStore = async (): Promise<void> => {
    const service = container.get<IDappStakingService>(Symbols.DappStakingServiceV3);
    const aggregator = container.get<IEventAggregator>(Symbols.EventAggregator);

    try {
      aggregator.publish(new BusyMessage(true));
      const dApps = await service.getDapps(currentNetworkName.value.toLowerCase());
      store.commit('stakingV3/addDapps', dApps);
    } finally {
      aggregator.publish(new BusyMessage(false));
    }
  };

  const fetchDappToStore = async (dappAddress: string): Promise<void> => {
    const repository = container.get<IDappStakingRepository>(Symbols.DappStakingRepositoryV3);
    const aggregator = container.get<IEventAggregator>(Symbols.EventAggregator);

    try {
      aggregator.publish(new BusyMessage(true));
      const dapp = await repository.getDapp(currentNetworkName.value.toLowerCase(), dappAddress);
      store.commit('stakingV3/updateDappExtended', dapp);
    } finally {
      aggregator.publish(new BusyMessage(false));
    }
  };

  const fetchStakeAmountsToStore =async (): Promise<void> => {
    const repository = container.get<IDappStakingRepository>(Symbols.DappStakingRepositoryV3);
    const stakeAmounts = await Promise.all(registeredDapps.value.map(async (dapp) => {
      const stakeAmount = await repository.getContractStake(dapp.chain.id);
      return [dapp.chain.id, stakeAmount];
    }));

    for (const [chainId, stakeAmount] of stakeAmounts) {
    }
  }

  const unstake = async (dappAddress: string, amount: number): Promise<void> => {
    console.log(`Unstaking ${amount} from ${dappAddress}`);
  };

  return { registeredDapps, fetchDappsToStore, fetchDappToStore, unstake };
}
