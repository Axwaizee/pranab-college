import React from "react";
import "./styles/Quote.css";

const research = "/assets/elements/Icons/research.svg";
const alumni = "/assets/elements/Icons/alumni.svg";
const results = "/assets/elements/Icons/results.svg";
const placement = "/assets/elements/Icons/placement.svg";

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
                src={research}
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-4xl font-normal font-poppins dark:text-white">
              5
            </p>
          </div>
          <div className="text-center ">
            <p className="text-base font-normal font-poppins dark:text-white">
              Research Journal
            </p>
            <p className="text-sm font-normal font-poppins dark:text-white">
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
                src={alumni}
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-3xl font-normal font-poppins dark:text-white">
              4000+
            </p>
          </div>
          <div className="text-center ">
            <p className="text-sm font-normal font-poppins dark:text-white">
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
                src={results}
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-3xl font-normal font-poppins dark:text-white">
              96%{" "}
            </p>
          </div>
          <div className="text-center ">
            <p className="text-sm font-normal font-poppins dark:text-white">
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
                src={placement}
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-3xl font-normal font-poppins dark:text-white">
              1500+
            </p>
          </div>
          <div className="text-center ">
            <p className="text-sm font-normal font-poppins dark:text-white">
              Students Received
            </p>
            <p className="text-sm font-normal font-poppins dark:text-white">
              Scholarship
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="desk:w-[1190px] flex justify-center">
          <p className="dark:text-white desk:leading-[1em] leading-[1.5em] text-black font-normal font-inter desk:text-[80px]  text-[40px]">
            <span>Shaping</span> the minds of tomorrow for{" "}
            <span id="history">over 30 years.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
