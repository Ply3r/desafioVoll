import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MainProvider from './provider/mainProvider';

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
