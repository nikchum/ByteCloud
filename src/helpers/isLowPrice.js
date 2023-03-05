export const isLowPrice = (cost, pricesCompanies) => {
  return cost === Math.min(...pricesCompanies);
};
