import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ReadingList = () => {
  return (
    <div className="grid grid-cols-12 group  my-4  items-center space-x-3 ">
      <div className="col-span-4">
        <Image
          className="rounded-md"
          src={"https://www.svgrepo.com/show/508699/landscape-placeholder.svg"}
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="col-span-8">
        <div className="text-sm group-hover:underline  font-bold my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
        <div className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          beatae eligendi deleniti consequuntur enim.
        </div>

        <div className="flex items-center space-x-2 py-2">
          {/* <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div> */}
          <div className="text-xs">
            <div>
              <span className="font-bold">By Shubhankit Jain</span>
            </div>
            {/* <div className="text-secondary-foreground">Founder • Notty</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingList;
