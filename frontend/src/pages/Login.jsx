import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const navigate = useNavigate();

  const checkFields = () => {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^\w{6,20}$/;

    const isFieldsValid = emailRegex.test(email) && passwordRegex.test(password);
    setIsButtonActive(isFieldsValid);
  }

  const makeRequest = () => {
    
    navigate('/home');
  }

  useEffect(() => {
    checkFields();
  }, [email, password])

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <p>Email:</p>
        <input 
          onChange={ ({ target: { value } }) => setEmail(value) } 
          value={ email } 
        />
        <p>Password:</p>
        <input 
          onChange={ ({ target: { value } }) => setPassword(value) } 
          value={ password } 
        />
        <button
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
