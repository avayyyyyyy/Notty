import React from "react";
import MainSearch from "./MainSearch";
import MainCard from "./MainCard";
import Sidebar from "./Sidebar";

const Hero = () => {
  return (
    <div className="grid relative grid-cols-12 h-screen mx-20">
      <div className="col-span-8 flex-col border-r flex h-full">
        <MainSearch />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <div className="col-span-4">
        <div className="sticky top-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
