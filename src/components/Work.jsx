"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { ImDiamonds } from "react-icons/im";
import { GiGothicCross } from "react-icons/gi";
import { motion } from "framer-motion";

const Work = ({ work }) => {
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
    <div className="flex flex-col items-center group w-full z-0">
      <div className="flex-col md:flex-row flex w-11/12 md:w-2/3 md:group-odd:flex-row-reverse items-center">
        <motion.div
          initial="hidden"
          custom={0}
          whileInView="visible"
          variants={variants}
          className="flex flex-col w-9/12 md:w-1/3"
        >
          <div className="relative w-full z-0 bg-red-500">
            <GiGothicCross className=" text-mj-green text-[200px] md:text-[500px] z-0 absolute group-even:left-0 group-even:-translate-x-1/2 group-odd:translate-x-1/2 group-odd:right-0 top-0 -translate-y-1/2" />
          </div>
          <Image alt="work" src={work.images[0]} className="w-full z-50" />
        </motion.div>

        <div className="w-2/3 flex flex-col justify-center my-2">
          <motion.div
            initial="hidden"
            custom={1}
            whileInView="visible"
            variants={variants}
            className="md:group-odd:self-end mx-5"
          >
            <p className="text-2xl md:text-6xl font-playfair text-mj-pink/20 w-fit">
              {work.engName}
            </p>
            <p className="text-lg md:text-2xl border-l-2 border-mj-pink pl-2 font-source ml-5 -mt-5 w-fit">
              {work.name}
            </p>
          </motion.div>
          <motion.p
            initial="hidden"
            custom={2}
            whileInView="visible"
            variants={variants}
            className="self-center w-full md:w-9/12 text-base md:text-lg font-source mt-8 md:mt-32 mb-8 md:group-odd:text-right"
          >
            {work.descriptions[0]}
          </motion.p>
          <Link
            href={`/${work.fileName}`}
            className="flex self-end items-center mx-8"
          >
            <p className="text-mj-pink font-abril text-lg md:text-3xl mx-2 md:mx-4">
              More
            </p>
            <FaArrowRight className="text-mj-pink text-base md:text-xl" />
          </Link>
        </div>
      </div>
      <div className="w-1/3 flex flex-rol items-center m-2 group-last:hidden">
        <hr className="solid border-mj-darkerpink w-1/2" />
        <ImDiamonds className="text-xl text-mj-darkerpink mx-3" />
        <hr className="solid border-mj-darkerpink w-1/2 my-8 md:my-24" />
      </div>
    </div>
  );
};

export default Work;
