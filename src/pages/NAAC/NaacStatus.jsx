import { Routes, Route, Link } from "react-router-dom";
import React from "react";

const aqar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 pb-12 desk:flex-row">
      <div className=" h-14 w-44">
        <button
          className="w-full h-full bg-[#BB86FC] rounded-full "
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1STCDu4q2p5c1MrwVF5X97_QjPR_taUx1/view?usp=sharing",
              "_blank"
            )
          }
        >
          2017-2018
        </button>
      </div>
      <div className=" h-14 w-44">
        <button
          className="w-full h-full bg-[#BB86FC] rounded-full "
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1nK4QBtO7YIsXMMI2SkDkzJ_a7_9B7CP5/view?usp=sharing",
              "_blank"
            )
          }
        >
          2018-2019
        </button>
      </div>
      <div className=" h-14 w-44">
        <button
          className="w-full h-full bg-[#BB86FC] rounded-full "
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1RYFeYq74Kcjg279gakNqKKPsFnnP0I_n/view?usp=sharing",
              "_blank"
            )
          }
        >
          2019-2020
        </button>
      </div>
      <div className=" h-14 w-44">
        <button
          className="w-full h-full bg-[#BB86FC] rounded-full "
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1vU90pT9RmxddHK1MGHuxWVW7a7_pQyeV/view?usp=sharing",
              "_blank"
            )
          }
        >
          2020-2021
        </button>
      </div>
      <div className=" h-14 w-44">
        <button
          className="w-full h-full bg-[#BB86FC] rounded-full "
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1_91SdQ24WDKlL8KiONjwzT7oB7iyVxYz/view?usp=sharing",
              "_blank"
            )
          }
        >
          2021-2022
        </button>
      </div>
    </div>
  );
};

const NaacStatus = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>NAAC Status</p>
      </div>
      <div className=" desk:h-[200px] h-[300px] w-full flex items-center justify-center">
        <div className="flex flex-row min-[200px]:max-[1180px]:flex-col gap-8">
          <div className="rounded-full h-14 w-44 group border-[1px] border-white relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-0 h-0 transition-all duration-300 ease-in-out bg-[#008ef3] rounded-full group-hover:w-48 group-hover:h-48 "></div>
            <Link
              to="/NAAC/naacStatus/aqar"
              className="absolute flex items-center justify-center w-full h-full dark:text-white"
            >
              AQAR
            </Link>
          </div>
          <div className="rounded-full h-14 w-44 group border-[1px] border-white relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-0 h-0 transition-all duration-300 ease-in-out bg-[#008ef3] rounded-full group-hover:w-48 group-hover:h-48 "></div>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1TxBEuLbi9uNKoRbUDGUoqpnIWLkedsiG/view?usp=sharing",
                  "_blank"
                )
              }
              className="absolute flex items-center justify-center w-full h-full dark:text-white"
            >
              NAAC Certificate
            </button>
          </div>
          <div className="rounded-full h-14 w-44 group border-[1px] border-white relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-0 h-0 transition-all duration-300 ease-in-out bg-[#008ef3] rounded-full group-hover:w-48 group-hover:h-48 "></div>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1asY7LDMssoUnHhnhcHDRV7jfVCKM_Nh3/view?usp=sharing",
                  "_blank"
                )
              }
              className="absolute flex items-center justify-center w-full h-full dark:text-white"
            >
              ISO Certificate
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="aqar" element={aqar()} />
      </Routes>
    </>
  );
};

export default NaacStatus;
