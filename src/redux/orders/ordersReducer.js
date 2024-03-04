import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../../services/ordersApi';

export const fetchCreateOrder = createAsyncThunk(
  'order/create',
  async (body, thunkAPI) => {
    try {
      const { data } = await createOrder(body);
		console.log('data: ', data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  order: null,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      .addCase(fetchCreateOrder.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCreateOrder.fulfilled, (state, action) => {
        state.order = action.payload.newOrder;
      })
      .addCase(fetchCreateOrder.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const ordersReducer = ordersSlice.reducer;
