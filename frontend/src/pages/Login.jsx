import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import axios from 'axios';
import '../css/login.css';

const URL = process.env.REACT_APP_SERVER;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const navigate = useNavigate();

  const showInvalidLoginMessage = () => {
    setIsInvalidLogin(true);
    setTimeout(() => {
      setIsInvalidLogin(false)
    }, 5000);
  }

  const checkFields = () => {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^\w{6,20}$/;

    const isFieldsValid = emailRegex.test(email) && passwordRegex.test(password);
    setIsButtonActive(isFieldsValid);
  }

  const makeRequest = async () => {
    await axios.post(URL + '/login', { email, password })
      .then(() => {
        navigate('/home');
      })
      .catch((err) => {
        showInvalidLoginMessage()
      })
  }

  useEffect(() => {
    checkFields();
  }, [email, password])

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="hero-title login-title">Login</h2>
        <div>
          <p>Email:</p>
          <input
            placeholder="Digite seu Email..."
            className="text-input"
            onChange={ ({ target: { value } }) => setEmail(value) } 
            value={ email } 
          />
        </div>
        <div>
          <p>Password:</p>
          <input
            placeholder="Digite sua senha..."
            className="text-input"
            type="password"
            onChange={ ({ target: { value } }) => setPassword(value) } 
            value={ password } 
          />
        </div>
        { isInvalidLogin && 
          <p>
            <AiOutlineInfoCircle /> Invalid email or password!
          </p> 
        }
        <button
          className="bot"
          onClick={ makeRequest }
          disabled={ !isButtonActive }
        >
          Enter
        </button>
      </div>
    </div>
  )
}

export default Login;
