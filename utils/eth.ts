export const getShortEthAddress = (address: string) => {
  if (address.length === 42) {
    return address.slice(0, 4) + "..." + address.slice(-4);
  }
  return address;
};
