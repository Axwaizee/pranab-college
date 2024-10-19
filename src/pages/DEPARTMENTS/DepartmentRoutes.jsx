import React from "react";
import { Routes, Route } from "react-router-dom";
import Commerce from "./Commerce";
import Economics from "./Economics";
import Education from "./Education";
import English from "./English";
import History from "./History";
import PoliticalScience from "./PoliticalScience";
import Sociology from "./Sociology";

const DepartmentRoutes = () => {
  return (
    <Routes>
      <Route path="commerce/*" element={<Commerce />} />
      <Route path="economics/*" element={<Economics />} />
      <Route path="education/*" element={<Education />} />
      <Route path="english/*" element={<English />} />
      <Route path="history/*" element={<History />} />
      <Route path="polSci/*" element={<PoliticalScience />} />
      <Route path="sociology/*" element={<Sociology />} />
    </Routes>
  );
};

export default DepartmentRoutes;
