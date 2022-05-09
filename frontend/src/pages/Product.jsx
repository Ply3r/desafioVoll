import { useContext, useEffect, useState } from "react";
import { mainContext } from "../provider/mainProvider";
import axios from "axios";
import Loading from "../components/Loading";
import FilterContainer from '../components/FilterContainer';
import ProductCard from "../components/ProductCard";
import MainContent from "../components/MainContent";
import '../css/product.css';

const URL = process.env.REACT_APP_SERVER

const Product = () => {
  const { token } = useContext(mainContext);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('name - ASC');
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get(URL + `/product?search=${search}&order=${order}`, { headers: { authorization: token } })
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
            <FilterContainer 
              search={ search }
              order={ order }
              setSearch={ setSearch }
              setOrder={ setOrder }
            />
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
  }, [search, order])

  return (
    <>
      { !products.length ? <Loading /> : renderProductPage() }
    </>
  );
};

export default Product;
