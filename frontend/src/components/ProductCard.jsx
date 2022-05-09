import { useContext, useState } from "react";
import axios from "axios";
import { AiFillCheckCircle } from 'react-icons/ai';
import { mainContext } from "../provider/mainProvider";

const URL = process.env.REACT_APP_SERVER;

const ProductCard = ({ data }) => {
  const { token } = useContext(mainContext);
  const [purchased, setPurchased] = useState(false);
  const [error, setError] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const invalidBalance = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 5000);
  }

  const buyProduct = async () => {
    await axios.post(
        URL + '/purchase/' + data.id,
        null,
        { headers: { authorization: token } }
      )
      .then(() => setPurchased(true))
      .catch(() => invalidBalance())
  }

  return (
    <div 
      onMouseEnter={ () => setIsHover(true) }
      onMouseLeave={ () => setIsHover(false) }
      className="product-card"
    >
      <img src={ isHover ? data.image_2 :data.image_1 } alt={ data.name } />
      <h4>{ data.name }</h4>
      <p>{ `R$ ${data.price.toFixed(2)}`}</p>
      <p>{ `quantidade disponivel: ${data.quantity}` }</p>
      <button
        style={ { 'backgroundColor': `${purchased ? 'green' : 'var(--mainColor)'}` } }
        onClick={ buyProduct }
      >
        { purchased ? <AiFillCheckCircle /> : 'comprar' }
      </button>
    </div>
  )
};

export default ProductCard;
