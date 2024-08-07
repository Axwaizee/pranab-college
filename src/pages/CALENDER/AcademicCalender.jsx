import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const links = {
  year2018:
    "https://drive.google.com/file/d/1ssrlABsqESUlWUyon3D2FISwdgbvE4mg/preview",
  year2019:
    "https://drive.google.com/file/d/1Yx2Ah_oQ5rPV9DK4uljAzth35jfC4jEQ/preview",
  year2020:
    "https://drive.google.com/file/d/1gYC6FpuzwenMnr4aOvrWyfCYyiHuwjbx/preview",
  year2021:
    "https://drive.google.com/file/d/1L8g8-YnDoiSs3yqc136c5fDrw1B_qcFg/preview",
  year2022:
    "https://drive.google.com/file/d/1qnvlhf9xqjYb_boFiFtEvx2cXz4rWxgk/preview",
};

const year2023 = () => {
  return (
    <div className="flex w-full h-full p-2 dark:text-white ">
      <div className="flex items-center justify-center w-full">
        <p className="text-3xl dark:text-white">Content Comming Soon</p>
      </div>
    </div>
  );
};

const link = (l) => {
  return (
    <>
      <div className="flex justify-center p-2">
        <iframe className="w-full h-[1000px]" src={l} type="application/pdf" />
      </div>
    </>
  );
};

const AcademicCalender = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Academic Calender</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex min-[200px]:max-[426px]:flex-col w-4/5 min-[200px]:max-[1180px]:w-full">
          <div className=" flex flex-col min-[200px]:max-[426px]:w-full w-2/6  p-1 gap-1">
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/academicCalender/year2023"
            >
              ACADEMIC CALENDER 2023
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/academicCalender/year2022"
            >
              ACADEMIC CALENDER 2022
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/academicCalender/year2020-2021"
            >
              ACADEMIC CALENDER 2020 - 2021{" "}
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/academicCalender/year2020"
            >
              ACADEMIC CALENDER 2020{" "}
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/academicCalender/year2019"
            >
              ACADEMIC CALENDER 2019
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/academicCalender/year2018"
            >
              ACADEMIC CALENDER 2018
            </Link>
          </div>
          <div className="min-[200px]:max-[426px]:w-full desk:h-full w-4/6">
            <Routes>
              <Route path="year2018" element={link(links.year2018)} />
              <Route path="year2019" element={link(links.year2019)} />
              <Route path="year2020" element={link(links.year2020)} />
              <Route path="year2020-2021" element={link(links.year2021)} />
              <Route path="year2022" element={link(links.year2022)} />
              <Route path="year2023" element={year2023()} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicCalender;
