import axios from 'axios';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const getAllMedicine = async () => {
  const data = await medicineInstance.get('api/medicines');
  return data;
};

export const getMedicines = async (shopId) => {
  const data = await medicineInstance.post('api/medicines', { shopId });
  return data;
};

export const createMedicines = async (name, shopId) => {
  const data = await medicineInstance.post('api/medicines', {
    name,
    owner: shopId,
  });

  return data;
};
