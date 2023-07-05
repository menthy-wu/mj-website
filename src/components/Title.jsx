import React from "react";
import { ImDiamonds } from "react-icons/im";

const Title = ({ title }) => {
  return (
    <div className="my-24">
      <p className="font-playfair text-9xl z-0 text-mj-pink/20 text-center">
        {title}
      </p>
      <div className="flex flex-col items-center justify-center -mt-11">
        <div className="flex items-center justify-center m-2">
          <ImDiamonds className="text-lg text-mj-pink mx-10" />
          <p className="font-playfair text-4xl z-10 text-center">{title}</p>
          <ImDiamonds className="text-lg text-mj-pink mx-10" />
        </div>
        <div className="w-10 h-1 bg-mj-pink" />
      </div>
    </div>
  );
};

export default Title;
