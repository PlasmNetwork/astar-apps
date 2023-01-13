import {
  AcalaXcmRepository,
  AstarXcmRepository,
  StatemintXcmRepository,
  MoonbeamXcmRepository,
  PolkadotXcmRepository,
  InterlayXcmRepository,
  CrustShadowXcmRepository,
  PhalaXcmRepository,
  BifrostXcmRepository,
} from 'src/v2/repositories/implementations';
import { Chain } from 'src/v2/models/XcmModels';
import { TypeMapping } from 'src/v2/config/types';

export const XcmRepositoryConfiguration: TypeMapping = {
  [Chain.ASTAR]: AstarXcmRepository,
  [Chain.SHIDEN]: AstarXcmRepository,
  [Chain.ACALA]: AcalaXcmRepository,
  [Chain.KARURA]: AcalaXcmRepository,
  [Chain.STATEMINE]: StatemintXcmRepository,
  [Chain.STATEMINT]: StatemintXcmRepository,
  [Chain.MOONBEAM]: MoonbeamXcmRepository,
  [Chain.MOONRIVER]: MoonbeamXcmRepository,
  [Chain.POLKADOT]: PolkadotXcmRepository,
  [Chain.KUSAMA]: PolkadotXcmRepository,
  [Chain.KINTSUGI]: InterlayXcmRepository,
  [Chain.INTERLAY]: InterlayXcmRepository,
  [Chain.CRUST_SHADOW]: CrustShadowXcmRepository,
  [Chain.KHALA]: PhalaXcmRepository,
  [Chain.PHALA]: PhalaXcmRepository,
  [Chain.BIFROST_POLKADOT]: BifrostXcmRepository,
  [Chain.BIFROST_KUSAMA]: BifrostXcmRepository,
};

export type AstarToken = 'ASTR' | 'SDN';

export type AstarNativeToken = {
  [key in AstarToken]: string;
};
