import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllShops } from './shopsApi';

export const getAllShopsThunk = createAsyncThunk('shop/getAllShop', async (_, thunkAPI) => {
  try {
    const data = await fetchAllShops();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error');
  }
});
