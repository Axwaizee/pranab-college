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
            <div className="flex justify-center py-5">
              <iframe
                className="desk:w-1/2 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:h-[600px] h-[1000px]"
                src="https://drive.google.com/file/d/1xrEKo_T0cEVzd2sFMbvnCzcIUeFKhCUF/preview"
                type="application/pdf"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnovationDevelopement;
