import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDashboard = () => (
  <div>
    <h1 className="login-title">Produtos</h1>
    <div className="product-inner-container">
      <Link to="/products/add">
        <div>
          <h1>
            <AiOutlinePlusCircle />
          </h1>
          <h2>Adicionar Produto</h2>
        </div>
      </Link>
      <Link to="/products">
        <div>
          <h1>
            <AiOutlineShoppingCart />
          </h1>
          <h2>Ver Produtos</h2>
        </div>
      </Link>
    </div>
  </div>
);

export default ProductDashboard;
