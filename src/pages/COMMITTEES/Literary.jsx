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
            <p>
              <b>About</b>
            </p>

            <p>
              The literary committee is the backbone of the academic and
              literary development of the students. Since its inception in the
              year 2014, the committee works to inculcate literary skills with
              the objectives to boost literary skills and bring to light hidden
              talent among the students. It attempts to advance an unrestrained
              and strong platform to improve the overall development of the
              students.{" "}
            </p>
            <br />
            <p>
              <b>Objectives</b>
            </p>
            <p>
              The main objective of the literary committee is to enhance the
              literary skills of students, to bring to light the hidden talents
              among the students and conduct various literary events providing a
              platform for the students to come up with there not known skills.
            </p>
            <br />
            <p>
              <b>Role and Functions</b>
            </p>
            <p>
              <ol className="list-disc list-inside ">
                <li className="pb-2">
                  To conduct competition for literary events like debate, drama,
                  elocution, Extempore, poetry writing, essay writing.
                </li>
                <li className="pb-2">
                  To conduct inter and intra literary event in the college.
                </li>
                <li className="pb-2">
                  To encourage students to attend literary events outside the
                  college.
                </li>
                <li className="pb-2">
                  To encourage students to make literary contributions to the
                  college magazines in the form of articles, poetry and other
                  write-ups.
                </li>
              </ol>
            </p>
            <br />
            <p className="pb-1 text-lg font-semibold ">
              Members of the Literary Club includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li>Mrs. Anju Rai - Convenor </li>
              <li>Ms. Rupa Dutta - Asst. Convenor</li>
              <li>Dr. Sanjukta Bhattacharjee</li>
              <li>Ms. Meyisangla Jamir</li>
              <li>Mrs. Promila Paul</li>
              <li>Hindi Teacher</li>
            </ol>
            <br />
            <p>
              <b>Activities</b>
            </p>
            <p>
              Literary committee organize activities to help students develop
              there writing and speaking skills and to encourage them to
              participate in literary events.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Literary;
