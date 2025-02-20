import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder } from './ordersApi';

export const createOrderThunk = createAsyncThunk('order/create', async (body, thunkAPI) => {
  try {
    const { data } = await createOrder(body);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
