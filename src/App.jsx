import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Shop } from './pages/Shop/Shop';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllShop } from './redux/shops/shopsReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShop());
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
