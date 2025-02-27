import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import React from 'react';
import { useAppDispatch } from './shared/model/hooks/redux';
import { getAllShopsThunk } from './entities/shops';
import { getAllMedicineThunk } from './entities/medicines';
import SharedLayout from './shared/ui/SharedLayout/SharedLayout';
import { Shop } from './pages/Shop/ui/Shop';
import { ShoppingCart } from './pages/ShoppingCart/ui/ShoppingCart';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllShopsThunk());
    dispatch(getAllMedicineThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Shop />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}
export default App;
