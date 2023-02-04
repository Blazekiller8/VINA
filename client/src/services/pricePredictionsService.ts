import axios from 'axios';

const API_ENDPOINT = 'https://api.example.com/price-prediction';

interface PricePredictionResponse {
  predictedPrice: number;
}

export async function getPricePrediction(crop: string, region: string) {
  try {
    const response = await axios.get<PricePredictionResponse>(API_ENDPOINT, {
      params: {
        crop,
        region,
      },
    });
    return response.data.predictedPrice;
  } catch (error) {
    console.error(error);
    return null;
  }
}
