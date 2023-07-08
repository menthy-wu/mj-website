"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImDiamonds } from "react-icons/im";
import Image from "next/image";
import blackShape from "../../public/blackShape.svg";
import LOGO from "../../public/LOGO.png";

const Landing = () => {
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
    <section
      id="landing"
      className="flex bg-green-diamond bg-repeat w-full flex-col items-center"
    >
      <div className="flex w-full flex-col items-center z-10 m-16">
        <motion.div
          initial="hidden"
          custom={0}
          whileInView="visible"
          variants={variants}
        >
          <Image alt="LOGO" className="m-2 p-0 w-24 md:w-48" src={LOGO} />
        </motion.div>
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="text-3xl md:text-7xl font-playfair py-1 md:py-2"
        >
          ABSURD THEATER
        </motion.p>
        <div className="w-1/3 flex flex-rol items-center m-1 md:m-2">
          <hr className="solid border-mj-darkerpink w-1/2" />
          <ImDiamonds className="text-xl text-mj-darkerpink mx-3" />
          <hr className="solid border-mj-darkerpink w-1/2" />
        </div>
        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="text-xl md:text-3xl font-playfair"
        >
          Olivia Ming
        </motion.p>
        <motion.p
          custom={4}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="text-lg md:text-2xl m-0 md:m-1 font-noto"
        >
          明静
        </motion.p>
        <motion.p
          custom={5}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="text-sm md:text-lg font-abril text-center w-2/3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
        </motion.p>
        <motion.p
          custom={6}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="text-xs md:text-lg font-source w-2/3 text-center"
        >
          皮拉耳牠躲步畫大告羽畫斗十戊公星躲珠
        </motion.p>
      </div>
      <Image alt="shape" className="-mt-48 md:-mt-96 z-0" src={blackShape} />
    </section>
  );
};

export default Landing;
