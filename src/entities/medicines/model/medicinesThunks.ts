import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllMedicines, fetchMedicinesByShop } from './medicinesApi';

export const getAllMedicineThunk = createAsyncThunk(
  'medicines/getAllMedicine',
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchAllMedicines();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMedicinesByShopThunk = createAsyncThunk(
  'medicines/getMedicinesByShop',
  async (shopId: string, thunkAPI) => {
    try {
      const { data } = await fetchMedicinesByShop(shopId);

      return data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
