import { useContext } from "react";
import { mainContext } from '../provider/mainProvider';
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading.jsx';
import MainContent from "../components/MainContent";
import '../css/home.css';

const Home = () => {
  const { user } = useContext(mainContext);
  const navigate = useNavigate();

  const renderPage = () => (
    <>
      { user.role !== 'admin' && navigate('/products') }
      <div className="page-home">
        <div className="gradient-home"/>
        <MainContent>
          <div className="main-title-container">
            <h1 className="hero-title login-title">Dashboard</h1>
            <p className="login-title">Welcome admin</p>
          </div>
        </MainContent>
      </div>
    </>
  )

  return (
    <>
      { user ? renderPage() : <Loading /> }
    </>
  );
}

export default Home;
