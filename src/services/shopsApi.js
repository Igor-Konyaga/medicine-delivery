import axios from 'axios';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const getShops = async () => {
  const data = await medicineInstance.get('api/shops');

  return data;
};

