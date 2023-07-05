import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { ImDiamonds } from "react-icons/im";

const Work = ({ work }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="flex w-2/3 group-odd:flex-row-reverse">
        <Image src={work.images[0]} className="w-1/3" />
        <div className="w-2/3 flex flex-col justify-center">
          <div className="group-odd:self-end mx-5">
            <p className="text-6xl font-playfair text-mj-pink/20 w-fit">
              {work.engName}
            </p>
            <p className="text-2xl border-l-2 border-mj-pink pl-2 font-source ml-5 -mt-5 w-fit">
              {work.name}
            </p>
          </div>
          <p className="self-center w-9/12 text-lg font-source mt-32 mb-8 group-odd:text-right">
            {work.description}
          </p>
          <Link
            href={`/${work.fileName}`}
            className="flex self-end items-center mx-8"
          >
            <p className="text-mj-pink font-abril text-3xl mx-4">More</p>
            <FaArrowRight className="text-mj-pink text-xl" />
          </Link>
        </div>
      </div>
      <div className="w-1/3 flex flex-rol items-center m-2 group-last:hidden">
        <hr className="solid border-mj-darkerpink w-1/2" />
        <ImDiamonds className="text-xl text-mj-darkerpink mx-3" />
        <hr className="solid border-mj-darkerpink w-1/2 my-24" />
      </div>
    </div>
  );
};

export default Work;
