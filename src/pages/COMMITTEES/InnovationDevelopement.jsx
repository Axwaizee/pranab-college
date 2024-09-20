import React from "react";

const InnovationDevelopement = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Innovation and Development Cell</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <div className="pt-1 ">
            <p className="pb-1 text-lg font-semibold ">
              Members of the Innovation and Development Cell includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li className="pb-2 "> Meyisangla Jamir - Convenor </li>
              <li className="pb-2 ">
                {" "}
                Dr. Alomi Cynthia Shikhu - Asst. Convenor{" "}
              </li>
              <li className="pb-2">Rupam Dasgupta</li>
              <li className="pb-2">Rupa Dutta</li>
              <li className="pb-2">Moasunep</li>
              <li className="pb-2">Tongpok</li>
              <li className="pb-2">Suvankar Dasgupta</li>
              <li className="pb-2">Saurav Dowarah - Advisor</li>
              <li className="pb-2">I. Imkongakum Ao - Advisor</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnovationDevelopement;
