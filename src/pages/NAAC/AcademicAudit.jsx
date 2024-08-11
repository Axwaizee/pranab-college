import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const links = {
  pp: "https://drive.google.com/file/d/1wXr9vnT5yzkG_iDtVi5fQahcXznXxbbq/preview",
  qai: "https://drive.google.com/file/d/1o_lNfq4YrxOV0ZVkhizX4MttodQ1iYbX/preview",
  aar: "https://drive.google.com/file/d/1RBrQdh3bu9SQbea1ZG1Pyfs3YaI-V9jm/preview",
  iear: "https://drive.google.com/file/d/17IcfsZN81gemoBPRHgt_0GwvH6Zpla_a/preview",
  reservationPolicy:
    "https://drive.google.com/file/d/1GVk1oZWhQpiS99Diizu76yUdXlra4h13/preview",
  pdpma:
    "https://drive.google.com/file/d/1yQniA7vXmYk2LjN180i84X8LWupIw6cu/preview",
  recruitmentPolicy:
    "https://drive.google.com/file/d/1GR_UNjjtMmKZvb_rn28df-aYvLvDg3Ka/preview",
  id: "https://drive.google.com/file/d/1isH0WqWdaXT6CKJarYl5jbG4exD-kR3n/preview",
  organogram:
    "https://drive.google.com/file/d/1WKkH8uINBHTvK4NTE9PupL3zEGBqyLQ5/preview",
};

const pdfContent = (link) => {
  return (
    <>
      <div className="flex justify-center py-5">
        <iframe
          className="desk:w-1/2 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:h-[600px] h-[1000px]"
          src={link}
          type="application/pdf"
        />
      </div>
    </>
  );
};

const organogram = () => {
  return (
    <>
      <div className="flex justify-center py-5">
        <iframe
          className="desk:w-1/2 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:h-[270px] desk:h-[600px]"
          src={links.organogram}
        />
      </div>
    </>
  );
};

const AcademicAudit = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Academic Audit</p>
      </div>
      <div className="flex justify-center p-10">
        <div className="grid grid-cols-4 min-[200px]:max-[630px]:grid-cols-1 min-[631px]:max-[900px]:grid-cols-2 min-[901px]:max-[1180px]:grid-cols-3 gap-x-5 gap-y-5">
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Perspective Plan</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/perspectivePlan"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Quality Assurance Initiatives</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/qualityAssuranceInitiatives"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Academic Audit Report</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/academicAuditReport"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Internal & External Audit Report</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/internalExternalAuditReport"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Reservation Policy</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/reservationPolicy"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-8 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">
                Policy on Decentralisation Participatory Management &
                Accountability
              </p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/PDPMA"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Recruitment Policy</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/recruitmentPolicy"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Institutional distinctiveness</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/institutionalDistinctiveness"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" h-[200px] w-[250px] px-6 pt-14 pb-10 text-center
            bg-slate-50 rounded-3xl flex flex-col justify-between"
            >
              <p className="">Organogram</p>
              <div className="flex justify-center text-white rounded-full ">
                <Link
                  className="px-8 py-2 text-black transition-all duration-300 border border-black rounded-full hover:bg-gray-950 hover:text-white"
                  to="/NAAC/academicAudit/Organogram"
                  onClick={() => {
                    alert(
                      "Scroll to the bottom of the page to view the document!"
                    );
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="perspectivePlan" element={pdfContent(links.pp)} />
        <Route
          path="qualityAssuranceInitiatives"
          element={pdfContent(links.qai)}
        />
        <Route path="academicAuditReport" element={pdfContent(links.aar)} />
        <Route
          path="internalExternalAuditReport"
          element={pdfContent(links.iear)}
        />
        <Route
          path="reservationPolicy"
          element={pdfContent(links.reservationPolicy)}
        />
        <Route path="PDPMA" element={pdfContent(links.pdpma)} />
        <Route
          path="recruitmentPolicy"
          element={pdfContent(links.recruitmentPolicy)}
        />
        <Route
          path="institutionalDistinctiveness"
          element={pdfContent(links.id)}
        />
        <Route path="Organogram" element={organogram()} />
      </Routes>
    </>
  );
};

export default AcademicAudit;
