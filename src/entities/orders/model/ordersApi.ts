import axios from 'axios';
import { Order } from './types';

const ordersInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  // baseURL: 'https://medicine-delivery-rest-api.onrender.com',
});

export const fetchAllOrders = async () => {
  const response = await ordersInstance.get<Order[]>('api/orders');

  return response.data;
};

export const createOrder = async (body: Order) => {
  const response = await ordersInstance.post<Order[]>('api/orders', body);

  return response.data;
};
