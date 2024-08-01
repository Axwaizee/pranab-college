import React from "react";

import "./styles/headBackground.css";

const MissionVision = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Vision & Mission of the College</p>
      </div>
      <div className="flex justify-center ">
        <div className=" desk:w-1/2 min-[200px]:max-[1180px]:w-full dark:text-white">
          <ol className="p-10 text-lg listStyle ">
            <li className="pb-1 pl-2">
              To impart inclusive, equitable and holistic education for the
              youth of the society.
            </li>
            <li className="pb-1 pl-2">
              To create an atmosphere favourable to moral and spiritual growth.{" "}
            </li>
            <li className="pb-1 pl-2">
              To provide quality education so that learners can become
              responsible social assets.
            </li>
            <li className="pb-1 pl-2">
              To promote the exchange of knowledge, research and innovation and
              equip the students with the skills needed to meet ever changing
              labour markets.
            </li>
            <li className="pl-2">
              To create a sense of national integrity that is secular and
              multi-cultural with respect of tolerance to all culture and
              religions.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
