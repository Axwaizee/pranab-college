import React from "react";
import MissionVision from "./MissionVision";
import PrincipalsDesk from "./PrincipalsDesk";
import GoverningBody from "./GoverningBody";
import Administration from "./Administration";
import ProcedurePolicies from "./ProcedurePolicies";
import Association from "./Association";
import CoursesOffered from "./CoursesOffered";
import CodeofConduct from "./CodeofConduct";

import { Route, Routes } from "react-router-dom";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="missionVision" element={<MissionVision />} />
      <Route path="principalsDesk" element={<PrincipalsDesk />} />
      <Route path="governingBody" element={<GoverningBody />} />
      <Route path="administration" element={<Administration />} />
      <Route path="procedureNpolicies" element={<ProcedurePolicies />} />
      <Route path="association" element={<Association />} />
      <Route path="coursesOffered" element={<CoursesOffered />} />
      <Route path="codeOfConduct" element={<CodeofConduct />} />
    </Routes>
  );
};

export default HomeRoutes;
