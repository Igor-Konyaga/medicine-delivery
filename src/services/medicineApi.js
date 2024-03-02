import axios from 'axios';

const medicineInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const getMedicines = async (shopId) => {
  const data = await medicineInstance.get('api/medisines', { shopId });

  return data;
};

export const createMedicines = async (name, shopId) => {
  const data = await medicineInstance.post('api/medisines', {
    name,
    owner: shopId,
  });

  return data;
};
