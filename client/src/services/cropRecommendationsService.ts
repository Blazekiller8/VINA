import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1/crop-recommendations';

export const getCropRecommendations = async (params?: any) => {
  try {
    const response = await axios.get(baseURL, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const postCropRecommendation = async (data: any) => {
  try {
    const response = await axios.post(baseURL, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const updateCropRecommendation = async (id: string, data: any) => {
  try {
    const response = await axios.patch(`${baseURL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteCropRecommendation = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
