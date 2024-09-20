import React from "react";

const Admission = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Admission Procedure</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <ul className="list-disc list-inside ">
            <li className="pb-2">
              After declaration of HSSLC result, the office of the Principal
              will issue necessary information regarding admission.
            </li>
            <li className="pb-2">
              Application forms with Prospectus will be available from college
              office during working hours on payment of prescribed fee & also
              available in the website of the college.
            </li>
            <li className="pb-2">
              Admission is given on the basis of first come first serve basis
              with a personal interview along with original document for
              verification & accompanied by Parent/Local guardian.
            </li>
            <li className="pb-2">
              Duly filled forms with following documents to be submitted in the
              office on or before last date.
            </li>
            <li className="pb-2">
              One self-attested copy of HSLC Admit Card, Mark sheet & Pass
              Certificate.
            </li>
            <li className="pb-2">
              One self-attested copy of HSSLC Admit Card, Mark sheet & Pass
              Certificate.
            </li>
            <li className="pb-2">Three recent pass-port size photographs.</li>
            <li className="pb-2">
              Transfer Certificate from the last institute attended.
            </li>
            <li className="pb-2">SC/ OBC/ PWD Certificate if applicable.</li>
            <li className="pb-2">
              5% seats are reserved for benchmark disable (40%) students
              certified by Medical Authority with relaxation of 5 yrs age.
            </li>
            <li className="pb-2">
              Students from other than Nagaland Board are to submit original
              Migration Certificate.
            </li>
          </ul>
          <div className="pt-4 ">
            <p className="pb-1 text-lg font-semibold ">
              Members of the Admission Committees includes:-
            </p>
            <ol className="list-decimal list-inside ">
              <li>C. Narola Ao </li>
              <li>Dhruba Kumar Dhar</li>
              <li>Suraj Chhinal</li>
              <li>N. Tainla Jamir</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
