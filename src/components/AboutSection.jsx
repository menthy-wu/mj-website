import React from "react";
import Title from "./Title";
import Image from "next/image";
import about1 from "../../public/about1.png";
import about2 from "../../public/about2.png";
import about3 from "../../public/about3.png";
import about4 from "../../public/about4.png";
import AboutText from "./AboutText";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center relative"
    >
      <Title title="About Me" />
      <div className="flex justify-center">
        <div className="grid justify-items-stretch w-1/4">
          <Image src={about1} className="justify-self-end" />
          <Image src={about3} className="justify-self-center" />
        </div>
        <AboutText />
        <div className="grid items-stretch w-1/4 grid-cols-3">
          <Image src={about4} className="self-end col-span-2" />
          <Image src={about2} className="self-start" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
