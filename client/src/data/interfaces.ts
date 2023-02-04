export interface ICrop {
      id: number;
      name: string;
      price: number;
    }

    export interface IPrediction {
      crop: ICrop;
      prediction: number;
    }

    export interface IProfessionalHelp {
      id: number;
      name: string;
      speciality: string;
      contact: string;
    }

    export interface ILivePrices {
      crop: ICrop;
      currentPrice: number;
      change: number;
    }
