import { getCropData, getPriceData } from './api';

export const getSelectedCropData = (selectedCrop: string) => {
  return getCropData().filter((crop) => crop.name === selectedCrop);
};

export const getAveragePrice = (selectedCrop: string) => {
  const priceData = getPriceData().filter((price) => price.name === selectedCrop);
  return priceData.reduce((sum, price) => sum + price.price, 0) / priceData.length;
};