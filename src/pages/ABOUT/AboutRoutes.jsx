import React from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import TeachingEmployees from "./TeachingEmployees";
import NonTeachingEmployees from "./NonTeachingEmployees";

import { Route, Routes } from "react-router-dom";
import Error404 from "../Error404";

const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="aboutTheSponsoringSociety" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="teachingEmployees/*" element={<TeachingEmployees />} />
      <Route path="nonTeachingEmployees/*" element={<NonTeachingEmployees />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AboutRoutes;
