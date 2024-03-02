import { configureStore } from '@reduxjs/toolkit';
import { medicinesReducer } from './medicines/medicinesReducer';
import { shopsReducer } from './shops/shopsReducer';

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    medicines: medicinesReducer,
  },
});
