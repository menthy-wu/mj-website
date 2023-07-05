import React from "react";
import { IoMdMenu } from "react-icons/io";

const Navigation = () => {
  return (
    <div className="bg-black/50 flex justify-between items-center fixed w-full z-50">
      <IoMdMenu className="text-2xl ml-5 text-white" />
      <p className="font-abril text-2xl m-3">ABSURD THEATER</p>
      <div className="mr-5" />
    </div>
  );
};

export default Navigation;
