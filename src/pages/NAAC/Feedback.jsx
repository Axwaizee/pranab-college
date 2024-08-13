import React from "react";

const Feedback = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Feedback</p>
      </div>
      <div className="flex justify-center py-5">
        <iframe
          className="desk:w-1/2 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:h-[600px] h-[1000px]"
          src="https://drive.google.com/file/d/1igu8WDN3niUBH3GCZBpSvg0pF8A9GtCx/preview"
          type="application/pdf"
        />
      </div>
    </>
  );
};

export default Feedback;
