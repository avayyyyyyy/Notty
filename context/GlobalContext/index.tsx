"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext({
  isRegisterOpen: false,
  isLoginOpen: false,
  setIsRegisterOpen: (value: boolean) => {},
  setIsLoginOpen: (value: boolean) => {},
});

const { Provider } = GlobalContext;

const GlobalContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Provider
      value={{ isRegisterOpen, setIsRegisterOpen, isLoginOpen, setIsLoginOpen }}
    >
      {children}
    </Provider>
  );
};
export default GlobalContextProvider;
