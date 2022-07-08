import { Chain } from 'src/v2/config/types';
import { XcmRepositoryBase } from './XcmRepositoryBase';

export class PolkadotXcmRepository extends XcmRepositoryBase {
  constructor() {
    super(Chain.Polkadot);
    console.log('PolkadotXcmRepository has been created');
  }
}
