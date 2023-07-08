"use client";
import { motion } from "framer-motion";
import React from "react";
import { GiGothicCross } from "react-icons/gi";

const AboutText = () => {
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
    <div className="md:w-5/12 justify-center items-center flex flex-col my-2 md:my-0">
      <GiGothicCross className="text-mj-pink text-2xl md:text-5xl m-1 md:m-9" />
      <div className="flex items-center justify-between">
        <GiGothicCross className="text-mj-pink text-2xl md:text-5xl m-1 md:m-9" />
        <div className="w-10/12">
          <motion.p
            initial="hidden"
            custom={0}
            whileInView="visible"
            variants={variants}
            className="m-3 text-sm md:text-lg"
          >
            备头开段事什除命号阶确得能算器目论体空历特会上,
            说位力命上将件更律四动R没雪孤任否合拉惹无。 组月列土场指白由,
            大低改容传构, 后好TH孤奇。 问到治第议此复与属步次,
            之将其务新H它串霸。 处林合万在行证联经, 局影界也战学的,
            和还孟自8等花。 半打千马深速第, 存做运米回角你, 共7周她露。
          </motion.p>
          <motion.p
            initial="hidden"
            custom={1}
            whileInView="visible"
            variants={variants}
            className="m-3 text-sm md:text-lg"
          >
            王文图候那水二军术处动, 示那素且严际那受种层和, 积持村取力手装争投。
            列总上方地联处段被难, 斗包二没提压片今, 拉提丽即取自呜数。
            界学复深候原定得支进, 观商派府指管之特即, 过成C进此茎她P。
            命影毛低被八取风果色之, 今层能入外元革保断老五, 局那8角好料深为或。
            北里一程改传间层满速利, 北千族名东院认速书, 料共求呜按茅化找茅。
          </motion.p>
        </div>
        <GiGothicCross className="text-mj-pink text-2xl md:text-5xl m-1 md:m-9" />
      </div>
      <GiGothicCross className="text-mj-pink text-2xl md:text-5xl m-1 md:m-9" />
    </div>
  );
};

export default AboutText;
