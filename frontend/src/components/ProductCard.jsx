const ProductCard = ({ data }) => {

  return (
    <div className="product-card">
      <img src={ data.image_1 } alt={ data.name } />
      <h4>{ data.name }</h4>
      <p>{ `R$ ${data.price.toFixed(2)}`}</p>
      <p>{ `quantidade disponivel: ${data.quantity}` }</p>
      <button>comprar</button>
    </div>
  )
};

export default ProductCard;
