import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShops } from '../../services/shopsApi';

export const fetchAllShop = createAsyncThunk(
  'shop/getAllShop',
  async (_, thunkAPI) => {
    try {
      const { data } = await getShops();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
      .addCase(fetchAllShop.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchAllShop.fulfilled, (state, action) => {
        state.shopList = action.payload.ResponseBody.shops;
      })
      .addCase(fetchAllShop.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const shopsReducer = shopsSlice.reducer;

export const { setShopName } = shopsSlice.actions;
