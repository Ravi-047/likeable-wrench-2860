import React, { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };
  const value = { isAuth, toggleAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
