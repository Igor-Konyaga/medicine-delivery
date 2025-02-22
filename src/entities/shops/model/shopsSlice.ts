import { createSlice } from '@reduxjs/toolkit';
import { getAllShopsThunk } from './shopsThunks';
import { ShopsState } from './types';

const initialState: ShopsState = {
  shopList: [],
  shopName: '',
  error: null,
};

const shopsSlice = createSlice({
  name: 'medicines',
  initialState,
  reducers: {
    setShopName(state, action) {
      state.shopName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllShopsThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(getAllShopsThunk.fulfilled, (state, action) => {
        state.shopList = action.payload;
      })
      .addCase(getAllShopsThunk.rejected, (state, action) => {}),
});

export const shopsReducer = shopsSlice.reducer;

export const { setShopName } = shopsSlice.actions;
