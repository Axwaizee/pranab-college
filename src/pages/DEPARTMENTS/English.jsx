import React from "react";

const English = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Department of English</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <div className="pt-1 ">
            <p>
              The Department of English is a vibrant academic unit that fosters
              a deep appreciation for literature, language, and cultural
              studies. The Department was established in the year 1991. Our
              mission is to equip students with critical thinking, creative
              expression, and effective communication skills. 
            </p>
            <br />
            <p>
              <b>Vision</b>
            </p>
            <br />
            <p>
              To become a center of excellence in English language and
              literature, producing , critically engaged, and creatively
              inspired individuals.  
            </p>
            <br />
            <p>
              <b>Objectives</b>
            </p>{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                Develop critical thinking and analytical skills through literary
                analysis. 
              </li>
              <li className="pb-2">
                Enhance language proficiency and communication skills. 
              </li>
              <li className="pb-2">
                Explore diverse literary traditions and cultural contexts. 
              </li>
              <li className="pb-2">Foster creative writing and expression.</li>
              <li className="pb-2">
                Prepare students for careers in education, writing, publishing,
                and related fields. 
              </li>
            </ol>
            <br />
            <p>
              <b>Courses Offered</b>
            </p>
            <br />{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                Bachelor of Arts (Major and Minor Courses)
              </li>
              <li className="pb-2">Skill Enhancement Course </li>
              <li className="pb-2">Ability Enhancement Compulsory Course</li>
            </ol>
            <br />
            <p>
              <b>Faculty Profile</b>
            </p>
            <br />{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                Dr Sanjukta Bhattacharjee (HoD) MA, B. Ed, Ph.D( Education)
              </li>
              <li className="pb-2">Ms Meyisangla Jamir MA NET </li>
              <li className="pb-2">Mrs Anju Rai MA </li>
              <li className="pb-2">Ms Rupa Dutta MA </li>
            </ol>
            <br />
            <p>
              <b>Resources</b>
            </p>
            <br />{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">Well-stocked library with e-resources </li>
              <li className="pb-2">Guest lectures and workshops.</li>
              <li className="pb-2">Seminars</li>
            </ol>
            <br />
            <p>
              <b>Career Opportunities</b>
            </p>
            <br />{" "}
            <ol className="list-disc list-inside ">
              <li className="pb-2">Teacher/Educator </li>
              <li className="pb-2">Writer/Journalist </li>
              <li className="pb-2">Editor/Publisher </li>
              <li className="pb-2">Researcher/Scholar </li>
              <li className="pb-2">Communications Specialist </li>
              <li className="pb-2">Content Developer </li>
              <li className="pb-2">Digital Media Specialist</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default English;
