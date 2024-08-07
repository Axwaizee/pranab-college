import React from "react";
import { Route, Routes } from "react-router-dom";
import PCSU from "./PCSU";
import GrievanceForum from "./GrievanceForum";
import BusService from "./BusService";
import ScholarshipFreeship from "./ScholarshipFreeship";

const SSRoutes = () => {
  return (
    <Routes>
      <Route path="PCSU" element={<PCSU />} />
      <Route path="grievanceFourm" element={<GrievanceForum />} />
      <Route path="busService" element={<BusService />} />
      <Route path="scholarshipFreeship" element={<ScholarshipFreeship />} />
    </Routes>
  );
};

export default SSRoutes;
