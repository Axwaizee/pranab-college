import React from "react";
import "./styles/Quote.css";

const Quote = () => {
  return (
    <div
      id="quoteWrapper"
      className="bg-slate-300 desk:h-[600px] flex justify-center items-center"
    >
      <div>
        <div>
          <div>
            <div
              className="rounded-full border-[1px] border-black dark:border-white "
              id="researchIconWrapper"
            >
              <img
                className=" h-16 p-1"
                src="./public/assets/elements/Icons/research.svg"
                alt=""
              />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="">
        <div className="desk:w-[1190px]">
          <h1 className="dark:text-white text-black font-normal font-inter desk:text-[80px]">
            <span>Shaping</span> the minds of tomorrow for{" "}
            <span id="history">over 30 years.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Quote;
