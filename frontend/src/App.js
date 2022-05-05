import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainProvider from './provider/mainProvider';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './css/style.css';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
