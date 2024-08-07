import React from "react";

import HolidayList from "./HolidayList";
import AcademicCalender from "./AcademicCalender";
import { Routes, Route } from "react-router-dom";

const CalenderRoutes = () => {
  return (
    <Routes>
      <Route path="academicCalender/*" element={<AcademicCalender />} />
      <Route path="holidayList/*" element={<HolidayList />} />
    </Routes>
  );
};

export default CalenderRoutes;
