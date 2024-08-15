import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className=" min-[200px]:max-[1180px]:relative  flex desk:justify-center desk:mt-[100px] desk:max-[1919px]:mt-[80px] mt-[25px] desk:max-[1919px]:mb-[25px] desk:mb-[30px] mb-5 min-[200px]:max-[1180px]:justify-center">
      <div className="min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:px-5 ">
        <div className=" bg-[#017bfa] desk:h-[600px] desk:w-[960px] desk:max-[1919px]:h-[400px] desk:max-[1919px]:w-[640px] h-[500px]  desk:rounded-l-[300px] desk:rounded-r-3xl min-[500px]:max-[1180px]:rounded-t-3xl rounded-t-[300px] rounded-b-3xl"></div>
      </div>
      <div className="min-[200px]:max-[1180px]:absolute min-[200px]:max-[1180px]:object-contain bottom-[30px] min-[500px]:max-[1180px]:bottom-[100px] desk:mr-[200px]">
        <div className="flex flex-col justify-between h-full px-[52px] desk:py-[85px] desk:max-[1919px]:py-[62px] gap-8">
          <div>
            <p className="desk:w-[450px] min-[200px]:max-[1180px]:text-center font-inter font-normal desk:max-[1919px]:text-4xl desk:text-5xl text-2xl dark:text-white desk:leading-[57px]">
              Experience your life at Pranab College
            </p>
          </div>
          <div>
            <p className="desk:w-[450px] min-[200px]:max-[1180px]:text-center font-inter font-normal desk:max-[1919px]:text-xl desk:text-2xl text-lg dark:text-white">
              Get quality education to build and grow your professional career.
            </p>
          </div>
          <div className="flex justify-between desk:w-[450px] min-[200px]:max-[1180px]:flex-col gap-2">
            <Link
              to="/onlineAdmissions/newAdmissions"
              className="rounded-full px-6 py-[15px] bg-[#048AF9] hover:bg-[#0376d1] font-inter font-medium desk:max-[1919px]:text-lg desk:text-xl text-white"
            >
              Apply now
            </Link>
            <a
              href="https://drive.google.com/file/d/1VwsUtfJte4LConYwox2SE03X-ij-w-HM/view?usp=sharing"
              target="_blank"
              className="rounded-full px-6 py-[15px] font-inter font-medium desk:max-[1919px]:text-lg desk:text-xl dark:text-white hover:text-white hover:bg-[#048af9] border-[1px] border-[#048af9] transition ease-in-out duration-300"
            >
              Download Prospectus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
