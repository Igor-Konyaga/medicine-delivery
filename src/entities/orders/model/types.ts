import { Medicine } from '../../medicines/model/types';

export type Order = {
  _id?: string;
  name: string;
  email: string;
  phone: number;
  address: string;
  medicineList: Medicine[];
};

export type OrdersState = {
  allOrders: Order[] | null;
  order: Order | null;
  error: string | null;
};
