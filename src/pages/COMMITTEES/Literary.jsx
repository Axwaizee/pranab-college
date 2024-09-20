import React from "react";

const Literary = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Literary Club</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <div className="pt-1 ">
            <p className="pb-1 text-lg font-semibold ">
              Members of the Literary Club includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li>Anju Rai - Convenor </li>
              <li>Rupa Dutta - Asst. Convenor</li>
              <li>Sanjukta Bhattacharjee</li>
              <li>Meyisangla Jamir</li>
              <li>Promila Paul</li>
              <li>Hindi Teacher</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Literary;
