import { MedicinesState } from '../../../entities/medicines/model/types';
import { OrdersState } from '../../../entities/orders/model/types';
import { ShopsState } from '../../../entities/shops/model/types';

export type RootState = {
  medicines: MedicinesState;
  orders: OrdersState;
  shops: ShopsState;
};
