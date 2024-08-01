import React from "react";

const principal = "/assets/elements/principal/Principal.webp";
const vicePrincipal = "/assets/elements/principal/vicePrincipal/narola.webp";

const Administration = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Administration</p>
      </div>
      <div className="flex justify-center p-10">
        <div className="pt-5 dark:text-white">
          <div className="flex min-[200px]:max-[1180px]:flex-col">
            {" "}
            <div>
              <img
                src={principal}
                className=" h-[250px] w-[210px] rounded-xl"
              />
            </div>
            <div className="flex items-center justify-center text-lg desk:p-5 desk:text-2xl">
              <p className=" min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:pt-5">
                Dr. Santosh Kumar <br />
                Principal
              </p>
            </div>
          </div>
          <div className="flex  min-[200px]:max-[1180px]:flex-col">
            {" "}
            <div className=" h-[250px] w-[210px] flex justify-center items-center">
              <img src={vicePrincipal} className="w-full rounded-xl " />
            </div>
            <div className="flex items-center justify-center text-lg desk:p-5 desk:text-2xl">
              <p className=" min-[200px]:max-[1180px]:text-center">
                Ms. C. Narola Ao <br />
                Vice Principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administration;
