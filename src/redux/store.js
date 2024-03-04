import { configureStore } from '@reduxjs/toolkit';
import { medicinesReducer } from './medicines/medicinesReducer';
import { shopsReducer } from './shops/shopsReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ordersReducer } from './orders/ordersReducer';

const medicinesPersistConfig = {
  key: 'medicines',
  storage,
  whitelist: ['shoppingCart'],
};

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    medicines: persistReducer(medicinesPersistConfig, medicinesReducer),
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
