import React from "react";
import SidebarProfile from "./SidebarProfile";
import Promotion from "./Promotion";
import ReadingList from "./ReadingList";

const Sidebar = () => {
  return (
    <aside className="mt-4 mx-11">
      <Promotion />
      <div className="my-5">
        <div className="font-bold my-2">People You Might Interested In:</div>
        <SidebarProfile />
        <SidebarProfile />
        <SidebarProfile />
      </div>
      <div className="font-bold my-2">My Reading List:</div>
      {/* <ReadingList /> */}
      <ReadingList />
      <ReadingList />
    </aside>
  );
};

export default Sidebar;
