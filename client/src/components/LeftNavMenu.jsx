import React from "react";

const LeftNavMenu = () => {
  return (
    <>
      <div className="menu-container flex flex-col justify-center gap-5 mt-4 [&>span:hover]:bg-gray-200  [&>span]:cursor-pointer [&>span]:px-2 [&>span]:py-2">
        <span>Science of Everyday Life</span>
        <span>Business</span>
        <span>History</span>
        <span>Science</span>
        <span>Technology</span>
        <div className="h-[0.2px] bg-slate-300"></div>
      </div>
    </>
  );
};

export default LeftNavMenu;
