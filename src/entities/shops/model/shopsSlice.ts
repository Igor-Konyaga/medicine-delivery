import { createSlice } from '@reduxjs/toolkit';
import { getAllShopsThunk } from './shopsThunks';

const INITIAL_STATE = {
  shopList: [],
  shopName: '',
  error: null,
};

const shopsSlice = createSlice({
  name: 'medicines',
  initialState: INITIAL_STATE,
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
        state.shopList = action.payload.ResponseBody.shops;
      })
      .addCase(getAllShopsThunk.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const shopsReducer = shopsSlice.reducer;

export const { setShopName } = shopsSlice.actions;
