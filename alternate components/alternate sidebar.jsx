// import { useState } from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// // import "react-pro-sidebar/dist/css/styles.css";
// import React from "react";

// const SideBarMobile = () => {
//   const [openSubMenu, setOpenSubMenu] = useState(null);

//   const handleSubMenuToggle = (submenu) => {
//     if (openSubMenu === submenu) {
//       setOpenSubMenu(null); // Close the currently open submenu if clicked again
//     } else {
//       setOpenSubMenu(submenu); // Open the clicked submenu
//     }
//   };

//   return (
//     <div className="desk:hidden flex justify-center h-screen">
//       <div className=" dark:bg-[#4948481a] bg-[#ffffff1a] bg-opacity-50 backdrop-blur-md h-full ">
//         <Sidebar
//           backgroundColor="#ffffff00"
//           className="bg-opacity-50 backdrop-blur-md overflow-auto h-full"
//         >
//           <Menu>
//             <SubMenu label="Home" opened={openSubMenu === "Home"}>
//               <MenuItem> Mission & Vision </MenuItem>
//               <MenuItem> Principal's Desk </MenuItem>
//               <MenuItem>Governing Body</MenuItem>
//               <MenuItem>Administration</MenuItem>
//               <MenuItem>Procedure and Policies</MenuItem>
//               <MenuItem>Association</MenuItem>
//               <MenuItem>Courses Offered</MenuItem>
//               <MenuItem>Code of Conduct</MenuItem>
//             </SubMenu>
//             <SubMenu
//               label="Online Admissions"
//               opened={openSubMenu === "Online Admissions"}
//             >
//               <MenuItem> New Admissions </MenuItem>
//               <MenuItem> Fee Payment for New Students </MenuItem>
//               <MenuItem>Fee Payment for Current Students</MenuItem>
//               <MenuItem>Fee Payment for Bus Students</MenuItem>
//               <MenuItem>View Application Status</MenuItem>
//               <MenuItem>Admission Procedure</MenuItem>
//               <MenuItem>Fee Structure</MenuItem>
//             </SubMenu>
//             <SubMenu
//               label="Student Services"
//               opened={openSubMenu === "Student Services"}
//             >
//               <MenuItem> Pranab College Students Union (PCSU) </MenuItem>
//               <MenuItem> Scholarship & Freeship </MenuItem>
//               <MenuItem> Bus Service </MenuItem>
//               <MenuItem> Grievance Forum </MenuItem>
//             </SubMenu>
//             <SubMenu label="NAAC" opened={openSubMenu === "NAAC"}>
//               <MenuItem> SSR </MenuItem>
//               <MenuItem> IQAC Meeting and ATR </MenuItem>
//               <MenuItem>Student Satisfaction Survey</MenuItem>
//               <MenuItem>Course Outcomes</MenuItem>
//               <MenuItem>NAAC Status</MenuItem>
//               <MenuItem>Feedback</MenuItem>
//               <MenuItem>Best Practices</MenuItem>
//               <MenuItem>Academic Audit</MenuItem>
//             </SubMenu>
//             <SubMenu label="Calender" opened={openSubMenu === "Calender"}>
//               <MenuItem> Academic Calender </MenuItem>
//               <MenuItem> Holiday List </MenuItem>
//             </SubMenu>
//             <SubMenu label="Resources" opened={openSubMenu === "Resources"}>
//               <MenuItem> Academic Record </MenuItem>
//               <MenuItem> Magazines </MenuItem>
//               <MenuItem>Journal</MenuItem>
//               <MenuItem>Prospectus</MenuItem>
//               <MenuItem>Results</MenuItem>
//               <MenuItem>Syllabus</MenuItem>
//               <MenuItem>Question Bank</MenuItem>
//               <MenuItem>ILMS</MenuItem>
//             </SubMenu>
//             <SubMenu label="Committees" opened={openSubMenu === "Committees"}>
//               <MenuItem> List of Committees and its Members </MenuItem>
//               <MenuItem> NSS </MenuItem>
//               <MenuItem>Anti-Ragging Committee</MenuItem>
//               <MenuItem>Career Guidance and Placement Cell</MenuItem>
//               <MenuItem>Anti-Sexual Harassment Committee</MenuItem>
//               <MenuItem>Sports Committee</MenuItem>
//               <MenuItem>Eco Club</MenuItem>
//               <MenuItem>Library Advisory Committee</MenuItem>
//               <MenuItem>Red Ribbon Club</MenuItem>
//               <MenuItem>Women Empowerment Cell</MenuItem>
//               <MenuItem>Admission Committee</MenuItem>
//               <MenuItem>Examination Committee</MenuItem>
//               <MenuItem>Research Committee</MenuItem>
//               <MenuItem>Cultural Committee</MenuItem>
//               <MenuItem>Alumni Association</MenuItem>
//               <MenuItem>Grievance Redressal Committee</MenuItem>
//             </SubMenu>
//             <SubMenu label="Gallery" opened={openSubMenu === "Gallery"}>
//               <MenuItem> Sports </MenuItem>
//               <MenuItem> Classroom & Computer Laboratory </MenuItem>
//               <MenuItem>Health Seminar</MenuItem>
//               <MenuItem>Cultural Day</MenuItem>
//               <MenuItem>NSS & RRC</MenuItem>
//               <MenuItem>Study Tours</MenuItem>
//               <MenuItem>Charity Drive</MenuItem>
//               <MenuItem>Cleanliness Drive</MenuItem>
//             </SubMenu>
//             <SubMenu label="About" opened={openSubMenu === "About"}>
//               <MenuItem> About us </MenuItem>
//               <MenuItem> Teaching Employees </MenuItem>
//               <MenuItem> Non-teaching Employees </MenuItem>
//               <MenuItem> Contact </MenuItem>
//             </SubMenu>
//           </Menu>
//         </Sidebar>
//       </div>
//     </div>
//   );
// };

// export default SideBarMobile;
