import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMedicines } from '../../services/medicineApi';

export const fetchAllMedicine = createAsyncThunk(
  'medicines/getAllMedicine',
  async (shopId, thunkAPI) => {
    try {
      const medicineList = await getMedicines(shopId);

      return medicineList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  medicines: [],
  error: null,
};

const medicinesSlice = createSlice({
  name: 'medicines',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllMedicine.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchAllMedicine.fulfilled, (state, action) => {
        state.medicines = action.payload;
      })
      .addCase(fetchAllMedicine.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const medicinesReducer = medicinesSlice.reducer;
