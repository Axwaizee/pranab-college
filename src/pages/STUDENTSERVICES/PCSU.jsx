import React from "react";

const PCSU = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Pranab College Students Union</p>
      </div>
      <div className="flex justify-center p-10">
        <div className="w-1/2 dark:text-white min-[200px]:max-[1180px]:w-full">
          <p className="text-justify ">
            The Pranab College Students Union formarly known as (Pranabananda
            Women’s College Students’ Union (PWCSU)) was established in the year
            2014 with the aim of promoting the welfare, rights and interests of
            the students of the college. It works in close cooperation with the
            college management authority, teaching staff and non-teaching staff
            members for providing an ideal social environment for the welfare
            and all–round development of students of the college. The union
            provides a platform for students of the college to come together and
            air their concerns and grievances on various issues. At the same
            time, the union also from time to time organises social, cultural
            and other extra co-curricular activities such as sports meets,
            fresher’s social meet, cultural festivals, awareness programmes
            etc., in the college. The union is headed by the Principal of the
            college as its President.
          </p>
          <div className="mt-10 overflow-auto shadow rounded-2xl">
            <table className="w-full ">
              <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    SL. NO.
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    NAME
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    CLASS
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    DESIGNATION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-sm ">1</td>
                  <td className="p-3 text-sm ">Ms. Alovi S.Chisi </td>
                  <td className="p-3 text-sm ">B.Com 6th Sem </td>
                  <td className="p-3 text-sm ">General Secretary </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">2</td>
                  <td className="p-3 text-sm ">Ms. Livino S. Zhimo </td>
                  <td className="p-3 text-sm ">B.A. 6th Sem </td>
                  <td className="p-3 text-sm ">General Secretary </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm ">3</td>
                  <td className="p-3 text-sm ">Ms. Rituparna Das</td>
                  <td className="p-3 text-sm ">B.Com 2nd Sem </td>
                  <td className="p-3 text-sm ">Asst. General Secretary </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">4</td>
                  <td className="p-3 text-sm ">Ms. Ruokuokhrienuo Rio</td>
                  <td className="p-3 text-sm ">B.Com 4th Sem </td>
                  <td className="p-3 text-sm ">Cultural Secretary </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm ">5</td>
                  <td className="p-3 text-sm ">Ms. Tolivi Yeptho </td>
                  <td className="p-3 text-sm ">B.A. 2nd Sem </td>
                  <td className="p-3 text-sm ">Asst. Cultural Secretary</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">6</td>
                  <td className="p-3 text-sm ">Keyicudaule Iranggau </td>
                  <td className="p-3 text-sm ">B.A. 4th Sem </td>
                  <td className="p-3 text-sm ">Finance Secretary</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm ">7</td>
                  <td className="p-3 text-sm ">Mercy A.Konyak </td>
                  <td className="p-3 text-sm ">B.A. 4th Sem </td>
                  <td className="p-3 text-sm ">Sports Secretary</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCSU;
