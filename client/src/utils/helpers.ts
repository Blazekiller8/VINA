export const formatDate = (date: Date) => {
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    export const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    };

    export const generateId = (length: number) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };