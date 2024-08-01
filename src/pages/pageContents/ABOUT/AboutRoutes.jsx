import React from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import TeachingEmployees from "./TeachingEmployees";
import NonTeachingEmployees from "./NonTeachingEmployees";

import { Route, Routes } from "react-router-dom";

const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="teachingEmployees/*" element={<TeachingEmployees />} />
      <Route path="nonTeachingEmployees/*" element={<NonTeachingEmployees />} />
    </Routes>
  );
};

export default AboutRoutes;
