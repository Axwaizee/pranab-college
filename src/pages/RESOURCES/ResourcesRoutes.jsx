import React from "react";
import { Routes, Route } from "react-router-dom";
import AcademicRecord from "./AcademicRecord";
import Magazines from "./Magazines";
import Journal from "./Journal";
import Prospectus from "./Prospectus";
import Results from "./Results";
import Error404 from "../Error404";

const ResourcesRoutes = () => {
  return (
    <Routes>
      <Route path="academicRecord/*" element={<AcademicRecord />} />
      <Route path="magazines/*" element={<Magazines />} />
      <Route path="journal/*" element={<Journal />} />
      <Route path="prospectus/*" element={<Prospectus />} />
      <Route path="results/*" element={<Results />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default ResourcesRoutes;
