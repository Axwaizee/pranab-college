import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const boxRef = useRef(null);
  const [currentNav, setCurrentNav] = useState(null);

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
    if (option === "Teaching Faculty") {
      return "/about/teachingEmployees";
    }
    if (option === "Non-teaching Staff") {
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
      return "https://nagalanduniversity.ac.in/English/node/69";
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
    if (option === "IQAC") {
      return "/committees/IQAC";
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
    if (option === "Cyber Cell") {
      return "/committees/cyber";
    }
    if (option === "Entrepreneurship Cell") {
      return "/committees/entrepreneurship";
    }
    if (option === "Innovation and Development Cell") {
      return "/committees/innovationDevelopement";
    }
    if (option === "Literary Club") {
      return "/committees/literary";
    }
    if (option === "Magazine Committee") {
      return "/committees/magazine";
    }
    if (option === "Mentor - Mentee Cell") {
      return "/committees/mentorMentee";
    }
    if (option === "Parents - Teachers Association") {
      return "/committees/parentsTeachers";
    }
    if (option === "Publicity and Media Cell") {
      return "/committees/publicityMedia";
    }
    if (option === "Sports") {
      return "/gallery/sports";
    }
    if (option === "Classroom & Computer Laboratory") {
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
      "Code of Conduct & Dress Code",
    ],
    About: ["About us", "Teaching Faculty", "Non-teaching Staff", "Contact"],
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
      "IQAC",
      "Anti-Ragging Committee",
      "Career Guidance and Placement Cell",
      "Anti-Sexual Harassment Committee",
      "Innovation and Development Cell",
      "Cyber Cell",
      "Publicity and Media Cell",
      "Entrepreneurship Cell",
      "Magazine Committee",
      "Literary Club",
      "Mentor - Mentee Cell",
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
      "Parents - Teachers Association",
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

  const CommitteesRender = () => {
    return (
      <table className="z-50 w-full dark:text-white ml-9">
        <tbody>
          <tr>
            <td>
              <Link to={routedOption("List of Committees and its Members")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  List of Committees and its Members
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Admission Committee")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Admission Committee
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Alumni Association")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Alumni Association{" "}
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Anti-Ragging Committee")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Anti-Ragging Committee
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Anti-Sexual Harassment Committee")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Anti-Sexual Harassment Committee
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Career Guidance and Placement Cell")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Career Guidance and Placement Cell
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Cultural Committee")}>
                {" "}
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Cultural Committee
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Cyber Cell")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Cyber Cell
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Eco Club")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Eco Club
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Entrepreneurship Cell")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Entrepreneurship Cell
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Examination Committee")}>
                {" "}
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Examination Committee
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Grievance Redressal Committee")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Grievance Redressal Committee
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Innovation and Development Cell")}>
                {" "}
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Innovation and Development Cell
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Library Advisory Committee")}>
                {" "}
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Library Advisory Committee
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Literary Club")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Literary Club
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Magazine Committee")}>
                {" "}
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Magazine Committee
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Mentor - Mentee Cell")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Mentor - Mentee Cell
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("NSS")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  NSS
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Parents - Teachers Association")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Parents - Teachers Association
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Publicity and Media Cell")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Publicity and Media Cell
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Red Ribbon Club")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Red Ribbon Club
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Research Committee")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Research Committee
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("Sports Committee")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Sports Committee
                </div>
              </Link>
            </td>
            <td>
              <Link to={routedOption("Women Empowerment Cell")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  Women Empowerment Cell
                </div>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={routedOption("IQAC")}>
                <div className="h-[40px] font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out">
                  IQAC
                </div>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  const NavLinks = () => {
    return (
      <div>
        {currentNav &&
          navItems[currentNav] &&
          navItems[currentNav].map((option) => (
            // for loop display only 12 items
            <Link to={routedOption(option)} className="">
              <div
                key={option}
                className=" z-50 pl-9 h-[40px] w-full font-semibold  dark:text-[#fafafa] text-2xl font-inter hover:cursor-pointer hover:text-blue-500 transition ease-in-out"
              >
                {option}
              </div>
            </Link>
          ))}
      </div>
    );
  };

  const ifHome = (item) => {
    if (item === "Home") {
      return "/";
    }
  };

  return (
    <>
      <div className="min-[200px]:max-[1180px]:hidden desk:block  desk:pt-1.5 bg-sate-400 desk:sticky top-0 z-[9999]">
        <div className="relative flex justify-center">
          <div className="absolute overflow-hidden dark:bg-[#4948481a] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-md rounded-[25px] border-[1px] border-[#666666] ">
            <div className="navStill flex gap-[10px] px-[23px] text-base dark:text-white cursor-pointer border-b-[0.5px] border-[#666666]">
              {Object.keys(navItems).map((nav) => (
                <Link to={ifHome(nav)} className="">
                  <div
                    key={nav}
                    id={nav}
                    onMouseEnter={() => {
                      handleMouseOver(nav);
                    }}
                    onMouseOut={handleMouseOut}
                    className="item h-[50px]   rounded-full hover:rounded-none px-[13px] flex justify-center items-center font-inter object-contain hover:font-bold  "
                  >
                    {nav.replace(/_/g, " ")}
                  </div>
                </Link>
              ))}
            </div>
            <div
              ref={boxRef}
              id="options"
              onMouseEnter={() => handleMouseOver(currentNav)}
              onMouseLeave={handleMouseOut}
              className="z-50 "
            >
              {currentNav === "Committees" ? (
                <CommitteesRender />
              ) : (
                <NavLinks />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
