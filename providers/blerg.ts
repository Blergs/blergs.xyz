import RARITIES_DATA from "../data/rarities.json";

export const getBlergById = (id: string) => {
  return RARITIES_DATA.find((rarity) => rarity.tokenId === id);
};
