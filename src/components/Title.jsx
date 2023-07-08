"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImDiamonds } from "react-icons/im";

const Title = ({ title, shadow = title }) => {
  const variants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      className="my-24 z-50"
    >
      <p className="font-playfair text-5xl md:text-9xl z-0 text-mj-pink/20 text-center">
        {shadow}
      </p>
      <div className="flex flex-col items-center justify-center -mt-8 md:-mt-11">
        <div className="flex items-center justify-center m-2">
          <ImDiamonds className="text-base md:text-lg text-mj-pink mx-10" />
          <p className="font-playfair text-2xl md:text-4xl z-10 text-center">
            {title}
          </p>
          <ImDiamonds className="text-base md:text-lg text-mj-pink mx-10" />
        </div>
        <div className="w-10 h-1 bg-mj-pink" />
      </div>
    </motion.div>
  );
};

export default Title;
