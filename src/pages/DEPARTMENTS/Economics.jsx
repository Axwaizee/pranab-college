import React from "react";

const Economics = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Department of Economics</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <div className="pt-1 ">
            <p>
              <b>Introduction</b>
            </p>
            <br />
            <p>
              The Department of Economics is a vibrant academic unit that
              focuses on the study of economic theories, principles, and
              applications. It aims to understand how resources are produced,
              distributed and consumed in society and to analyse various
              economic phenomena at both micro and macro levels. The department
              offers minor course to the students. The department provides
              students with a strong foundation in economic thought, preparing
              them to address real – world economic challenges.
            </p>
            <br />
            <p>
              <b>Objectives</b>
            </p>
            <br />{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                To develop a deep understanding of economic principles and
                policies.
              </li>
              <li className="pb-2">
                To equip students with analytical tools for economic
                decision-making.
              </li>
              <li className="pb-2">
                To prepare graduates for careers in economics, finance, public
                policy and academia.
              </li>
              <li className="pb-2">
                Cultivate critical thinking and logical reasoning.
              </li>
              <li className="pb-2">
                Foster global perspectives and cultural awareness.
              </li>
            </ol>
            <br />
            <p>
              <b>Functions</b>
            </p>
            <br />{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                Offering undergraduate programme in Economics.
              </li>
              <li className="pb-2">
                Delivering structured courses that cover foundational to
                advanced topics in Economics.
              </li>
              <li className="pb-2">
                Providing students with theoretical and practical knowledge.
              </li>
              <li className="pb-2">
                Facilitating internship in various sectors allowing students to
                gain practical experience.
              </li>
            </ol>
            <br />
            <p>
              <b>Faculty Profile</b>
            </p>
            <br />{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                Mr. Dhruba Kumar Dhar, Head of Department
              </li>
              <li className="pb-2">Mrs. Tekamongla Jamir, Asstt. Professor</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Economics;
