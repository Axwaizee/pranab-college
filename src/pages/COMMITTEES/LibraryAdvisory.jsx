import React from "react";

const LibraryAdvisory = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Library Advisory Committee</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="w-full desk:text-lg desk:w-4/5">
          <div className="text-justify dark:text-white">
            <p className="pb-3 text-3xl text-center ">
              <b> POLICY GUIDELINES OF LIBRARY ADVISORY COMMITTEE</b>
            </p>
            <p className="pb-3">
              The College appoints a library advisory committee who provides
              guidance and recommendations to the library administration on
              matters related to the library and its services. The library
              advisory committee of the College was formed in the year 2015
              under the Chairmanship of Principal, Pranab College, Dimapur.
            </p>
            <p className="pb-3">
              <b>Aims:</b> This committee plays an advisory and guiding role
              regarding the library on Policy, Planning and Programme (PPP) in
              the support of teaching learning process.
            </p>
            <p>
              <b className="">Objectives</b>
            </p>
            <ul className="list-disc list-inside">
              <li className="pb-2">
                Organize library orientation programme to all the newly inducted
                students.
              </li>
              <li className="pb-2">
                Preparation of library budget of ₹10000/- per month for purchase
                of books.
              </li>
              <li className="pb-2">
                Requisition and procurement of books department wise
              </li>
              <li className="pb-2">
                Suggestions of new books, journals and others etc. from teachers
                as well as students.
              </li>
              <li className="pb-2">
                Provide Internet, Wifi, Photocopy and Printing facilities.{" "}
              </li>
              <li className="pb-2">
                Hands on experience for access of N-LIST, NDLI , WEBOPAC/ OPAC
                and other e-resources etc. with the computers available in the
                library and smartphones.
              </li>
              <li className="pb-2">
                Advises the library regarding library services, especially
                innovation, for the college community.
              </li>
            </ul>
            <br />

            <p>
              <b>
                The following are the members of library advisory committee:
              </b>
            </p>
            <ul className="list-decimal list-inside">
              <li className="pb-2">Librarian - Convenor</li>
              <li className="pb-2">
                Principal & Vice-Principal - Ex Officio members
              </li>
              <li className="pb-2">Head of Departments of all departments.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryAdvisory;
