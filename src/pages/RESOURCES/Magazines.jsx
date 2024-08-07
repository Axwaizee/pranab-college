import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const mag22 = () => {
  return (
    <div className="flex justify-center py-5">
      <iframe
        className="desk:w-1/2 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:h-[600px] h-[1000px]"
        src="https://drive.google.com/file/d/1xrEKo_T0cEVzd2sFMbvnCzcIUeFKhCUF/preview"
        type="application/pdf"
      />
    </div>
  );
};

const Magazines = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Magazine</p>
      </div>
      <div className="flex items-center justify-center h-60">
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">MEGAZINE 2022</p>
          <div className="flex justify-center text-white rounded-full ">
            <Link
              className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
              to="/resources/magazines/mag22"
            >
              View
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="mag22" element={mag22()} />
        </Routes>
      </div>
    </>
  );
};

export default Magazines;
