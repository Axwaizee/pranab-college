import React from "react";
import "./styles/Motto.css";

const Motto = () => {
  return (
    <div className="flex justify-center items-center desk:max-[1919px]:mt-[50px] desk:mt-[100px] mt-10 min-[200px]:max-[1180px]:px-5">
      <div className="flex">
        <div className="flex items-center justify-center min-[200px]:max-[1180px]:hidden ">
          <div className=" mr-[120px]">
            <p
              id="motto"
              className=" font-inter font-medium text-6xl leading-[120px]"
            >
              Educate <br />
              Encourage <br /> Enlighten
            </p>
          </div>
        </div>
        <div className="desk:min-h-[500px] desk:w-[500px] bg-[#A79AFF] rounded-[25px] p-8">
          <div className="text-3xl font-medium font-inter">
            <p>Event Board</p>
          </div>
          <div className="mt-4 text-lg">
            <p>
              <ul className="w-full list-disc ">
                <li>
                  The students of Pranab College on International Youth Day
                  participated on Youth fest: Marathon Race, organised by
                  Nagaland State AIDs Control Society on 12 August 2024. A total
                  of 8 students participated in the marathon. LITO V SUMI BA 5th
                  semester secured 2nd position.{" "}
                  <a
                    href="http://"
                    className="pl-2 font-semibold transition-all duration-200 ease-in-out hover:text-white "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </li>
                <br />
                <li>
                  Pranab College Red Ribbon Club and National Service Scheme
                  Cell in collaboration with Blood Bank Hospital Dimapur,
                  Nagaland held BLOOD DONATION CAMP Cum HIV/AIDS Awareness
                  Programme on 9th August 2024 in the college premises. A total
                  of 53 units of blood to blood bank District Hospital Dimapur
                  was contributed by the students and faculty members of the
                  college.{" "}
                  <a
                    href="http://"
                    className="pl-2 font-semibold transition-all duration-200 ease-in-out hover:text-white "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motto;
