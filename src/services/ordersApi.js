import axios from 'axios';

const ordersInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://medicine-delivery-rest-api.onrender.com',
});

export const getOrders = async () => {
  const data = await ordersInstance.get('api/orders');

  return data;
};
export const createOrder = async (body) => {
  const data = await ordersInstance.post('api/orders', body);

  return data;
};
