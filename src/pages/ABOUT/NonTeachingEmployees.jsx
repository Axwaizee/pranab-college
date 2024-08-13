import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import { office, library, gradeIV } from "./empImages";

const NonTeachingEmployees = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Non Teaching Staff</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex min-[200px]:max-[426px]:flex-col w-4/5 min-[200px]:max-[1180px]:w-full">
          <div className=" flex flex-col min-[200px]:max-[426px]:w-full w-2/6  p-1 gap-1">
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/nonTeachingEmployees/office"
            >
              Office Staff
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/nonTeachingEmployees/library"
            >
              Library Staff
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/nonTeachingEmployees/gradeIV"
            >
              Grade IV Staff
            </Link>
          </div>
          <div className="min-[200px]:max-[426px]:w-full desk:h-full w-4/6">
            <Routes>
              <Route path="office" element={office()} />
              <Route path="library" element={library()} />
              <Route path="gradeIV" element={gradeIV()} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default NonTeachingEmployees;
