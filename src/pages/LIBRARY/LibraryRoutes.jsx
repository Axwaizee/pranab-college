import React from "react";
import { Route, Routes } from "react-router-dom";
import Syllabus from "./Syllabus";
import QuestionBank from "./QuestionBank";
import ILMS from "./ILMS";
import Error404 from "../Error404";

const LibraryRoutes = () => {
  return (
    <Routes>
      <Route path="syllabus/*" element={<Syllabus />} />
      <Route path="questionBank/*" element={<QuestionBank />} />
      <Route path="ILMS/*" element={<ILMS />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default LibraryRoutes;
