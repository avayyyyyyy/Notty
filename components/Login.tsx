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

export function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>New to Notty? Register Now...</DialogDescription>
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
                <Input id="password" placeholder="Password Here " />
              </div>
              <Button className="mb-3">Register</Button>
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
