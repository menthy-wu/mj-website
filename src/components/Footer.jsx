import React from "react";
import Image from "next/image";
import LOGO from "../../public/LOGO.png";
import {
  RiWeiboFill,
  RiWechatFill,
  RiLinkedinBoxFill,
  RiMailOpenFill,
  RiPhoneFill,
} from "react-icons/ri";
import WorkContext from "./WorkContext";
import { useContext } from "react";
import Link from "next/link";
const iconStyle = "text-2xl mx-2";
const links = [
  {
    text: "微博 Weibo",
    link: "",
    icon: <RiWeiboFill className={iconStyle} />,
  },
  {
    text: "微信 Wechat",
    link: "",
    icon: <RiWechatFill className={iconStyle} />,
  },
  {
    text: "领英 Linkedin",
    link: "",
    icon: <RiLinkedinBoxFill className={iconStyle} />,
  },
  {
    text: "邮箱 Email",
    link: "",
    icon: <RiMailOpenFill className={iconStyle} />,
  },
  {
    text: "电话 Phone",
    link: "",
    icon: <RiPhoneFill className={iconStyle} />,
  },
];

const Footer = () => {
  const workList = useContext(WorkContext);
  return (
    <div className="font-playfair flex bg-green-diamond bg-repeat w-full items-end h-[25rem] justify-between">
      <div className="flex items-center">
        <Image alt="LOGO" className="m-2 p-0" src={LOGO} />
        <div>
          <p className="text-4xl border-b-[1px] py-2">ABSURD THEATER</p>
          <p className="text-4xl py-1">Olivia Ming</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-end m-5">
          <p className="text-3xl border-b-[1px] w-36 text-right p-2 ">Works</p>
          {workList.map((work, index) => (
            <Link
              href={work.fileName}
              key={index}
              className="[&>*]:hover:text-mj-pink [&>*]:hover:cursor-pointer text-xl flex items-center p-1"
            >
              <p>
                {work.engName} &nbsp; {work.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-end m-5">
          <p className="text-3xl border-b-[1px] w-36 text-right p-2 ">
            Contacts
          </p>
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="[&>*]:hover:text-mj-pink [&>*]:hover:cursor-pointer text-xl flex items-center p-1"
            >
              <p>{link.text}</p>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
