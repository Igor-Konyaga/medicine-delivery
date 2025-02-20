import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMedicineThunk, getMedicinesByShopThunk } from './medicinesThunks';

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
      state.shoppingCart = state.shoppingCart.filter((medicine) => medicine.id !== action.payload);
    },
    deleteAllMedicine(state) {
      state.shoppingCart = [];
    },
    updateAmount(state, action) {
      const { medicineId, newAmount } = action.payload;

      const medicineUpdate = state.shoppingCart.find((item) => item.id === medicineId);
      if (medicineUpdate) {
        medicineUpdate.amount = newAmount;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMedicinesByShopThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getMedicinesByShopThunk.fulfilled, (state, action) => {
        state.medicineList = action.payload.medicines;
      })
      .addCase(getMedicinesByShopThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getAllMedicineThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getAllMedicineThunk.fulfilled, (state, action) => {
        state.allMedicine = action.payload.allMedicine;
      })
      .addCase(getAllMedicineThunk.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const medicinesReducer = medicinesSlice.reducer;

export const { addMedicine, deleteMedicine, deleteAllMedicine, updateAmount } =
  medicinesSlice.actions;
