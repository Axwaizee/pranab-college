import React from "react";
import { Routes, Route } from "react-router-dom";
import AdmissionProcedure from "./AdmissionProcedure";
import FeesStructure from "./FeesStructure";
import OnlineAdmissions from "./OnlineAdmissions";

const OnlineAdmissionRoutes = () => {
  return (
    <Routes>
      <Route path="onlineAdmissions/*" element={<OnlineAdmissions />} />
      <Route path="admissionProcedure/*" element={<AdmissionProcedure />} />
      <Route path="feeStructure/*" element={<FeesStructure />} />
    </Routes>
  );
};

export default OnlineAdmissionRoutes;
