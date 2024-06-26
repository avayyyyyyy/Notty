import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SidebarProfile = () => {
  return (
    <div className="flex my-3 items-center space-x-2 ">
      <div className="hover:cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="text-sm cursor-pointer hover:text-primary/70  font-bold">
          Shubhankit Jain
        </div>
        <div className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.
        </div>
      </div>
      <Button variant={"secondary"}>Follow</Button>
    </div>
  );
};

export default SidebarProfile;
