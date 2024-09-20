import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import {
  english,
  education,
  economics,
  evs,
  mil,
  sociology,
  commerce,
  polSci,
  history,
} from "./empImages";

const TeachingEmployees = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Teaching Faculty</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex min-[200px]:max-[426px]:flex-col w-4/5 min-[200px]:max-[1180px]:w-full">
          <div className=" flex flex-col min-[200px]:max-[426px]:w-full w-2/6  p-1 gap-1">
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/english"
            >
              Department of English
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/education"
            >
              Department of Education
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/economics"
            >
              Department of Economics
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/evs"
            >
              Department of EVS
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/mil"
            >
              Department of MIL
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/sociology"
            >
              Department of Sociology
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/commerce"
            >
              Department of Commerce
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/polSci"
            >
              Department of Political Science
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/history"
            >
              Department of History
            </Link>
            {/* <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/about/teachingEmployees/computer"
            >
              Department of Computer
            </Link> */}
          </div>
          <div className="min-[200px]:max-[426px]:w-full desk:h-full w-4/6">
            <Routes>
              <Route path="english" element={english()} />
              <Route path="education" element={education()} />
              <Route path="economics" element={economics()} />
              <Route path="evs" element={evs()} />
              <Route path="mil" element={mil()} />
              <Route path="sociology" element={sociology()} />
              <Route path="commerce" element={commerce()} />
              <Route path="polSci" element={polSci()} />
              <Route path="history" element={history()} />
              {/* <Route path="computer" element={computer()} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachingEmployees;
