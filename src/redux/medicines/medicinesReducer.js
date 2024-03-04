import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMedicine, getMedicines } from '../../services/medicineApi';

export const fetchAllMedicine = createAsyncThunk(
  'medicines/getAllMedicine',
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllMedicine();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMedicines = createAsyncThunk(
  'medicines/getMedicines',
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
  allMedicine: [],
  medicineList: [],
  shoppingCart: [],
  error: null,
};

const medicinesSlice = createSlice({
  name: 'medicines',
  initialState: INITIAL_STATE,
  reducers: {
    addMedicine(state, action) {
      state.shoppingCart = [action.payload, ...state.shoppingCart];
    },
    deleteMedicine(state, action) {
      state.shoppingCart = state.shoppingCart.filter(
        (medicine) => medicine.id !== action.payload
      );
    },
    deleteAllMedicine(state) {
      state.shoppingCart = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchMedicines.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchMedicines.fulfilled, (state, action) => {
        state.medicineList = action.payload.medicines;
      })
      .addCase(fetchMedicines.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchAllMedicine.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchAllMedicine.fulfilled, (state, action) => {
        state.allMedicine = action.payload.allMedicine;
      })
      .addCase(fetchAllMedicine.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const medicinesReducer = medicinesSlice.reducer;

export const { addMedicine, deleteMedicine, deleteAllMedicine, addAmount } =
  medicinesSlice.actions;
