import React from "react";
import { Link } from "react-router-dom";

const GrievanceRedressal = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Grievance Redressal Committee</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex flex-col w-full gap-3 desk:w-1/4">
          <Link
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-xl dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
            to="/committees/grievanceRedressal/policy"
          >
            Policy
          </Link>
          <Link
            className="w-full py-3 text-center text-black transition-all duration-300 border border-black rounded-xl dark:text-white hover:dark:text-black hover:text-white dark:hover:bg-white hover:bg-black dark:border-white "
            to="/committees/grievanceRedressal/meetingMinutes"
          >
            Meeting Minutes
          </Link>
        </div>
      </div>
    </>
  );
};

export default GrievanceRedressal;
