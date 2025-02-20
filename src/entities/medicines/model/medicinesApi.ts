import axios from 'axios';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://medicine-delivery-rest-api.onrender.com',
});

export const fetchAllMedicines = async () => {
  const data = await medicineInstance.get('api/medicines');
  return data;
};

export const fetchMedicinesByShop = async (shopId: string) => {
  const data = await medicineInstance.post('api/medicines', { shopId });
  return data;
};

export const createMedicines = async (name: string, shopId: string) => {
  const data = await medicineInstance.post('api/medicines', {
    name,
    owner: shopId,
  });

  return data;
};
