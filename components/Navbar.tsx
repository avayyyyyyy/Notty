import { Bell, Menu, NotebookPen } from "lucide-react";
import React from "react";
import { ModeToggle } from "./toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Register } from "./Register";
import { Login } from "./Login";
import SignOut from "./SignOut";
import { CreateModal } from "./CreateModal";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-screen grid grid-cols-12  text-primary md:px-20 px-6 py-5 items-center border-b-2 shadow-sm justify-between">
      <div className="md:col-span-4 col-span-2">
        <Menu className="cursor-pointer" />
      </div>
      <div className="font-bold md:font-semibold col-span-8 md:col-span-4 text-center text-2xl md:text-4xl  lg:text-5xl">
        MEDIUM
      </div>
      <div className="md:col-span-4 col-span-2  justify-end  flex space-x-3 items-center">
        <div className="hidden  md:block">
          <ModeToggle />
        </div>
        <div className=" text-primary hidden cursor-pointer  md:block ">
          <Bell />
        </div>
        {session?.user ? (
          <>
            <div className="hidden cursor-pointer  md:block">
              <Avatar>
                <AvatarImage src={session?.user?.image!} />
                <AvatarFallback>
                  {session?.user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
            <CreateModal />
            <SignOut />
          </>
        ) : (
          <>
            <Login />
            <Register />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
