"use client";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import about1 from "../../public/about1.png";
import about2 from "../../public/about2.png";
import about3 from "../../public/about3.png";
import about4 from "../../public/about4.png";
import AboutText from "./AboutText";
import { motion } from "framer-motion";

const AboutSection = () => {
  const variants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center relative"
    >
      <Title title="About Me" />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="grid justify-items-stretch w-9/12 md:w-1/4"
        >
          <Image
            alt="my picture"
            src={about1}
            className="hidden md:block justify-self-end"
          />
          <Image
            alt="my picture"
            src={about3}
            className="justify-self-center"
          />
        </motion.div>
        <AboutText />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="grid items-stretch w-9/12 md:w-1/4 justify-center md:grid-cols-3"
        >
          <Image
            alt="my picture"
            src={about4}
            className="self-end col-span-2"
          />
          <Image
            alt="my picture"
            src={about2}
            className="hidden md:block self-start"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
