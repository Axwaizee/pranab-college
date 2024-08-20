import React from "react";
import { Route, Routes } from "react-router-dom";
import Sports from "./Sports";
import Error404 from "../Error404";

const GalleryRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="sports/*" element={<Sports />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default GalleryRoutes;
