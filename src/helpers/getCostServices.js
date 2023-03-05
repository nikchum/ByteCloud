export const getCostBackbaze = (storage, transfer) => {
  const priceStorage = 0.005 * storage;
  const priceTransfer = 0.01 * transfer;
  const commonPrice = priceStorage + priceTransfer;

  return commonPrice <= 7 ? 7 : Number(commonPrice.toFixed(2));
};

export const getCostBunny = (disk, storage, transfer) => {
  const priceStorage = disk === 'hdd' ? 0.01 * storage : 0.02 * storage;
  const priceTransfer = 0.01 * transfer;
  const commonPrice = priceStorage + priceTransfer;

  return commonPrice >= 10 ? 10 : Number(commonPrice.toFixed(2));
};

export const getCostScaleway = (type, storage, transfer) => {
  const priceTransfer = transfer >= 75 ? (0.02 * (transfer - 75)).toFixed(2) : 0;

  if (storage <= 75) {
    return Number(priceTransfer);
  }

  const priceStorage = type === 'multi' ? 0.06 * (storage - 75) : 0.03 * (storage - 75);
  const commonPrice = priceStorage + Number(priceTransfer);

  return Number(commonPrice.toFixed(2));
};

export const getCostVultr = (storage, transfer) => {
  const priceStorage = 0.01 * storage;
  const priceTransfer = 0.01 * transfer;
  const commonPrice = priceStorage + priceTransfer;

  return commonPrice <= 5 ? 5 : Number(commonPrice.toFixed(2));
};
