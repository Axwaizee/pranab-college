import React from "react";

const MentorMentee = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Mentor - Mentee Cell</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <div className="pt-1 ">
            <p className="pb-1 text-lg font-semibold ">
              Members of the Mentor - Mentee Cell includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li>C. Narola Ao - Convenor </li>
              <li>Tongpok - Asst. Convenor</li>
              <li>Bendangmongla Lemdur</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorMentee;
