import React from "react";
import { ImDiamonds } from "react-icons/im";
import Image from "next/image";
import blackShape from "../../public/blackShape.svg";
import LOGO from "../../public/LOGO.png";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex bg-green-diamond bg-repeat w-full flex-col items-center"
    >
      <div className="flex w-full flex-col items-center z-10 m-16">
        <Image className="m-2 p-0" src={LOGO} />
        <p className="text-7xl font-playfair py-2">ABSURD THEATER</p>
        <div className="w-1/3 flex flex-rol items-center m-2">
          <hr className="solid border-mj-darkerpink w-1/2" />
          <ImDiamonds className="text-xl text-mj-darkerpink mx-3" />
          <hr className="solid border-mj-darkerpink w-1/2" />
        </div>
        <p className="text-3xl font-playfair">Olivia Ming</p>
        <p className="text-2xl m-1 font-noto">明静</p>
        <p className="text-lg font-abril">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
        </p>
        <p className="text-lg font-source">
          皮拉耳牠躲步畫大告羽畫斗十戊公星躲珠
        </p>
      </div>
      <Image className="-mt-96 z-0" src={blackShape} />
    </section>
  );
};

export default Landing;