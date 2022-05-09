import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainProvider from './provider/mainProvider';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import './css/style.css';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/products" element={ <Product /> } />
          <Route path="/products/add" element={ <CreateProduct /> } />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
