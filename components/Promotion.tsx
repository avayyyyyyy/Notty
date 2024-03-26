import Image from "next/image";
import React from "react";

const Promotion = () => {
  return (
    <div className="bg-gradient-to-br from-primary/60 via-primary  to-primary/60  h-fit  flex p-3 rounded-lg ">
      <div className="flex flex-col space-y-3 mt-3 text-secondary">
        <div className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing. Nostrum.
        </div>
        <div className="text-sm">Lorem ipsum dolor sit amet.</div>
        <div className="px-2 cursor-pointer hover:bg-secondary/70 transition-all ease-in-out   py-1.5 text-sm  text-secondary-foreground bg-secondary/40 h-fit w-fit rounded-full">
          Get Unlimited Access
        </div>
      </div>
      <div className="p-3">
        <Image
          className="rounded-md"
          src={
            "https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png"
          }
          alt=""
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Promotion;
