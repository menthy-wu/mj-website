"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import WorkContext from "@/components/WorkContext";
import Title from "@/components/Title";
import Image from "next/image";
import Carousel from "framer-motion-carousel";

const page = () => {
  const pathName = usePathname();
  const workList = useContext(WorkContext);
  const [work, setWork] = useState(null);
  useEffect(() => {
    setWork(
      workList.find((w) => {
        return w.fileName === pathName.split("/")[1];
      })
    );
  }, [workList]);
  return (
    work && (
      <div className="w-full flex flex-col items-center justify-center">
        <Title title={work?.name} shadow={work?.engName} />
        <Image src={work.images[0]} alt="pic" className="w-1/3" />
        <div className=" flex-col items-center w-2/3">
          {work?.descriptions.map((description, index) => (
            <p key={index} className="text-xl font-source w-full m-8">
              {description}
            </p>
          ))}
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Carousel className="flex items-center justify-center">
            {work.images.map((image, index) => {
              return (
                <Image key={index} src={image} className="w-full self-center" />
              );
            })}
          </Carousel>
        </div>
      </div>
    )
  );
};
export default page;
