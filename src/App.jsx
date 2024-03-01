import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Shop } from './pages/Shop/Shop';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="shop" element={<Shop />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}
export default App;
