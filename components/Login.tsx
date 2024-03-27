"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Card, CardFooter } from "./ui/card";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

export function Login() {
  const { isLoginOpen, setIsLoginOpen, isRegisterOpen, setIsRegisterOpen } =
    useContext(GlobalContext);

  return (
    <Dialog open={isLoginOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsLoginOpen(!isLoginOpen)}
          variant={"secondary"}
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <div>Login</div>
            <div
              onClick={() => {
                setIsLoginOpen(false);
              }}
              className="text-sm font-bold rounded-md p-2 border cursor-pointer"
            >
              X
            </div>
          </DialogTitle>
          <DialogDescription>
            New to Notty?{" "}
            <span
              className="text-secondary-foreground underline cursor-pointer"
              onClick={() => {
                setIsRegisterOpen(true);
                setIsLoginOpen(false);
              }}
            >
              Register Now!
            </span>
          </DialogDescription>
        </DialogHeader>
        <Card className="w-full mx-auto">
          <form className="p-3">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email:</Label>
                <Input id="email" placeholder="Enter Your Email Here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password:</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password Here "
                />
              </div>
              <Button className="mb-3">Login</Button>
            </div>
          </form>
          <Separator orientation="horizontal" />
          <CardFooter className="flex flex-col mt-5 space-y-2">
            <Button
              onClick={() => signIn("google")}
              className="w-full flex space-x-2 "
            >
              Continue With Google <FaGoogle className="ml-2" />
            </Button>
            <Button
              onClick={() => signIn("github")}
              className="w-full flex space-x-2 "
            >
              Continue With Github
              <FaGithub className="ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
