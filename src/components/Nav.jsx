import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";

function Nav() {
  const boxRef = useRef(null);
  const [currentNav, setCurrentNav] = useState(null);

  const navItems = {
    Home: [
      "Mission & Vision",
      "Principal's Desk",
      "Governing Body",
      "Administration",
      "Procedure and Policies",
      "Association",
      "Courses Offered",
      "Code of Conduct",
    ],
    Online_Admissions: [
      "New Admissions to 1st Semester (under construction)",
      "Fee Payment for New Students (under construction)",
      "Fee Payment for Current Students (under construction)",
      "Fee Payment for Bus Students (under construction)",
      "View Application Status (under construction)",
      "Admission Procedure",
      "Fee Structure",
    ],
    Student_Services: [
      "Pranab College Students Union (PCSU)",
      "Scholarship & Freeship ",
      "Bus Service",
      "Grievance Forum",
    ],
    NAAC: [
      "SSR",
      "IQAC Meeting and ATR",
      "Student Satisfaction Survey",
      "Course Outcomes",
      "NAAC Status",
      "Feedback",
      "Best Practices",
      "Academic Audit",
    ],
    Calender: ["Academic Calender", "Holiday List"],
    Resources: [
      "Academic Record",
      "Magazines",
      "Journal",
      "Prospectus",
      "Results",
      "Syllabus",
      "Question Bank",
      "ILMS",
    ],
    Committees: [
      "List of Committees and its Members",
      "NSS",
      "Anti-Ragging Committee",
      "Career Guidance and Placement Cell",
      "Anti-Sexual Harassment Committee",
      "Sports Committee",
      "Eco Club",
      "Library Advisory Committee",
      "Red Ribbon Club",
      "Women Empowerment Cell",
      "Admission Committee",
      "Examination Committee",
      "Research Committee",
      "Cultural Committee",
      "Alumni Association",
      "Grievance Redressal Committee",
    ],
    Gallery: [
      "Sports",
      "Classroom & Computer Laboratory",
      "Health Seminar",
      "Cultural Day",
      "NSS & RRC",
      "Study Tours",
      "Charity Drive",
      "Cleanliness Drive",
    ],
    About: [
      "About us",
      "Teaching Employees",
      "Non-teaching Employees",
      "Contact",
    ],
  };

  const handleMouseOver = (nav) => {
    console.log(nav);
    if (navItems[nav]) {
      setCurrentNav(nav);
      gsap.to(boxRef.current, {
        duration: 0.25,
        opacity: 1,
        height: "auto",
        paddingBottom: "36px",
        paddingTop: "36px",
        ease: "power1.inOut",
        display: "block",
      });
    } else {
      console.error(`Invalid nav key: `, nav);
    }
  };

  const handleMouseOut = () => {
    setCurrentNav();
    gsap.to(boxRef.current, {
      duration: 0.25,
      opacity: 0,
      height: 0,
      paddingBottom: 0,
      paddingTop: 0,
      ease: "power1.inOut",
      display: "none",
    });
  };

  const handleMouseOverOptions = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className="min-[200px]:max-[1180px]:hidden desk:block  desk:pt-1.5 bg-sate-400 desk:sticky top-0">
        <div className="flex justify-center relative">
          <div className="absolute overflow-hidden dark:bg-[#4948481a] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-md rounded-[25px] border-[1px] border-[#666666] ">
            <div className="navStill flex gap-[10px] px-[23px] text-base dark:text-white cursor-pointer border-b-[0.5px] border-[#666666]">
              {Object.keys(navItems).map((nav) => (
                <div
                  key={nav}
                  id={nav}
                  onMouseEnter={() => {
                    handleMouseOver(nav);
                  }}
                  onMouseOut={handleMouseOut}
                  className="item h-[50px] px-[13px] flex justify-center items-center font-inter object-contain hover:font-bold  "
                >
                  {nav.replace(/_/g, " ")}
                  {/* {nav} */}
                </div>
              ))}
            </div>
            <div
              ref={boxRef}
              id="options"
              onMouseEnter={() => handleMouseOver(currentNav)}
              onMouseLeave={handleMouseOut}
              className=""
            >
              {currentNav &&
                navItems[currentNav] &&
                navItems[currentNav].map((option, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      handleMouseOverOptions(option);
                    }}
                    // onMouseOut={handleMouseOutOptions}
                    className=" pl-9 h-[50px] w-full font-semibold dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out"
                  >
                    {option}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
