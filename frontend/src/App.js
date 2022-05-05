import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MainProvider from './provider/mainProvider';
import './css/style.css';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
