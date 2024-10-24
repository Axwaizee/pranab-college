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
        <div className="w-full desk:w-2/3">
          <div className="text-justify dark:text-white">
            <p>
              Eco-Club or Green Club is a voluntary group which promotes the
              student’s involvement in learning about and improving their
              environment. The Pranab College has an active eco- club to impart
              knowledge to the students about the importance of Environmental
              protection and Sustainable development.
            </p>
            <br />
            <p>
              <b>Eco Club Policy</b>
            </p>
            <p>
              The Pranab College have an active Eco-club to impart knowledge to
              the students about the importance of environmental protection and
              sustainable development. As the whole world concern about various
              environmental issues – environmental degradation, climate change;
              taking into consideration, Eco-club of Pranab college also took
              initiatives to make the students concious about their natural
              environment – its conservation and protection. The club includes
              four faculty members and all the students of the college join it
              to support a clean environment within and outside campus. The club
              organises various programme throughout the year such as
              celebration of world environment day, earth day, awareness
              programme on e-waste management, training programme on compost
              making, Free – land knowledge on waste to wealth technologies etc.
            </p>
            <br />
            <p>
              <b>Objectives</b>
            </p>
            <ul className="list-disc list-inside">
              <li className="pb-2">
                To impart knowledge about various environmental issues and
                problems and how to tackle them.
              </li>
              <li className="pb-2">
                To motivate the students to maintain clean and green campus
              </li>
              <li className="pb-2">
                To educate the students about the impact of e-wastes on the
                environment and how to manage it.
              </li>
              <li className="pb-2">
                Sensitize the students to minimize the use of plastics which
                create havoc to the environment.
              </li>
              <li className="pb-2">
                To provide knowledge to the students about the various ways to
                reduce the waste generated and how waste can be recycled or
                converted into useful substances.
              </li>
            </ul>
            <br />
            <p>
              <b>Activities:</b>
            </p>
            <ul className="list-decimal list-inside">
              <li className="pb-2">
                The Eco-club of Pranab College organizes various programmes
                throughout the year such as celebration of World Environment
                Day, Earth Day etc. on every year.
              </li>
              <li className="pb-2">
                Every year the eco-club of the college organize an awareness
                programme on E-waste management so as to make the students aware
                of the harmful impact of e-waste on the environment.
              </li>
              <li className="pb-2">
                Eco-club organize a training programme on compost making to
                provide knowledge on how bio-degradable waste can be converted
                into manure (Compost) to increase soil fertility.
              </li>
            </ul>

            <br />
            <p>
              <b>Members of the Eco-Club includes:-</b>
            </p>
            <ul className="list-decimal list-inside">
              <li className="pb-2">Mrs. Purnima Das (Convenor)</li>
              <li className="pb-2">Mrs. Tekamongla Jamir (Asst. Convenor)</li>
              <li className="pb-2">
                Mrs. Ulla Laureen Fernandez (Asst. Prof.)
              </li>
              <li className="pb-2">Ms. Bendangmongla Lemdur (Asst. Prof.) </li>
              <li className="pb-2 ">Students Executives (Pranab College)</li>
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
