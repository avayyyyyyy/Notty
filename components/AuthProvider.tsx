"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const AuthProvider = ({ children }: props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
