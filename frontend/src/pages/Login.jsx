import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const checkFields = () => {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^\w{6,20}$/;

    const isFieldsValid = emailRegex.test(email) && passwordRegex.test(password);
    setIsButtonActive(isFieldsValid);
  }

  const makeRequest = () => {
    
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
        <Link to="/home">
          <button disabled={ !isButtonActive }>Enter</button>
        </Link>
      </div>
    </div>
  )
}

export default Login;
