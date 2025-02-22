import { createSlice } from '@reduxjs/toolkit';
import { getAllMedicineThunk, getMedicinesByShopThunk } from './medicinesThunks';
import { MedicinesState } from './types';

const initialState: MedicinesState = {
  allMedicine: [],
  medicineList: [],
  shoppingCart: [],
  error: null,
};

const medicinesSlice = createSlice({
  name: 'medicines',
  initialState: initialState,
  reducers: {
    addMedicine(state, action) {
      state.shoppingCart = [action.payload, ...state.shoppingCart];
    },
    deleteMedicine(state, action) {
      state.shoppingCart = state.shoppingCart.filter((medicine) => medicine._id !== action.payload);
    },
    deleteAllMedicine(state) {
      state.shoppingCart = [];
    },
    // updateAmount(state, action) {
    //   const { medicineId, newAmount } = action.payload;

    //   const medicineUpdate = state.shoppingCart.find((item) => item._id === medicineId);
    //   if (medicineUpdate) {
    //     medicineUpdate.amount = newAmount;
    //   }
    // },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMedicinesByShopThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getMedicinesByShopThunk.fulfilled, (state, action) => {
        state.medicineList = action.payload;
      })
      .addCase(getMedicinesByShopThunk.rejected, (state, action) => {})
      .addCase(getAllMedicineThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getAllMedicineThunk.fulfilled, (state, action) => {
        state.allMedicine = action.payload;
      })
      .addCase(getAllMedicineThunk.rejected, (state, action) => {}),
});

export const medicinesReducer = medicinesSlice.reducer;

export const { addMedicine, deleteMedicine, deleteAllMedicine } = medicinesSlice.actions;
