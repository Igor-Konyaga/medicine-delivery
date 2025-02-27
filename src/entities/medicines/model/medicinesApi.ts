import axios, { AxiosResponse } from 'axios';
import { Medicine, MedicinesResponse } from './types';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://medicine-delivery-rest-api.onrender.com',
});

export const fetchAllMedicines = async (): Promise<Medicine[]> => {
  const { data } = await medicineInstance.get<MedicinesResponse>('api/medicines');

  return data.allMedicine;
};

export const fetchMedicinesByShop = async (shopId: string): Promise<Medicine[]> => {
  const { data } = await medicineInstance.post<MedicinesResponse>('api/medicines', {
    shopId,
  });

  return data.allMedicine;
};

export const createMedicine = async (name: string, price: number, shopId: string) => {
  const body = {
    name,
    price,
    owner: shopId,
  };
  const { data } = await medicineInstance.post('api/medicines', body);

  return data;
};
