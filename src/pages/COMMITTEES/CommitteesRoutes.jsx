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
    </Routes>
  );
};

export default CommitteesRoutes;
