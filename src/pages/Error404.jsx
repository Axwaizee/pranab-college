import React from "react";

import notFound from "/assets/404/frame.gif";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className=" w-full desk:w-10/12 desk:h-[600px]   ">
        <img src={notFound} alt="" className="object-cover w-full h-full " />
      </div>
      <p className="text-2xl font-semibold text-[#336ad9] ">
        THIS PAGE COULD NOT BE FOUND
      </p>
      <Link
        className="text-2xl font-semibold text-[#336ad9] pt-2 pb-3 flex"
        to="/"
      >
        [{" "}
        <p className=" text-[#336ad9] px-1.5 hover:px-3">GO TO THE HOMEPAGE</p>{" "}
        ]
      </Link>
    </div>
  );
};

export default Error404;
