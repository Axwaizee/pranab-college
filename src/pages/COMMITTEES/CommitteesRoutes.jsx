import React from "react";
import { Routes, Route } from "react-router-dom";
import CommitteeList from "./CommitteeList";
import NSS from "./NSS";
import AntiRagging from "./AntiRagging";
import CareerGuidance from "./CareerGuidance";
import AntiSexualHarassment from "./AntiSexualHarassment";
import Sports from "./Sports";
import Eco from "./Eco";
import LibraryAdvisory from "./LibraryAdvisory";
import RedRibbon from "./RedRibbon";
import WomenEmpowerment from "./WomenEmpowerment";
import Admission from "./Admission";
import Examination from "./Examination";
import Research from "./Research";
import Cultural from "./Cultural";
import AlumniAssociation from "./AlumniAssociation";
import GrievanceRedressal from "./GrievanceRedressal";
import Policy from "./GrievanceRedressal/Policy";
import MeetingMinutes from "./GrievanceRedressal/MeetingMinutes";
import Cyber from "./Cyber";
import Entrepreneurship from "./Entrepreneurship";
import InnovationDevelopement from "./InnovationDevelopement";
import Literary from "./Literary";
import Magazine from "./Magazine";
import MentorMentee from "./MentorMentee";
import ParentsTeachers from "./ParentsTeachers";
import PublicityMedia from "./PublicityMedia";
import Error404 from "../Error404";

const CommitteesRoutes = () => {
  return (
    <Routes>
      <Route path="list/*" element={<CommitteeList />} />
      <Route path="NSS/*" element={<NSS />} />
      <Route path="antiRagging/*" element={<AntiRagging />} />
      <Route path="careerGuidancePlacement/*" element={<CareerGuidance />} />
      <Route path="antiSexualHarassment/*" element={<AntiSexualHarassment />} />
      <Route path="sports/*" element={<Sports />} />
      <Route path="eco/*" element={<Eco />} />
      <Route path="libraryAdvisory/*" element={<LibraryAdvisory />} />
      <Route path="redRibbon/*" element={<RedRibbon />} />
      <Route path="womenEmpowerment/*" element={<WomenEmpowerment />} />
      <Route path="admission/*" element={<Admission />} />
      <Route path="examination/*" element={<Examination />} />
      <Route path="research/*" element={<Research />} />
      <Route path="cultural/*" element={<Cultural />} />
      <Route path="alumniAssociation/*" element={<AlumniAssociation />} />
      <Route path="grievanceRedressal/*" element={<GrievanceRedressal />} />

      <Route path="grievanceRedressal/policy" element={<Policy />} />
      <Route
        path="grievanceRedressal/meetingMinutes/*"
        element={<MeetingMinutes />}
      />
      <Route path="cyber/*" element={<Cyber />} />
      <Route path="entrepreneurship/*" element={<Entrepreneurship />} />
      <Route
        path="innovationDevelopement/*"
        element={<InnovationDevelopement />}
      />
      <Route path="literary/*" element={<Literary />} />
      <Route path="magazine/*" element={<Magazine />} />
      <Route path="mentorMentee/*" element={<MentorMentee />} />
      <Route path="parentsTeachers/*" element={<ParentsTeachers />} />
      <Route path="publicityMedia/*" element={<PublicityMedia />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default CommitteesRoutes;
