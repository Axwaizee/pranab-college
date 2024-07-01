import React, { useRef, useState } from "react";
import { gsap } from "gsap";

function Sidebar() {
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
      "Scholarship & Freeship",
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
      "Classroom & Computer Laboratory",
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

  const handleNavClick = (nav) => {
    if (nav === currentNav) {
      // If the current nav item is clicked again, close it
      setCurrentNav(null);
      gsap.to(boxRef.current, {
        duration: 0.5,
        opacity: 0,
        height: 0,
        paddingBottom: 0,
        paddingTop: 0,
        ease: "power1.inOut",
        display: "none",
      });
    } else {
      // Open the clicked nav item
      setCurrentNav(nav);
      gsap.to(boxRef.current, {
        duration: 0.5,
        opacity: 1,
        height: "auto",
        paddingBottom: "20px",
        paddingTop: "20px",
        ease: "power1.inOut",
        display: "block",
      });
    }
  };

  return (
    <div className="z-[9999] absolute w-80 h-screen right-0 p-4 overflow-y-auto text-black dark:text-white bg-[#ffffff1a] bg-opacity-50 backdrop-blur-md dark:bg-[#4948481a]">
      <div className="relative z-50">
        {Object.keys(navItems).map((nav) => (
          <div key={nav} className=" z-50">
            <div
              id={nav}
              onClick={() => handleNavClick(nav)}
              className="z-50 p-4 cursor-pointer font-semibold font-inter text-xl"
            >
              {nav.replace(/_/g, " ")}
            </div>
            {currentNav === nav && (
              <div
                ref={boxRef}
                id="options"
                className=" z-50 p-4 rounded-md text-black dark:text-white font-medium text-md"
              >
                {navItems[currentNav].map((option, index) => (
                  <div key={index} className=" z-50 p-2 pl-5  rounded-md ">
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
