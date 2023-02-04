import { writable } from 'svelte/store';

// Define an initial value for the livePrices data
const initialLivePrices = [];

// Create a writable store to manage the livePrices data
export const livePricesStore = writable(initialLivePrices);

// Define a function to update the livePrices data in the store
export const updateLivePrices = (newLivePrices) => {
  livePricesStore.set(newLivePrices);
};