import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GiGothicCross } from "react-icons/gi";
const links = [
  {
    name: "HOME",
    link: "",
  },
  { name: "ABOUT ME", link: "#about" },
  { name: "PORTFOLIO", link: "#portfolio" },
  { name: "CONTACTS", link: "#contacts" },
];
const MenuButton = () => {
  const onClick = () => {
    setExpand(!expand);
  };
  const [expand, setExpand] = useState(false);
  return (
    <div className="hover:cursor-pointer" onClick={onClick}>
      <IoMdMenu className="text-2xl ml-5 text-white" />
      {expand && (
        <div className="fixed z-50 h-screen w-[500px] bg-black/50 top-12 flex flex-col">
          {links.map((link, index) => (
            <div key={index} className="flex items-center ml-5 first:mt-32">
              <GiGothicCross className="text-3xl" />
              <Link href={link.link} className="font-playfair text-4xl m-4">
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
