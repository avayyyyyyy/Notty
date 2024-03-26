import { Bell, Menu, NotebookPen, User } from "lucide-react";
import React from "react";
import { ModeToggle } from "./toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="w-screen grid grid-cols-12  text-primary px-20 py-5 items-center border-b-2 shadow-sm justify-between">
      <div className="col-span-4">
        <Menu className="cursor-pointer" />
      </div>
      <div className="font-extrabold md:font-bold col-span-4 text-center text-3xl md:text-4xl  lg:text-5xl">NOTTY</div>
      <div className="col-span-4 justify-end  flex space-x-3 items-center">
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <div className=" text-primary hidden cursor-pointer  md:block ">
          <Bell />
        </div>
        <div className="hidden cursor-pointer  md:block">
          <Avatar>
            <AvatarImage  src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-2 border-primary text-base cursor-pointer border px-2 py-1 rounded-md items-center">
          Write <NotebookPen size={15} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
