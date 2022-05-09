import { useContext } from "react";
import { mainContext } from '../provider/mainProvider';
import Loading from '../components/Loading.jsx';
import MainContent from "../components/MainContent";
import Balance from "../components/Balance";
import ProductDashboard from "../components/ProductDashboard";
import '../css/home.css';

const Home = () => {
  const { user } = useContext(mainContext);

  const renderPage = () => (
    <>
      <div className="page-home">
        <div className="gradient-home"/>
        <MainContent>
          <div className="main-title-container">
            <h1 className="hero-title login-title">Dashboard</h1>
            <p className="login-title">{ `Welcome ${user.role}` }</p>
            <div className="dashboard-itens-container">
              <Balance />
              <ProductDashboard user={ user } />
            </div>
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
