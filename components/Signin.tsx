"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";

const Signin = () => {
  return <Button onClick={() => signIn()}>Login</Button>;
};

export default Signin;
