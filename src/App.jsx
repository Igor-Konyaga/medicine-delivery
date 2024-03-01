import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
    </Routes>
  );
}
export default App;
