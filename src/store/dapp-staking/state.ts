import { BN } from '@polkadot/util';
import { TvlModel } from 'src/v2/models';

export interface DappItem extends LooseObject {
  name: string;
  iconUrl: string;
  description: string;
  descriptionMarkdown: string;
  url: string;
  address: string;
  license: string;
  videoUrl: string;
  tags: string[];
  forumUrl: string;
  authorContact: string;
  gitHubUrl: string;
  imagesUrl: string[];
  developers: Developer[];
}

export interface NewDappItem extends DappItem {
  iconFileName: string;
  iconFile: string;
  icon: File;
  images: File[];
  imagesContent: string[];
  videoUrlInput: string;
}

export interface Developer {
  twitterAccountUrl: string;
  linkedInAccountUrl: string;
  iconFile: string;
  name: string;
}

export interface DappStateInterface {
  dapps: DappItem[];
  minimumStakingAmount: string;
  maxNumberOfStakersPerContract: number;
  unbondingPeriod: number;
  maxUnlockingChunks: number;
  unlockingChunks: number;
  isPalletDisabled: boolean;
  claimedRewards: number;
  tvl: TvlModel;
}

export interface LooseObject {
  [key: string]: any;
}

export interface FileInfo {
  name: string;
  base64content: string;
  contentType: string;
}

function state(): DappStateInterface {
  return {
    dapps: [],
    minimumStakingAmount: '0',
    maxNumberOfStakersPerContract: 0,
    unbondingPeriod: 0,
    maxUnlockingChunks: 0,
    unlockingChunks: 0,
    isPalletDisabled: false,
    claimedRewards: 0,
    tvl: new TvlModel(new BN(0), 0, 0),
  };
}

export default state;
