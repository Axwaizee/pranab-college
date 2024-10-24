import React from "react";

const Magazine = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Magazine Committee</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-4/5">
          <div className="pt-1 ">
            <p>
              The magazine committee brings out the annual magazine of the
              college <h6 className="inline font-semibold">“Pranab Vision”</h6>.
              An editorial board is formed comprising of teachers and students.
              This annual magazine is inaugurated by distinguished guests during
              the annual Fresher’s Day meet of the college.
            </p>
            <br />
            <p>
              <b>Aims:</b>
            </p>
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                To provide a platform to students to express their
                creativity,thoughts and expressions.
              </li>
              <li className="pb-2">
                To encourage literary,artistic talent among students.
              </li>
              <li className="pb-2">
                It aims to promote academic and intellectual growth by fostering
                a culture of learning and intellectual curiosity among students
                and faculty members.
              </li>
            </ol>
            <br />
            <p>
              <b>Objectives:</b>
            </p>
            <ol className="list-disc list-inside ">
              <li className="pb-2">
                To serves as an avenue where students and staff develop their
                writing skills,communication,presentation abilities and critical
                thinking skills.
              </li>
              <li className="pb-2">
                It serves as a source of information for students,providing
                updates on college programmes,initiatives and achievements.
              </li>
              <li className="pb-2">
                Publishing articles,stories and poetry that reflects student ‘s
                interest and concerns.
              </li>
              <li className="pb-2">
                Creating a sense of belonging among students,faculty and alumni.
              </li>
            </ol>
            <br />
            <p className="pb-1 text-lg font-semibold ">
              Members of the Magazine Committee includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li>
                Mrs. Imtijungla Longchar - Assistant Professor - Department of
                History{" "}
              </li>
              <li>
                Mr. Tongpok - Assistant Professor - Department of Sociology
              </li>
              <li>
                Ms. Bendangmongla Lemdur - Assistant Professor - Department of
                Commerce
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazine;
