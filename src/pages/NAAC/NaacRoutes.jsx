import React from "react";
import SSR from "./SSR";
import AcademicAudit from "./AcademicAudit";
import BestPractices from "./BestPractices";
import CourseOutcomes from "./CourseOutcomes";
import Feedback from "./Feedback";
import IqacMeetingandAtr from "./IqacMeetingandAtr";
import NaacStatus from "./NaacStatus";
import StudentSatisfactionSurvey from "./StudentSatisfactionSurvey";

import { Route, Routes } from "react-router-dom";
import Error404 from "../Error404";

const NaacRoutes = () => {
  return (
    <Routes>
      <Route path="SSR" element={<SSR />} />
      <Route path="academicAudit/*" element={<AcademicAudit />} />
      <Route path="bestPractices" element={<BestPractices />} />
      <Route path="courseOutcomes" element={<CourseOutcomes />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="iqacAtr/*" element={<IqacMeetingandAtr />} />
      <Route path="naacStatus/*" element={<NaacStatus />} />
      <Route
        path="StudentSatisfactionSurvey"
        element={<StudentSatisfactionSurvey />}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default NaacRoutes;
