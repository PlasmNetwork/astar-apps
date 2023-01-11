import { ISubmittableResult } from '@polkadot/types/types';
import { StateInterface } from 'src/store';
import { Store } from 'vuex';
import { calculateClaimedStaker } from 'src/hooks/helper/claim';
import { hasExtrinsicFailedEvent } from 'src/store/dapp-staking/actions';

export enum TxType {
  dappsStaking = 'dappsStaking',
}

export const displayCustomMessage = ({
  txType,
  store,
  result,
  senderAddress,
  t,
}: {
  txType: TxType;
  store: Store<StateInterface>;
  result: ISubmittableResult;
  senderAddress: string;
  t: (...arg: any) => void;
}): void => {
  if (txType === TxType.dappsStaking) {
    dispatchClaimMessage({
      result,
      store,
      senderAddress,
      t,
    });
  }
};

const dispatchClaimMessage = ({
  store,
  result,
  senderAddress,
  t,
}: {
  store: Store<StateInterface>;
  result: ISubmittableResult;
  senderAddress: string;
  t: (...arg: any) => void;
}): void => {
  if (result.isCompleted) {
    if (!hasExtrinsicFailedEvent(result.events, store.dispatch)) {
      const totalClaimedStaker = calculateClaimedStaker({
        events: result.events,
        senderAddress,
      });

      // Memo: users invoked withdraw transaction from unregistered dapps
      if (totalClaimedStaker.claimedAmount === 0) {
        return;
      }

      store.commit('dapps/setClaimedRewardsAmount', totalClaimedStaker.claimedAmount);

      const msg = t('dappStaking.toast.successfullyClaimed', {
        amount: totalClaimedStaker.formattedAmount,
      });
      store.dispatch(
        'general/showAlertMsg',
        {
          msg,
          alertType: 'success',
        },
        { root: true }
      );
    }
  }
};
