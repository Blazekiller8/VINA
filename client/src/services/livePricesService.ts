import axios from 'axios';

const API_ENDPOINT = process.env.LIVE_PRICES_API_URL;

class LivePricesService {
  static async fetchLivePrices() {
    try {
      const response = await axios.get(`${API_ENDPOINT}/live-prices`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default LivePricesService;
