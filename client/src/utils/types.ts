// frontend/utils/types.ts

export type ChatBotMessage = {
  id: number;
  message: string;
  sender: "bot" | "user";
  createdAt: string;
};

export type Crop = {
  id: number;
  name: string;
  price: number;
  location: string;
};

export type LivePrice = {
  crop: Crop;
  price: number;
  date: string;
};

export type PricePrediction = {
  crop: Crop;
  predictedPrice: number;
};

export type CropRecommendation = {
  crop: Crop;
  score: number;
};

export type ProfessionalHelp = {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
};
