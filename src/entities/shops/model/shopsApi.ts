import axios from 'axios';
import { Shop } from './types';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://medicine-delivery-rest-api.onrender.com',
});

export const fetchAllShops = async () => {
  const response = await medicineInstance.get<Shop[]>('api/shops');

  return response.data;
};
