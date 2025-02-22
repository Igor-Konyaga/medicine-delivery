import { RootState } from '../../../shared/config/store/types';

export const getAllShops = (state: RootState) => state.shops.shopList;
export const getShopName = (state: RootState) => state.shops.shopName;
