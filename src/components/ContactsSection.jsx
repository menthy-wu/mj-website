"use client";
import { motion } from "framer-motion";
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
  const variants = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };
  return (
    <section id="contacts" className="">
      <Title title="Contacts" />
      <div className="flex items-center flex-col md:flex-row">
        <div className="h-[1px] md:w-32 bg-mj-lightergreen hidden md:block" />
        <div className="flex items-center">
          <Link href="">
            <motion.div
              initial="hidden"
              custom={0}
              whileInView="visible"
              variants={variants}
            >
              <RiWeiboFill className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] md:w-32 text-[50px] md:text-[100px]" />
            </motion.div>
          </Link>
          <ImDiamonds className="text-lg text-mj-lightergreen mx-1 md:mx-5" />
          <Link href="">
            <motion.div
              initial="hidden"
              custom={1}
              whileInView="visible"
              variants={variants}
            >
              <RiWechatFill className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] md:w-32 text-[50px] md:text-[100px]" />
            </motion.div>
          </Link>
          <ImDiamonds className="text-lg text-mj-lightergreen mx-1 md:mx-5" />
          <Link href="">
            <motion.div
              initial="hidden"
              custom={2}
              whileInView="visible"
              variants={variants}
            >
              <RiLinkedinBoxFill className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] md:w-32 text-[50px] md:text-[100px]" />
            </motion.div>
          </Link>
          <ImDiamonds className="hidden md:block text-lg text-mj-lightergreen mx-1 md:mx-5" />
        </div>
        <div className="flex my-2 md:my-0 items-center">
          <Link href="">
            <motion.div
              initial="hidden"
              custom={3}
              whileInView="visible"
              variants={variants}
            >
              <RiMailOpenFill className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] md:w-32 text-[50px] md:text-[100px]" />
            </motion.div>
          </Link>
          <ImDiamonds className="text-lg text-mj-lightergreen mx-1 md:mx-5" />
          <Link href="">
            <motion.div
              initial="hidden"
              custom={4}
              whileInView="visible"
              variants={variants}
            >
              <RiPhoneFill className="hover:cursor-pointer hover:stroke-none hover:fill-mj-pink stroke-white fill-none stroke-[.5px] md:w-32 text-[50px] md:text-[100px]" />
            </motion.div>
          </Link>
        </div>
        <div className="h-[1px] md:w-32 bg-mj-lightergreen hidden md:block" />
      </div>
    </section>
  );
};

export default ContactsSection;
