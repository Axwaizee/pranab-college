import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

//BA Outlet Content

const CBCS = () => {
  return (
    <div className="grid grid-cols-4 min-[200px]:max-[630px]:grid-cols-1 min-[631px]:max-[900px]:grid-cols-2 min-[901px]:max-[1180px]:grid-cols-3 gap-x-5 gap-y-5">
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA SAMPLE GEN ALL SUBS </p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">Quality Assurance Initiatives</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">Quality Assurance Initiatives</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">Quality Assurance Initiatives</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const OldCourse = () => {
  return (
    <div className="grid grid-cols-4 min-[200px]:max-[630px]:grid-cols-1 min-[631px]:max-[900px]:grid-cols-2 min-[901px]:max-[1180px]:grid-cols-3 gap-x-5 gap-y-5">
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 1ST SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 1ST SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 2ND SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 2ND SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 3RD SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 3RD SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 4TH SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 4TH SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 5TH SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 5TH SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 6TH SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BA 6TH SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BA = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full gap-8 pb-10 desk:w-1/2 ">
          <Link
            to="CBCS"
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-full dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
          >
            BA CBCS
          </Link>
          <Link
            to="oldCourse"
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-full dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
          >
            BA Old Course
          </Link>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

const BCOM = () => {
  return (
    <div className="grid grid-cols-4 min-[200px]:max-[630px]:grid-cols-1 min-[631px]:max-[900px]:grid-cols-2 min-[901px]:max-[1180px]:grid-cols-3 gap-x-5 gap-y-5">
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 1ST SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 1ST SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 2ND SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 2ND SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 3RD SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 3RD SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 4TH SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 4TH SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 5TH SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 5TH SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 6TH SEM GEN ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">BCOM 6TH SEM HONS ALL SUBS</p>
          <div className="flex justify-center text-white rounded-full ">
            <a className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

//MA Outlet Content

const Y2018 = () => {
  return (
    <div className="grid grid-cols-4 min-[200px]:max-[630px]:grid-cols-1 min-[631px]:max-[900px]:grid-cols-2 min-[901px]:max-[1180px]:grid-cols-3 gap-x-5 gap-y-5">
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">SOC-05 2018</p>
          <div className="flex justify-center text-white rounded-full ">
            <a
              className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
              href="https://drive.google.com/file/d/1IIQvihSJrOI908BffBeRErJGeDuBoYmZ/view?usp=sharing"
              target="_blank"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const Y2019 = () => {
  return (
    <div className="grid grid-cols-4 min-[200px]:max-[630px]:grid-cols-1 min-[631px]:max-[900px]:grid-cols-2 min-[901px]:max-[1180px]:grid-cols-3 gap-x-5 gap-y-5">
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">SOC-05 2019 </p>
          <div className="flex justify-center text-white rounded-full ">
            <a
              className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
              href="https://drive.google.com/file/d/1mwcIrpgiFnt3HNPRbQ1CDWodPXMnMPu0/view?usp=sharing"
              target="_blank"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const Y2021 = () => {
  return (
    <div className="grid grid-cols-4 min-[200px]:max-[630px]:grid-cols-1 min-[631px]:max-[900px]:grid-cols-2 min-[901px]:max-[1180px]:grid-cols-3 gap-x-5 gap-y-5">
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">SOC-01 2021</p>
          <div className="flex justify-center text-white rounded-full ">
            <a
              className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
              href="https://drive.google.com/file/d/1EDfbMzHIuJImS15zYmJ2fKCI-3griQA5/view?usp=sharing"
              target="_blank"
            >
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
        bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">SOC-02 2021</p>
          <div className="flex justify-center text-white rounded-full ">
            <a
              className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
              href="https://drive.google.com/file/d/1SrTI3wIRu93riXoMUt3d7vPa7L9qp07d/view?usp=sharing"
              target="_blank"
            >
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">SOC-03 2021</p>
          <div className="flex justify-center text-white rounded-full ">
            <a
              className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
              href="https://drive.google.com/file/d/1iO4OXX5MJAYRVqtm7F4cNIHS-FfDfjCw/view?usp=sharing"
              target="_blank"
            >
              View
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
          bg-slate-50 rounded-3xl flex flex-col justify-between"
        >
          <p className="">SOC-04 2021</p>
          <div className="flex justify-center text-white rounded-full ">
            <a
              className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
              href="https://drive.google.com/file/d/1x92A8LrJiSDzeAW1GuL9YEIoio9jd8WU/view?usp=sharing"
              target="_blank"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MA = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full gap-8 pb-10 desk:w-1/2 ">
          <Link
            to="2018"
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-full dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
          >
            2018
          </Link>
          <Link
            to="2019"
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-full dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
          >
            2019
          </Link>
          <Link
            to="2021"
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-full dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
          >
            2021
          </Link>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

const QuestionBank = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Question Bank</p>
      </div>
      <div className="flex justify-center ">
        <div className="flex justify-center w-full p-16 desk:p-16 desk:w-1/2">
          <div className="flex flex-row min-[200px]:max-[1180px]:flex-col gap-8 ">
            <div className="rounded-full h-14 desk:w-44 w-full group border-[1px] border-white relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-0 h-0 transition-all duration-300 ease-in-out bg-[#008ef3] rounded-full group-hover:w-48 group-hover:h-48 "></div>
              <Link
                to="/library/questionBank/BA"
                className="absolute flex items-center justify-center w-full h-full dark:text-white"
              >
                Bachelors of Arts
              </Link>
            </div>
            <div className="rounded-full h-14 w-56 group border-[1px] border-white relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-0 h-0 transition-all duration-300 ease-in-out bg-[#008ef3] rounded-full group-hover:w-56 group-hover:h-56 "></div>
              <Link
                to="/library/questionBank/BCOM"
                className="absolute flex items-center justify-center w-full h-full dark:text-white"
              >
                Bachelors of Commerce
              </Link>
            </div>
            <div className="rounded-full h-14 desk:w-44 w-full group border-[1px] border-white relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-0 h-0 transition-all duration-300 ease-in-out bg-[#008ef3] rounded-full group-hover:w-48 group-hover:h-48 "></div>
              <Link
                to="/library/questionBank/MA"
                className="absolute flex items-center justify-center w-full h-full dark:text-white"
              >
                Masters of Arts
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex justify-center w-full desk:w-2/3 ">
          <Routes>
            <Route path="BA" element={<BA />}>
              <Route path="CBCS/*" element={<CBCS />} />
              <Route path="oldCourse/*" element={<OldCourse />} />
            </Route>
            <Route path="BCOM/*" element={<BCOM />} />
            <Route path="MA/*" element={<MA />}>
              <Route path="2018/*" element={<Y2018 />} />
              <Route path="2019/*" element={<Y2019 />} />
              <Route path="2021/*" element={<Y2021 />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default QuestionBank;
