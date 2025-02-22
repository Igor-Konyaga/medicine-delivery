import { RootState } from '../../../shared/config/store/types';

export const getMedicinesByShop = (state: RootState) => state.medicines.medicineList;
export const getAllMedicines = (state: RootState) => state.medicines.allMedicine;
export const getShoppingCartData = (state: RootState) => state.medicines.shoppingCart;
