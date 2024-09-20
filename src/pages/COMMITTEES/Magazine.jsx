import React from "react";

const Magazine = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Magazine Committee</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <div className="pt-1 ">
            <p className="pb-1 text-lg font-semibold ">
              Members of the Magazine Committee includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li>Imtijungla Longchar - Convenor </li>
              <li>Meyisangla Jamir - Asst. Convenor</li>
              <li>Tongpok</li>
              <li>Executive members of PCSU</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazine;
