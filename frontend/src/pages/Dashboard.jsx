import { useContext, useEffect } from "react";
import { mainContext } from '../provider/mainProvider';
import Loading from '../components/Loading.jsx';
import MainContent from "../components/MainContent";
import Balance from "../components/Balance";
import ProductDashboard from "../components/ProductDashboard";
import ExtractDashboard from "../components/ExtractDashboard";
import '../css/home.css';

const Home = () => {
  const { user, getUser } = useContext(mainContext);

  useEffect(() => {
    getUser();
  }, [])

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
            <ExtractDashboard />
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
