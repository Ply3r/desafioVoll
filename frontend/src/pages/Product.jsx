import { useContext, useEffect, useState } from "react";
import { mainContext } from "../provider/mainProvider";
import axios from "axios";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import MainContent from "../components/MainContent";
import '../css/product.css';

const URL = process.env.REACT_APP_SERVER

const Product = () => {
  const { token } = useContext(mainContext);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get(URL + '/product', { headers: { authorization: token } })
      .then(({ data }) => setProducts(data))
      .catch((err) => window.alert(err.message))
  }

  const renderProductPage = () => {
    const elements = products.map((product) => <ProductCard data={ product } />);

    return (
      <div className="page-home">
        <div className="gradient-home"/>
        <MainContent>
          <div className="main-title-container">
            <h1 className="hero-title login-title">Products</h1>
            <div className="product-itens-container">
              { elements }
            </div>
          </div>
        </MainContent>
      </div>
    )
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      { !products.length ? <Loading /> : renderProductPage() }
    </>
  );
};

export default Product;
