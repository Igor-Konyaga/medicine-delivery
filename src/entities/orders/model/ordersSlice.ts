import { createSlice } from '@reduxjs/toolkit';
import { createOrderThunk } from './ordersThunks';

const INITIAL_STATE = {
  order: null,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createOrderThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(createOrderThunk.fulfilled, (state, action) => {
        state.order = action.payload.newOrder;
      })
      .addCase(createOrderThunk.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const ordersReducer = ordersSlice.reducer;
