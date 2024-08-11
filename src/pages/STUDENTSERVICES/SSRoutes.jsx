import React from "react";
import { Route, Routes } from "react-router-dom";
import PCSU from "./PCSU";
import GrievanceForum from "./GrievanceForum";
import BusService from "./BusService";
import ScholarshipFreeship from "./ScholarshipFreeship";
import Error404 from "../Error404";

const SSRoutes = () => {
  return (
    <Routes>
      <Route path="PCSU" element={<PCSU />} />
      <Route path="grievanceFourm" element={<GrievanceForum />} />
      <Route path="busService" element={<BusService />} />
      <Route path="scholarshipFreeship" element={<ScholarshipFreeship />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default SSRoutes;
