// import React from "react";
import "./styles/headBackground.css";

const SSR = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 text-5xl min-[200px]:max-[1180px]:text-3xl font-normal text-white bg-[#003eb9] font-inter">
        <p>SELF STUDY REPORT</p>
      </div>
      <div className="flex items-center justify-center gap-10 p-10 min-[200px]:max-[1180px]:flex-col">
        <a
          className=""
          target="_blank"
          href="https://drive.google.com/file/d/1dKeWSvSL91_EwgVj7FITTFF66xpgM0Ga/view?usp=sharing"
        >
          <div className=" h-[240px] w-[210px] bg-slate-50 rounded-3xl">
            <div className="h-2/3"></div>
            <div className="flex items-center justify-center text-lg h-1/3 rounded-b-3xl bg-slate-400">
              <p>SSR 1st Cycle</p>
            </div>
          </div>
        </a>
        <a
          className=""
          target="_blank"
          href="https://drive.google.com/file/d/1-OSQoemUapRQWMr9h3YZGnFAlE0pnGUy/view?usp=sharing"
        >
          <div className=" h-[240px] w-[210px] bg-slate-50 rounded-3xl">
            <div className="h-2/3"></div>
            <div className="flex items-center justify-center text-lg h-1/3 rounded-b-3xl bg-slate-400">
              <p>SSR 2nd Cycle</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default SSR;
