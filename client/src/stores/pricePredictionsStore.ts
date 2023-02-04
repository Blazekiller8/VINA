import { writable } from 'svelte/store';
import { PricePredictionService } from '../services/pricePredictionService';

export const pricePredictionStore = writable({
  predictions: [],
  error: null,
  isLoading: false,
});

export async function fetchPricePredictions() {
  pricePredictionStore.update(state => {
    return { ...state, isLoading: true };
  });

  try {
    const predictions = await PricePredictionService.getPredictions();
    pricePredictionStore.update(state => {
      return { ...state, predictions, isLoading: false };
    });
  } catch (error) {
    pricePredictionStore.update(state => {
      return { ...state, error, isLoading: false };
    });
  }
}
