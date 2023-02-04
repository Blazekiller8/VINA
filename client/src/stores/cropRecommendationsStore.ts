import { writable } from 'svelte/store';

export const cropRecommendations = writable([]);

function setCropRecommendations(recommendations) {
  cropRecommendations.set(recommendations);
}

export default {
  setCropRecommendations
};