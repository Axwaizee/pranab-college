import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const MeetingMinutes = () => {
  const D05_03_22 = () => {
    return (
      <div className="flex justify-center ">
        <iframe
          className="w-full desk:w-2/3 h-[900px]"
          src="https://drive.google.com/file/d/1fn9M7apDRZp1vQFC6uFEEm0W9V4DrU9M/preview"
          type="application/pdf"
        />
      </div>
    );
  };
  const D18_02_22 = () => {
    return (
      <div className="flex justify-center ">
        <iframe
          className="w-full desk:w-2/3 h-[900px]"
          src="https://drive.google.com/file/d/1233G7J3P1aOd4fOUVgfWY1HX8GyqQAhf/preview"
          type="application/pdf"
        />
      </div>
    );
  };
  const D02_02_21 = () => {
    return (
      <div className="flex justify-center ">
        <iframe
          className="w-full desk:w-2/3 h-[900px]"
          src="https://drive.google.com/file/d/1XQy1ni3qh8SH0qFNXeKvOL0FEH7AU71h/preview"
          type="application/pdf"
        />
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center w-full p-5 desk:p-10">
        <div className="flex flex-col w-full gap-3 desk:w-1/2">
          <Link
            to="/committees/antiRagging/meetingMinutes/D05_03_22"
            className="py-2 text-sm text-center border hover:bg-[#0052C8] border-slate-300 hover:border-black dark:text-white dark:hover:text-black rounded-xl"
          >
            Meeting minutes of meeting held on 05-03-2022
          </Link>
          <Link
            to="/committees/antiRagging/meetingMinutes/D18_02_22"
            className="py-2 text-sm text-center border hover:bg-[#0052C8] border-slate-300 hover:border-black dark:text-white dark:hover:text-black rounded-xl"
          >
            Meeting minutes of meeting held on 18-02-2022
          </Link>
          <Link
            to="/committees/antiRagging/meetingMinutes/D02_02_21"
            className="py-2 text-sm text-center border hover:bg-[#0052C8] border-slate-300 hover:border-black dark:text-white dark:hover:text-black rounded-xl"
          >
            Meeting minutes of meeting held on 02-02-2021
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="D05_03_22" element={<D05_03_22 />} />
          <Route path="D18_02_22" element={<D18_02_22 />} />
          <Route path="D02_02_21" element={<D02_02_21 />} />
        </Routes>
      </div>
    </>
  );
};

const Policies = () => {
  return (
    <>
      <div className="p-5 dark:text-white desk:p-10">
        <div className="pb-2 ">
          <p>
            The Women Empowerment, Anti-Ragging and Sexual Harassment Cell of
            Pranabananda Women’s College was set up as per the guidelines of UGC
            in the year 2016 under the leadership of the then Principal, Ms. Uma
            Bhowmick and Mrs. Sanjukta Bhattarcharjee as the Convenor. At
            present the cell is headed by the Principal Dr. Santosh Kumar and
            Mrs. Gracia K Jimo as a Convenor. The cell was established with an
            aim for promoting Gender Equality and enhance understanding of
            issues relating to women and to make the college campus a safe place
            for the students.
          </p>
        </div>
        <div className="pb-2 ">
          <p className="pb-1 text-lg font-semibold ">OBJECTIVES OF THE CELL</p>
          <ol className="list-decimal list-inside ">
            <li>
              To create awareness on various issues and problems of women and in
              particular regarding gender discrimination.
            </li>
            <li>To prevent violence and discrimination against women.</li>
            <li>To highlight the importance of health and hygiene.</li>
            <li>
              To conduct practical activities for the students to develop
              self-confidence.
            </li>
            <li>
              To organize seminars, workshops relating to women safety and
              overall personality development.
            </li>
            <li>
              To prevent sexual harassment, ragging, abuse, exploitation, or any
              kind of grievances of the students.
            </li>
            <li>To commemorate the occasion of International Women’s Day.</li>
          </ol>
        </div>
        <div className="pb-2">
          <p className="pb-1 text-lg font-semibold ">ROLES AND FUNCTIONS</p>
          <ol className="list-decimal list-inside ">
            <li>
              The cell organizes and participates in seminars, workshops and
              addresses women issues and problems in the college.
            </li>
            <li>
              It also strives to provide platforms for women to share their
              experiences and views with regard to their status and challenges
              in the society and suggest ways to improve and empower themselves.
            </li>
            <li>
              Aiming at the intellectual and social upliftment of the female
              students, the Cell annually felicitates women who have achieved
              excellence in their fields and who have an impact in the society.
            </li>
            <li>
              In order to encourage and boost the confidence of the students,
              the Cell provides platforms for physical activity and self-
              defense training.
            </li>
          </ol>
        </div>
        <div className="pb-7">
          <p className="pb-1 text-lg font-semibold ">
            Members of the Anti-Ragging Cell includes:-
          </p>
          <ol className="list-decimal list-inside ">
            <li>
              Mrs. Gracia K. Jimo, Assistant Professor (Education), Convenor
            </li>
            <li>Ms. T. Hanneng, Asst. Prof. (Political Science) , Member</li>
          </ol>
        </div>
        <div className="flex justify-center ">
          <iframe
            className="w-full desk:w-2/3 h-[900px]"
            src="https://drive.google.com/file/d/11p470Rw8cNSqtCCET203H1jZ4VfAmU0V/preview"
            type="application/pdf"
          />
        </div>
      </div>
    </>
  );
};

const AntiRagging = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Anti-Ragging Committee</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 ">
        <div className="flex flex-col items-center w-full desk:w-1/2">
          <div className="flex flex-col w-full gap-3 mb-10 desk:w-1/2 ">
            <Link
              to="/committees/antiRagging/meetingMinutes"
              className="w-full py-3 text-sm text-center border rounded-xl dark:text-white border-zinc-400"
            >
              Meeting Minutes
            </Link>
            <Link
              to="/committees/antiRagging/policies"
              className="w-full py-3 text-sm text-center border rounded-xl dark:text-white border-zinc-400"
            >
              Policies
            </Link>
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-center">
        <div className="w-full desk:w-3/4">
          <Routes>
            <Route path="meetingMinutes/*" element={<MeetingMinutes />}></Route>
            <Route path="policies" element={<Policies />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AntiRagging;
