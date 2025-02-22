import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllMedicines, fetchMedicinesByShop } from './medicinesApi';

export const getAllMedicineThunk = createAsyncThunk(
  'medicines/getAllMedicine',
  async (_, thunkAPI) => {
    try {
      const data = await fetchAllMedicines();

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

export const getMedicinesByShopThunk = createAsyncThunk(
  'medicines/getMedicinesByShop',
  async (shopId: string, thunkAPI) => {
    try {
      const data = await fetchMedicinesByShop(shopId);

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);
