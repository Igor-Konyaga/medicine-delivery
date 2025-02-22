import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder } from './ordersApi';
import { Order } from './types';

export const createOrderThunk = createAsyncThunk('order/create', async (body: Order, thunkAPI) => {
  try {
    const data = await createOrder(body);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error');
  }
});
