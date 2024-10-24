import React from "react";
import { Route, Routes } from "react-router-dom";
import Sports from "./Sports";
import Error404 from "../Error404";
import CharityDrive from "./CharityDrive";
import ClassroomComputer from "./ClassroomComputer";
import CleanlinessDrive from "./CleanlinessDrive";
import CulturalDay from "./CulturalDay";
import FreshersSocial from "./FreshersSocial";
import HealthSeminar from "./HealthSeminar";
import NssRrc from "./NssRrc";
import StudyTours from "./StudyTours";

const GalleryRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="sports/*" element={<Sports />} />
        <Route path="charityDrive/*" element={<CharityDrive />} />
        <Route path="classroom/*" element={<ClassroomComputer />} />
        <Route path="cleanlinessDrive/*" element={<CleanlinessDrive />} />
        <Route path="culturalDay/*" element={<CulturalDay />} />
        <Route path="freshersSocial/*" element={<FreshersSocial />} />
        <Route path="healthSeminar/*" element={<HealthSeminar />} />
        <Route path="NSSandRRC/*" element={<NssRrc />} />
        <Route path="studyTours/*" element={<StudyTours />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default GalleryRoutes;
