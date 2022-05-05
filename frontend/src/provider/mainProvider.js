import { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER;

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const getUser = async () => {
    await axios.get(URL + '/user/me', { headers: { authorization: token } })
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {})
  }

  useEffect(() => {
    getUser();
  }, [token])

  const values = {
    user,
    token,
    setToken
  }

  return (
    <mainContext.Provider value={ values }>
      { children }
    </mainContext.Provider>
  )
}

export default MainProvider;
