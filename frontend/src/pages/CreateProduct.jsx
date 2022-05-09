import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MainContent from "../components/MainContent";
import { mainContext } from "../provider/mainProvider";

const URL = process.env.REACT_APP_SERVER;

const CreateProduct = () => {
  const { token } = useContext(mainContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const checkDisabled = () => {
    let isValid = true;

    if (name < 6) {
      isValid = false
    }

    if (price <= 0 || quantity <= 0) {
      isValid = false;
    }

    if (!name && !price && !quantity && !image1 && !image2) {
      isValid = false;
    }

    setIsDisabled(!isValid);
  }

  const writeInState = (callback) => ({ target: { value } }) => {
    callback(value)
  }

  const sendRequest = async () => {
    await axios.post(
      URL + '/product', 
      { name, price, quantity, image_1: image1, image_2: image2 }, 
      { headers: { authorization: token } }
    )
      .then(() => alert('Deu certo'))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    checkDisabled();
  }, [name, price, quantity, image1, image2])

  return (
    <div className="page-home">
      <div className="gradient-home"/>
      <MainContent>
        <div className="main-title-container">
          <h1 className="hero-title login-title">Cadastrar produto</h1>
          <div className="add-product-container">
            <div className="image-container">
              <div>
                <img src={ image1 ? image1 : 'https://publicdomainvectors.org/tn_img/mountain-range-publicdomain.webp'} alt={ name }/>
              </div>
              <div>
                <h2>Image 1 URL:</h2>
                <input 
                  style={ { 'color': 'black', 'marginBottom': '15px' } }
                  placeholder="Digite a URL da imagem..."
                  className="text-input"
                  value={ image1 }
                  onChange={ writeInState(setImage1) }
                />
                <h2>Image 2 URL:</h2>
                <input 
                  style={ { 'color': 'black' } }
                  placeholder="Digite a URL da imagem..."
                  className="text-input"
                  value={ image2 }
                  onChange={ writeInState(setImage2) }
                />
              </div>
            </div>
            <div>
              <h2>Product Name</h2>
              <input 
                style={ { 'color': 'black' } }
                placeholder="Digite o nome do produto..."
                className="text-input"
                value={ name }
                onChange={ writeInState(setName) }
              />
            </div>
            <div>
              <h2>Product Price</h2>
              <input
                style={ { 'color': 'black' } }
                className="text-input"
                placeholder="Digite o preço do produto..."
                type="number"
                value={ price }
                onChange={ writeInState(setPrice) }
              />
            </div>
            <div>
              <h2>Product Quantity</h2>
              <input 
                style={ { 'color': 'black' } }
                className="text-input"
                placeholder="Digite a quantidade do produto..."
                type="number"
                value={ quantity }
                onChange={ writeInState(setQuantity) }
              />
            </div>
            <button
              className="bot"
              disabled={ isDisabled }
              onClick={ sendRequest }
            >
              Adicionar produto
            </button>
          </div>
        </div>
      </MainContent>
    </div>
  )
};

export default CreateProduct;
