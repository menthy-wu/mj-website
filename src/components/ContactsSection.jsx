import React from "react";
import Title from "./Title";
import Link from "next/link";
import {
  RiWeiboFill,
  RiWechatFill,
  RiLinkedinBoxFill,
  RiMailOpenFill,
  RiPhoneFill,
} from "react-icons/ri";
import { ImDiamonds } from "react-icons/im";

const ContactsSection = () => {
  return (
    <section id="contacts" className="">
      <Title title="Contacts" />
      <div className="flex items-center">
        <div className="h-[1px] w-32 bg-mj-lightergreen" />
        <Link href="">
          <RiWeiboFill
            className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] w-32"
            size={100}
          />
        </Link>
        <ImDiamonds className="text-lg text-mj-lightergreen mx-5" />
        <Link href="">
          <RiWechatFill
            className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] w-32"
            size={100}
          />
        </Link>
        <ImDiamonds className="text-lg text-mj-lightergreen mx-5" />
        <Link href="">
          <RiLinkedinBoxFill
            className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] w-32"
            size={100}
          />
        </Link>
        <ImDiamonds className="text-lg text-mj-lightergreen mx-5" />
        <Link href="">
          <RiMailOpenFill
            className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] w-32"
            size={100}
          />
        </Link>
        <ImDiamonds className="text-lg text-mj-lightergreen mx-5" />
        <Link href="">
          <RiPhoneFill
            className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] w-32"
            size={100}
          />
        </Link>
        <div className="h-[1px] w-32 bg-mj-lightergreen" />
      </div>
    </section>
  );
};

export default ContactsSection;
