import React from "react";
import { Route, Routes } from "react-router-dom";
import Syllabus from "./Syllabus";
import QuestionBank from "./QuestionBank";
import ILMS from "./ILMS";

const LibraryRoutes = () => {
  return (
    <Routes>
      <Route path="syllabus/*" element={<Syllabus />} />
      <Route path="questionBank/*" element={<QuestionBank />} />
      <Route path="ILMS/*" element={<ILMS />} />
    </Routes>
  );
};

export default LibraryRoutes;
