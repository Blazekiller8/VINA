import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

export default {
  async getLivePrices() {
    const response = await axios.get(`${API_URL}live-prices`);
    return response.data;
  },
  async getPricePrediction(crop: string) {
    const response = await axios.get(`${API_URL}price-prediction/${crop}`);
    return response.data;
  },
  async getCropRecommendations(region: string) {
    const response = await axios.get(`${API_URL}crop-recommendations/${region}`);
    return response.data;
  }
};
