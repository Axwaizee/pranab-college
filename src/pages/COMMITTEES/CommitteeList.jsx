import React from "react";

const CommitteeList = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>List of Committees and its Members</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className=" w-full desk:w-1/2 h-[600px] desk:h-[900px]">
          {" "}
          <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1AO7yA8fag6xMAdOmYVkgnvjETwik6cyu/preview"
            type="application/pdf"
          />
        </div>
      </div>
    </>
  );
};

export default CommitteeList;
