import React from "react";
import MainSearch from "./MainSearch";
import MainCard from "./MainCard";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 h-screen mx-20">
      <div className="col-span-8 flex-col border-r flex h-full">
        <MainSearch />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <div className="col-span-4 flex justify-center h-full">Submain</div>
    </div>
  );
};

export default Hero;
