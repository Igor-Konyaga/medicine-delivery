import axios from 'axios';
import { ShopsResponse } from './types';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://medicine-delivery-rest-api.onrender.com',
});

export const fetchAllShops = async () => {
  const { data } = await medicineInstance.get<ShopsResponse>('api/shops');

  return data.allShop;
};
