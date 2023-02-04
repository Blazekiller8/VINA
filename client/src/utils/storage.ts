export const setData = (key: string, data: any) => {
      localStorage.setItem(key, JSON.stringify(data));
  };

  export const getData = (key: string) => {
      const data = localStorage.getItem(key);
      if (data) {
          return JSON.parse(data);
      }
      return null;
  };

  export const removeData = (key: string) => {
      localStorage.removeItem(key);
  };