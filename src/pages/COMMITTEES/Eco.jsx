import React from "react";

const greenAuditCertificate =
  "/assets/images/eco-club/green-audit-certificate.webp";

const greenCampusPolicy = "/assets/images/eco-club/green_campus_policy.webp";

const greenCampusPolicyCertificate =
  "/assets/images/eco-club/green_campus_policy_certificate.webp";

const Eco = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Eco Club</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="w-full desk:w-3/4">
          <div className="text-justify dark:text-white">
            <p>
              <b>Objectives</b>
            </p>
            <br />
            <ul className="list-disc list-inside">
              <li className="pb-2">
                To impart knowledge about various environmental issues and
                problems, and how to tackle them.
              </li>
              <li className="pb-2">
                To motivate the students to maintain green and clean
                surroundings.
              </li>
              <li className="pb-2">
                To educate the students to create awareness about the impact of
                E-waste on the environment.
              </li>
              <li className="pb-2">
                Sensitize the students to minimize the use of plastic bags which
                create great havoc to the environment.
              </li>
            </ul>
            <br />
            <p>
              <b>Functions:</b>
            </p>
            <br />
            <ul className="list-decimal list-inside">
              <li className="pb-2">
                The Eco-Club of Pranabananda Women’s College celebrates World
                Environment Day and Earth Day every year to create awareness
                among the students about the importance of clean and green
                environment for a sustainable living.
              </li>
              <li className="pb-2">
                Various sensitization programmes are organized from time to time
                to impart knowledge about proper disposal of various waste and
                their impact on the environment.
              </li>
            </ul>
            <br />
            <p>
              <b>Outcome:</b>
            </p>
            <br />
            <ul className="list-decimal list-inside">
              <li className="pb-2">
                Students develop the habit of maintaining a clean surrounding
                and develop the habit of safe waste disposal.
              </li>
              <li className="pb-2">
                They participate in plantation programmes.
              </li>
              <li className="pb-2">
                They participate in various sensitization programmes.
              </li>
              <li className="pb-2">
                They participate in cleanliness drive in and outside the campus.
              </li>
            </ul>
            <br />
            <p>
              <b>Members of the Eco-Club includes:-</b>
            </p>
            <br />
            <ul className="list-decimal list-inside">
              <li className="pb-2">
                Mrs. Purnima Das, Asst. Prof., Dept. of EVS, Convenor
              </li>
              <li className="pb-2">
                Mrs. Anju Rai, Asst. Prof., Dept of English, Member
              </li>
              <li className="pb-2">
                Mr. Suraj Chhinal, Asst. Prof. & Head of Dept. of Commerce,
                Member
              </li>
              <li className="pb-2">
                Ms. Olivia J. Kikon, Asst. Prof., Dept. of Sociology, Member
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Green Audit</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="w-full desk:w-1/2 dark:text-white">
          <img
            src={greenAuditCertificate}
            alt="Green Audit Certificate"
            className="w-full "
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 text-3xl font-normal text-white desk:text-5xl bg-[#003eb9] font-inter">
        <p className="pb-8 ">Green Campus Policy</p>
        <div className="w-full text-sm desk:w-1/2 dark:text-white">
          <img
            src={greenCampusPolicy}
            alt="green campus policy image"
            className="w-full "
          />
        </div>
      </div>
      <div className="flex justify-center p-5 bg-white desk:p-10">
        <div className="w-full text-sm desk:w-1/2 ">
          <img
            src={greenCampusPolicyCertificate}
            alt="green campus policy certificate"
            className="w-full "
          />
        </div>
      </div>
    </>
  );
};

export default Eco;
