import React from "react";

import HolidayList from "./HolidayList";
import AcademicCalender from "./AcademicCalender";
import { Routes, Route } from "react-router-dom";
import Error404 from "../Error404";

const CalenderRoutes = () => {
  return (
    <Routes>
      <Route path="academicCalender/*" element={<AcademicCalender />} />
      <Route path="holidayList/*" element={<HolidayList />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default CalenderRoutes;
