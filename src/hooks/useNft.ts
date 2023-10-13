import { ref } from 'vue';
import { NftMetadata } from 'src/v2/models';
import { useNetworkInfo } from './useNetworkInfo';
import { container } from 'src/v2/common';
import { INftRepository } from 'src/v2/repositories';
import { Symbols } from 'src/v2/symbols';

export function useNft() {
  const { currentNetworkName } = useNetworkInfo();
  const ownedNfts = ref<NftMetadata[]>([]);
  const isBusy = ref<boolean>(false);

  const getOwnedNfts = async (ownerAddress: string): Promise<void> => {
    const nftRepository = container.get<INftRepository>(Symbols.NftRepository);

    ownerAddress = '0xe42A2ADF3BEe1c195f4D72410421ad7908388A6a';

    try {
      isBusy.value = true;
      const nfts = await nftRepository.getOwnedTokens(
        'astar', //currentNetworkName.value.toLowerCase(),
        ownerAddress
      );

      // Update image uri to use IPFS gateway
      ownedNfts.value = nfts.map((nft) => {
        nft.image = nft.image.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
        return nft;
      });

      for (let i = 0; i < 3; i++) {
        ownedNfts.value.push(...ownedNfts.value);
      }
    } finally {
      isBusy.value = false;
    }
  };

  return { ownedNfts, isBusy, getOwnedNfts };
}
