import { configureStore } from '@reduxjs/toolkit';
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
import { ordersReducer } from '../../../entities/orders/model/ordersSlice';
import { shopsReducer } from '../../../entities/shops/model/shopsSlice';
import { medicinesReducer } from '../../../entities/medicines';

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

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
