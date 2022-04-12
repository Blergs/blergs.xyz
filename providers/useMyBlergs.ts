import useSWR from "swr";

interface useMyBlergsProps {
  ownerAddress?: string | null;
}

const BASE_URL =
  "https://api.opensea.io/api/v1/assets?collection=the-blerginning&order_direction=desc&limit=50&include_orders=false";

interface OpenseaAssetsResponse {
  assets: Array<{
    token_id: string;
  }>;
}

function useMyBlergs({ ownerAddress }: useMyBlergsProps) {
  const { data, error } = useSWR<OpenseaAssetsResponse>(
    `${BASE_URL}&owner=${ownerAddress}`,
    (url) => {
      return fetch(url).then((r) => r.json());
    },
    {
      isPaused: () => !Boolean(ownerAddress),
    }
  );

  return {
    ownedTokenIDs: data?.assets?.map((asset) => asset.token_id),
    isLoading: !error && !data,
    isError: error,
  };
}

export default useMyBlergs;
