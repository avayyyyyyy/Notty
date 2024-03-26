import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

const MainCard = () => {
  return (
    <div className="mt-5 grid grid-cols-12 gap-x-2  border-b-2 w-[96%] mx-auto  items-center">
      <div className="col-span-8">
        <div className="flex gap-x-2 items-center ml-2">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-sm">
            <div>
              <span className="font-bold">Shubhankit Jain</span> •{" "}
              <span>Nov 30, 2024</span>
            </div>
            <div className="text-secondary-foreground">Founder @ Notty</div>
          </div>
        </div>
        <div className="text-3xl font-bold mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          architecto cumque est in!
        </div>
        <div className="my-2 text-sm text-secondary-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          voluptatibus eveniet suscipit et incidunt eum quisquam sapiente
          commodi dolores maiores non alias nostrum totam vero porro, nisi,
          impedit earum laboriosam ratione? Consequatur perferendis odio magni
          quidem repudiandae, nam accusantium eos, eius, nisi rem iste? Id animi
          esse deserunt consectetur cupiditate.
        </div>
      </div>
      <div className="col-span-4">
        <Image
          className="border "
          src={
            "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          }
          alt="placeholder image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default MainCard;
