import { createContext, useContext } from "react";

export const LoginContext = createContext();

export const useLoginStatus = () => {
  return useContext(LoginContext);
};
