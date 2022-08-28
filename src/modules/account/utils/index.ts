import { updateAccountHistories } from './../../../config/localStorage';
import { ApiPromise } from '@polkadot/api';
import { SystemAccount } from '../index';

import { getNetworkName } from 'src/config/chainEndpoints';
import { getAccountHistories, LOCAL_STORAGE } from 'src/config/localStorage';
import { TxHistory } from './../index';

const { TX_HISTORIES, NETWORK_IDX } = LOCAL_STORAGE;

export const fetchNativeBalance = async ({
  api,
  address,
}: {
  api: ApiPromise;
  address: string;
}) => {
  try {
    const accountInfo = await api.query.system.account<SystemAccount>(address);
    const balance = accountInfo.data.free;
    return balance.toString();
  } catch (error) {
    console.error(error);
    return '0';
  }
};

// Memo: store users transaction histories to browser's local-storage
export const addTxHistories = ({
  hash,
  type,
  address,
}: {
  hash: string;
  type: string;
  address: string;
}): void => {
  const networkIdx = localStorage.getItem(NETWORK_IDX);
  const network = getNetworkName(Number(networkIdx));
  if (network === 'development') return;

  const txs = getAccountHistories({ storageKey: TX_HISTORIES, address, network }) as TxHistory[];
  const data = {
    hash,
    type,
  };
  txs.unshift(data);

  updateAccountHistories({
    storageKey: TX_HISTORIES,
    address,
    network,
    txs,
  });
};
