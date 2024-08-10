import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const D05_09_22 = () => {
  return (
    <>
      <p className="text-lg text-center desk:text-2xl">
        Meeting Minutes of Meeting held on 05-09-2022
      </p>
      <br />
      <iframe
        className="w-full h-[900px]"
        src="https://drive.google.com/file/d/1MuPZeokCngzZORN2TihVAs3qECt9Qzzr/preview"
        type="application/pdf"
      />
    </>
  );
};
const D01_07_19 = () => {
  return (
    <>
      <p className="text-lg text-center desk:text-2xl">
        Meeting Minutes of Meeting held on 01-07-2019
      </p>
      <br />
      <iframe
        className="w-full h-[900px]"
        src="https://drive.google.com/file/d/1UYPPx6IWjJKWBEk0c_wD7qyLUQBVnBgI/preview"
        type="application/pdf"
      />
    </>
  );
};
const D21_11_17 = () => {
  return (
    <>
      <p className="text-lg text-center desk:text-2xl">
        Meeting Minutes of Meeting held on 21-11-2017
      </p>
      <br />
      <iframe
        className="w-full h-[900px]"
        src="https://drive.google.com/file/d/18tmAJakmJ3Kxop-jl01P1XEC25eq2BLU/preview"
        type="application/pdf"
      />
    </>
  );
};

const MeetingMinutes = () => {
  return (
    <>
      <div className="flex text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Meeting Minutes of Grievance Redressal Committee</p>
      </div>
      <div className="flex flex-col items-center p-5 desk:p-10 dark:text-white">
        <div className="flex flex-col w-full gap-3 desk:w-1/4">
          <Link
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-xl dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
            to="/committees/grievanceRedressal/meetingMinutes/D05_09_22"
          >
            Meeting held on 05-09-2022
          </Link>
          <Link
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-xl dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
            to="/committees/grievanceRedressal/meetingMinutes/D01_07_19"
          >
            Meeting held on 01-07-2019
          </Link>
          <Link
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-xl dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
            to="/committees/grievanceRedressal/meetingMinutes/D21_11_17"
          >
            Meeting held on 21-11-2017
          </Link>
        </div>

        <div className="w-full pt-5 desk:w-1/2 desk:pt-10">
          <Routes>
            <Route path="D05_09_22" element={<D05_09_22 />} />
            <Route path="D01_07_19" element={<D01_07_19 />} />
            <Route path="D21_11_17" element={<D21_11_17 />} />
          </Routes>
        </div>
      </div>

      <div className="flex justify-center p-1 ">
        <Link
          className="desk:w-[160px] w-[100px] py-3 text-center text-black transition-all duration-300 border border-black rounded-xl dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
          to="/committees/grievanceRedressal/"
        >
          Go back
        </Link>
      </div>
    </>
  );
};

export default MeetingMinutes;
