"use client";
import React, { useContext } from "react";
import Title from "./Title";
import Work from "./Work";
import WorkContext from "./WorkContext";

const PortfolioSection = () => {
  const workList = useContext(WorkContext);
  return (
    <section
      id="portfolio"
      className="flex flex-col justify-center items-center"
    >
      <Title title="Portfolio" />
      {workList.map((work, index) => (
        <Work work={work} />
      ))}
    </section>
  );
};

export default PortfolioSection;
