import axios, { AxiosResponse } from 'axios';
import { Medicine } from './types';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://medicine-delivery-rest-api.onrender.com',
});

export const fetchAllMedicines = async (): Promise<Medicine[]> => {
  const responce = await medicineInstance.get<Medicine[]>('api/medicines');
  return responce.data;
};

export const fetchMedicinesByShop = async (shopId: string): Promise<Medicine[]> => {
  const responce = await medicineInstance.post<Medicine[]>('api/medicines', {
    shopId,
  });
  return responce.data;
};

export const createMedicines = async (name: string, price: number, shopId: string) => {
  const body = {
    name,
    price,
    owner: shopId,
  };
  const data = await medicineInstance.post('api/medicines', body);

  return data;
};
