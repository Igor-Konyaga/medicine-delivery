import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../src/components/SharedLayout/SharedLayout';
import { Shop } from './pages/Shop/Shop';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllShop } from './entities/shops/shopsSlice';
import { fetchAllMedicine } from './entities/medicines/model/medicinesSlice';
import React from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShop());
    dispatch(fetchAllMedicine());
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
