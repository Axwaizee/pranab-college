import React from "react";
import "./styles/Quote.css";

const Quote = () => {
  return (
    <div
      id="quoteWrapper"
      className=" overflow-hidden desk:h-[600px] min-[200px]:max-[1180px]:h-[646px] flex justify-center items-center relative min-[200px]:max-[1180px]:p-[25px]"
    >
      <div className=" desk:top-[20px] desk:left-[180px] top-[50px] left-[-30px] absolute desk:rounded-[50px] rounded-[30px] border-[1px] border-[#b4b4b4] desk:p-3 p-[5px] dark:bg-[#4948480c] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-[8px] ">
        <div className=" flex flex-col items-center desk:lg:justify-evenly justify-between desk:h-[195px] h-[176px] desk:w-[195px] w-[180px]">
          <div>
            <div
              className="rounded-full border-[1px] border-black dark:border-white "
              id="researchIconWrapper"
            >
              <img
                className=" h-[70px] desk:h-[80px] p-2 dark:invert"
                src="./public/assets/elements/Icons/research.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className=" font-poppins font-normal text-4xl dark:text-white">
              5
            </p>
          </div>
          <div className=" text-center">
            <p className="font-poppins font-normal text-base  dark:text-white">
              Research Journal
            </p>
            <p className="font-poppins font-normal text-sm dark:text-white">
              Published
            </p>
          </div>
        </div>
      </div>
      <div className=" desk:top-[50px] desk:right-[200px] top-[15px] right-[-30px] absolute desk:rounded-[50px] rounded-[30px] border-[1px] border-[#b4b4b4] desk:p-3 p-[5px] dark:bg-[#4948480c] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-[8px] ">
        <div className=" flex flex-col items-center justify-evenly  desk:h-[195px] h-[176px] desk:w-[195px] w-[180px]">
          <div>
            <div
              className="rounded-full border-[1px] border-black dark:border-white "
              id="researchIconWrapper"
            >
              <img
                className=" h-[70px] desk:h-[80px] p-2 dark:invert"
                src="./public/assets/elements/Icons/alumni.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className=" font-poppins font-normal text-3xl dark:text-white">
              2000+
            </p>
          </div>
          <div className=" text-center">
            <p className="font-poppins font-normal text-sm dark:text-white">
              Alumni
            </p>
          </div>
        </div>
      </div>
      <div className=" desk:bottom-[15px] desk:left-[220px] bottom-[40px] left-[-30px] absolute desk:rounded-[50px] rounded-[30px] border-[1px] border-[#b4b4b4] desk:p-3 p-[5px] dark:bg-[#4948480c] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-[8px] ">
        <div className=" flex flex-col items-center justify-evenly  desk:h-[195px] h-[176px] desk:w-[195px] w-[180px]">
          <div>
            <div
              className="rounded-full border-[1px] border-black dark:border-white "
              id="researchIconWrapper"
            >
              <img
                className=" h-[70px] desk:h-[80px] p-2 dark:invert"
                src="./public/assets/elements/Icons/results.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className=" font-poppins font-normal text-3xl dark:text-white">
              96%{" "}
            </p>
          </div>
          <div className=" text-center">
            <p className="font-poppins font-normal text-sm dark:text-white">
              Academic Results
            </p>
          </div>
        </div>
      </div>
      <div className=" desk:bottom-[120px] desk:right-[500px] bottom-[75px] right-[-5px] absolute desk:rounded-[50px] rounded-[30px] border-[1px] border-[#b4b4b4] desk:p-3 p-[5px] dark:bg-[#4948480c] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-[8px] ">
        <div className=" flex flex-col items-center justify-evenly desk:h-[195px] h-[176px] desk:w-[195px] w-[180px]">
          <div>
            <div
              className="rounded-full border-[1px] border-black dark:border-white "
              id="researchIconWrapper"
            >
              <img
                className=" h-[70px] desk:h-[80px] p-2 dark:invert"
                src="./public/assets/elements/Icons/placement.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className=" font-poppins font-normal text-3xl dark:text-white">
              1500+
            </p>
          </div>
          <div className=" text-center">
            <p className="font-poppins font-normal text-sm dark:text-white">
              Students Placed
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="desk:w-[1190px]">
          <h1 className="dark:text-white text-black font-normal font-inter desk:text-[80px] text-[40px]">
            <span>Shaping</span> the minds of tomorrow for{" "}
            <span id="history">over 30 years.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Quote;
