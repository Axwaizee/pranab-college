import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const links = {
  year2018:
    "https://drive.google.com/file/d/1Aqq8eAtQ8mSvY7DU6UUn8FlG2l_6OkDq/preview",
  year2019:
    "https://drive.google.com/file/d/1GwKSgK7jc6i4tbMWAgOeHBkuO8intSHY/preview",
  year2020:
    "https://drive.google.com/file/d/1mbqa5G4dyKtQ2rgFpt9KqKX7RGpIH0V3/preview",
  year2021:
    "https://drive.google.com/file/d/1Gv7VuUUxSqA5kPwbpIBukWoqSjJdQXoa/preview",
  year2022:
    "https://drive.google.com/file/d/1d4RS5ftWto_pJhB09b-5UnsmiPonCVLA/preview",
};

const unavailable = () => {
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

const HolidayList = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Holiday List</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex min-[200px]:max-[426px]:flex-col w-4/5 min-[200px]:max-[1180px]:w-full">
          <div className=" flex flex-col min-[200px]:max-[426px]:w-full w-2/6  p-1 gap-1">
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/holidayList/year2023"
            >
              HOLIDAY LIST 2023
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/holidayList/year2022"
            >
              HOLIDAY LIST 2022
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/holidayList/year2021"
            >
              HOLIDAY LIST 2021{" "}
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/holidayList/year2020"
            >
              HOLIDAY LIST 2020{" "}
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/holidayList/year2019"
            >
              HOLIDAY LIST 2019
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/calender/holidayList/year2018"
            >
              HOLIDAY LIST 2018
            </Link>
          </div>
          <div className="min-[200px]:max-[426px]:w-full desk:h-full w-4/6">
            <Routes>
              <Route path="year2018" element={link(links.year2018)} />
              <Route path="year2019" element={link(links.year2019)} />
              <Route path="year2020" element={link(links.year2020)} />
              <Route path="year2021" element={link(links.year2021)} />
              <Route path="year2022" element={link(links.year2022)} />
              <Route path="year2023" element={unavailable()} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayList;
