import { createSlice } from '@reduxjs/toolkit';
import { createOrderThunk } from './ordersThunks';
import { OrdersState } from './types';

const initialState: OrdersState = {
  allOrders: null,
  order: null,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createOrderThunk.pending, (state) => {})
      .addCase(createOrderThunk.fulfilled, (state, action) => {})
      .addCase(createOrderThunk.rejected, (state, action) => {}),
});

export const ordersReducer = ordersSlice.reducer;
