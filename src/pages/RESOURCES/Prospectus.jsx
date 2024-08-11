import React from "react";

const Prospectus = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Prospectus</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full p-5 desk:p-10 desk:w-1/2 dark:text-white">
          <div className="flex justify-center py-5">
            <iframe
              className=" w-full h-[600px] desk:h-[900px]"
              src="https://drive.google.com/file/d/11fPk8E-ylbtd2N3sn1roxY1wbh9xJzgE/preview"
              type="application/pdf"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Prospectus;
