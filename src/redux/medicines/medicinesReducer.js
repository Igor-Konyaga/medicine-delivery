import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMedicines } from '../../services/medicineApi';

export const fetchAllMedicine = createAsyncThunk(
  'medicines/getAllMedicine',
  async (shopId, thunkAPI) => {
    try {
      const { data } = await getMedicines(shopId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  medicineList: [],
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
        state.medicineList = action.payload.medicines;
      })
      .addCase(fetchAllMedicine.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const medicinesReducer = medicinesSlice.reducer;
