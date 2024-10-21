import React from "react";
import { Routes, Route } from "react-router-dom";
import AdmissionProcedure from "./AdmissionProcedure";
import FeesStructure from "./FeesStructure";

const OnlineAdmissionRoutes = () => {
  return (
    <Routes>
      <Route path="admissionProcedure/*" element={<AdmissionProcedure />} />
      <Route path="feeStructure/*" element={<FeesStructure />} />
    </Routes>
  );
};

export default OnlineAdmissionRoutes;
