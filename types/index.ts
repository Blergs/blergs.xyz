export interface BlergRarity {
  tokenId: string;
  imageUrl: string;
  name: string;
  permalink: string;
  traits: Trait[];
  rarityScore: number;
  rank: number;
}

export interface Trait {
  trait_type: string;
  value: string;
  display_type: null | string;
  max_value: null | string;
  trait_count: number;
  order: number | null;
  percentHave: number;
}
