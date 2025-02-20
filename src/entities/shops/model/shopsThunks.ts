import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShops } from './shopsApi';

export const getAllShopsThunk = createAsyncThunk('shop/getAllShop', async (_, thunkAPI) => {
  try {
    const { data } = await getShops();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
