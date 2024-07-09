import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const boxRef = useRef(null);
  const [currentNav, setCurrentNav] = useState(null);

  // const navItems = {
  //   Home: [
  //     { name: "Mission & Vision", link: "missionVision" },
  //     { name: "Principal's Desk", link: "principalsDesk" },
  //     { name: "Governing Body", link: "governingBody" },
  //     { name: "Administration", link: "administration" },
  //     { name: "Procedure and Policies", link: "procedureNpolicies" },
  //     { name: "Association", link: "association" },
  //     { name: "Courses Offered", link: "coursesOffered" },
  //     { name: "Code of Conduct", link: "codeOfConduct" },
  //   ],
  //   About: [
  //     { name: "About us", link: "aboutUs" },
  //     { name: "Teaching Employees", link: "teachingEmployees" },
  //     { name: "Non-teaching Employees", link: "nonTeachingEmployees" },
  //     { name: "Contact", link: "contact" },
  //   ],
  //   Online_Admissions: [
  //     {
  //       name: "New Admissions to 1st Semester (under construction)",
  //       link: "newAdmissions",
  //     },
  //     {
  //       name: "Fee Payment for New Students (under construction)",
  //       link: "underConstruction",
  //     },
  //     {
  //       name: "Fee Payment for Current Students (under construction)",
  //       link: "underConstruction",
  //     },
  //     {
  //       name: "Fee Payment for Bus Students (under construction)",
  //       link: "underConstruction",
  //     },
  //     {
  //       name: "View Application Status (under construction)",
  //       link: "underConstruction",
  //     },
  //     { name: "Admission Procedure", link: "admissionProcedure" },
  //     { name: "Fee Structure", link: "feeStructure" },
  //   ],
  //   Student_Services: [
  //     { name: "Pranab College Students Union (PCSU)", link: "PCSU" },
  //     { name: "Scholarship & Freeship ", link: "scholarshipFreeship" },
  //     { name: "Bus Service", link: "busService" },
  //     { name: "Grievance Forum", link: "grievanceForm" },
  //   ],
  //   NAAC: [
  //     { name: "SSR", link: "SSR" },
  //     { name: "IQAC Meeting and ATR", link: "iqacAtr" },
  //     {
  //       name: "Student Satisfaction Survey",
  //       link: "StudentSatisfactionSurvey",
  //     },
  //     { name: "Course Outcomes", link: "courseOutcomes" },
  //     { name: "NAAC Status", link: "naacStatus" },
  //     { name: "Feedback", link: "feedback" },
  //     { name: "Best Practices", link: "bestPractices" },
  //     { name: "Academic Audit", link: "academicAudit" },
  //   ],
  //   Calender: [
  //     { name: "Academic Calender", link: "academicCalender" },
  //     { name: "Holiday List", link: "holidayList" },
  //   ],
  //   Resources: [
  //     { name: "Academic Record", link: "academicRecord" },
  //     { name: "Magazines", link: "magazines" },
  //     { name: "Journal", link: "journal" },
  //     { name: "Prospectus", link: "prospectus" },
  //     { name: "Results", link: "results" },
  //   ],
  //   Library: [
  //     { name: "Syllabus", link: "syllabus" },
  //     { name: "Question Bank", link: "questionBank" },
  //     { name: "ILMS", link: "ILMS" },
  //   ],
  //   Committees: [
  //     { name: "List of Committees and its Members", link: "list" },
  //     { name: "NSS", link: "NSS" },
  //     { name: "Anti-Ragging Committee", link: "antiRagging" },
  //     {
  //       name: "Career Guidance and Placement Cell",
  //       link: "careerGuidancePlacement",
  //     },
  //     {
  //       name: "Anti-Sexual Harassment Committee",
  //       link: "antiSexualHarassment",
  //     },
  //     { name: "Sports Committee", link: "sports" },
  //     { name: "Eco Club", link: "eco" },
  //     { name: "Library Advisory Committee", link: "libraryAdvisory" },
  //     { name: "Red Ribbon Club", link: "redRibbon" },
  //     { name: "Women Empowerment Cell", link: "womenEmpowerment" },
  //     { name: "Admission Committee", link: "admission" },
  //     { name: "Examination Committee", link: "examination" },
  //     { name: "Research Committee", link: "research" },
  //     { name: "Cultural Committee", link: "cultural" },
  //     { name: "Alumni Association", link: "alumniAssociation" },
  //     { name: "Grievance Redressal Committee", link: "grievanceRedressal" },
  //   ],
  //   Gallery: [
  //     { name: "Sports", link: "sports" },
  //     { name: "Classroom & Computer Laboratory", link: "classroom" },
  //     { name: "Health Seminar", link: "healthSeminar" },
  //     { name: "Cultural Day", link: "cuturalDay" },
  //     { name: "NSS & RRC", link: "NSSandRRC" },
  //     { name: "Study Tours", link: "studyTours" },
  //     { name: "Charity Drive", link: "charityDrive" },
  //     { name: "Cleanliness Drive", link: "cleanlinessDrive" },
  //   ],
  // };

  const routedOption = (option) => {
    if (option === "Mission & Vision") {
      return "/home/missionVision";
    }
    if (option === "Principal's Desk") {
      return "/home/principalsDesk";
    }
    if (option === "Governing Body") {
      return "/home/governingBody";
    }
    if (option === "Administration") {
      return "/home/administration";
    }
    if (option === "Procedure and Policies") {
      return "/home/procedureNpolicies";
    }
    if (option === "Association") {
      return "/home/association";
    }
    if (option === "Courses Offered") {
      return "/home/coursesOffered";
    }
    if (option === "Code of Conduct") {
      return "/home/codeOfConduct";
    }
    if (option === "About us") {
      return "/about/aboutUs";
    }
    if (option === "Teaching Employees") {
      return "/about/teachingEmployees";
    }
    if (option === "Non-teaching Employees") {
      return "/about/nonTeachingEmployees";
    }
    if (option === "Contact") {
      return "/about/contact";
    }
    if (option === "New Admissions to 1st Semester (under construction)") {
      return "/onlineAdmissions/newAdmissions";
    }
    if (option === "Fee Payment for New Students (under construction)") {
      return "/onlineAdmissions/underConstruction";
    }
    if (option === "Fee Payment for Current Students (under construction)") {
      return "/onlineAdmissions/underConstruction";
    }
    if (option === "Fee Payment for Bus Students (under construction)") {
      return "/onlineAdmissions/underConstruction";
    }
    if (option === "View Application Status (under construction)") {
      return "/onlineAdmissions/underConstruction";
    }
    if (option === "Admission Procedure") {
      return "/onlineAdmissions/admissionProcedure";
    }
    if (option === "Fee Structure") {
      return "/onlineAdmissions/feeStructure";
    }
    if (option === "Pranab College Students Union (PCSU)") {
      return "/studentServices/PCSU";
    }
    if (option === "Scholarship & Freeship") {
      return "/studentServices/scholarshipFreeship";
    }
    if (option === "Bus Service") {
      return "/studentServices/busService";
    }
    if (option === "Grievance Forum") {
      return "/studentServices/grievanceForm";
    }
    if (option === "SSR") {
      return "/NAAC/SSR";
    }
    if (option === "IQAC Meeting and ATR") {
      return "/NAAC/iqacAtr";
    }
    if (option === "Student Satisfaction Survey") {
      return "/NAAC/StudentSatisfactionSurvey";
    }
    if (option === "Course Outcomes") {
      return "/NAAC/courseOutcomes";
    }
    if (option === "NAAC Status") {
      return "/NAAC/naacStatus";
    }
    if (option === "Feedback") {
      return "/NAAC/feedback";
    }
    if (option === "Best Practices") {
      return "/NAAC/bestPractices";
    }
    if (option === "Academic Audit") {
      return "/NAAC/academicAudit";
    }
    if (option === "Academic Calender") {
      return "/calender/academicCalender";
    }
    if (option === "Holiday List") {
      return "/calender/holidayList";
    }
    if (option === "Academic Record") {
      return "/resources/academicRecord";
    }
    if (option === "Magazines") {
      return "/resources/magazines";
    }
    if (option === "Journal") {
      return "/resources/journal";
    }
    if (option === "Prospectus") {
      return "/resources/prospectus";
    }
    if (option === "Results") {
      return "/resources/results";
    }
    if (option === "Syllabus") {
      return "/library/syllabus";
    }
    if (option === "Question Bank") {
      return "/library/questionBank";
    }
    if (option === "ILMS") {
      return "/library/ILMS";
    }
    if (option === "List of Committees and its Members") {
      return "/committees/list";
    }
    if (option === "NSS") {
      return "/committees/NSS";
    }
    if (option === "Anti-Ragging Committee") {
      return "/committees/antiRagging";
    }
    if (option === "Career Guidance and Placement Cell") {
      return "/committees/careerGuidancePlacement";
    }
    if (option === "Anti-Sexual Harassment Committee") {
      return "/committees/antiSexualHarassment";
    }
    if (option === "Sports Committee") {
      return "/committees/sports";
    }
    if (option === "Eco Club") {
      return "/committees/eco";
    }
    if (option === "Library Advisory Committee") {
      return "/committees/libraryAdvisory";
    }
    if (option === "Red Ribbon Club") {
      return "/committees/redRibbon";
    }
    if (option === "Women Empowerment Cell") {
      return "/committees/womenEmpowerment";
    }
    if (option === "Admission Committee") {
      return "/committees/admission";
    }
    if (option === "Examination Committee") {
      return "/committees/examination";
    }
    if (option === "Research Committee") {
      return "/committees/research";
    }
    if (option === "Cultural Committee") {
      return "/committees/cultural";
    }
    if (option === "Alumni Association") {
      return "/committees/alumniAssociation";
    }
    if (option === "Grievance Redressal Committee") {
      return "/committees/grievanceRedressal";
    }
    if (option === "Sports") {
      return "/gallery/sports";
    }
    if (option === "Classroom & Computer Laboratory") {
      return "/gallery/classroom";
    }
    if (option === "Health Seminar") {
      return "/gallery/healthSeminar";
    }
    if (option === "Cultural Day") {
      return "/gallery/culturalDay";
    }
    if (option === "NSS & RRC") {
      return "/gallery/NSSandRRC";
    }
    if (option === "Study Tours") {
      return "/gallery/studyTours";
    }
    if (option === "Charity Drive") {
      return "/gallery/charityDrive";
    }
    if (option === "Cleanliness Drive") {
      return "/gallery/cleanlinessDrive";
    }
  };

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
    About: [
      "About us",
      "Teaching Employees",
      "Non-teaching Employees",
      "Contact",
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
    ],
    Library: ["Syllabus", "Question Bank", "ILMS"],
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
  };

  const handleMouseOver = (nav) => {
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

  return (
    <>
      <div className="min-[200px]:max-[1180px]:hidden desk:block  desk:pt-1.5 bg-sate-400 desk:sticky top-0 z-[9999]">
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
                </div>
              ))}
            </div>
            <div
              ref={boxRef}
              id="options"
              onMouseEnter={() => handleMouseOver(currentNav)}
              onMouseLeave={handleMouseOut}
              className=" z-50"
            >
              {currentNav &&
                navItems[currentNav] &&
                navItems[currentNav].map((option) => (
                  <div
                    key={option}
                    className=" z-50 pl-9 h-[50px] w-full font-semibold dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out"
                  >
                    <Link to={routedOption(option)}>{option}</Link>
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
