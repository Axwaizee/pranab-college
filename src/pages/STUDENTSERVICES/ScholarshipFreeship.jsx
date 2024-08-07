import React from "react";

const ScholarshipFreeship = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Scholarship & Freeship</p>
      </div>
      <div className="flex justify-center py-5">
        <iframe
          className="desk:w-1/2 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:h-[600px] h-[1000px]"
          src="https://drive.google.com/file/d/1z52VYfOXSeXugFup_vafQDYxvsGjFGPa/preview"
          type="application/pdf"
        />
      </div>
    </>
  );
};

export default ScholarshipFreeship;
