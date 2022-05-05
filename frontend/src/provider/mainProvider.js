import { createContext, useState } from "react";

const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [token, setToken] = useState();

  const values = {
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
