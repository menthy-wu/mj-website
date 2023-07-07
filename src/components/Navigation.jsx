import React from "react";
import MenuButton from "./MenuButton";

const Navigation = () => {
  return (
    <div className="bg-black/50 flex justify-between items-center fixed w-full z-50 h-12 top-0">
      <MenuButton />
      <p className="font-abril text-2xl m-3">ABSURD THEATER</p>
      <div className="mr-5" />
    </div>
  );
};

export default Navigation;
