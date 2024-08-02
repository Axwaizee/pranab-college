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
          <div className="p-10">
            <table className="w-full table-auto ">
              <thead>
                <tr>
                  <th>SL. NO.</th>
                  <th>NAME</th>
                  <th>CLASS</th>
                  <th>DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center ">1</td>
                  <td>Ms. Alovi S.Chisi </td>
                  <td>B.Com 6th Sem </td>
                  <td>General Secretary </td>
                </tr>
                <tr>
                  <td className="text-center ">2</td>
                  <td>Ms. Livino S. Zhimo </td>
                  <td>B.A. 6th Sem </td>
                  <td>General Secretary </td>
                </tr>
                <tr>
                  <td className="text-center ">3</td>
                  <td>Ms. Rituparna Das</td>
                  <td>B.Com 2nd Sem </td>
                  <td>Asst. General Secretary </td>
                </tr>
                <tr>
                  <td className="text-center ">4</td>
                  <td>Ms. Ruokuokhrienuo Rio</td>
                  <td>B.Com 4th Sem </td>
                  <td>Cultural Secretary </td>
                </tr>
                <tr>
                  <td className="text-center ">5</td>
                  <td>Ms. Tolivi Yeptho </td>
                  <td>B.A. 2nd Sem </td>
                  <td>Asst. Cultural Secretary</td>
                </tr>
                <tr>
                  <td className="text-center ">6</td>
                  <td>Keyicudaule Iranggau </td>
                  <td>B.A. 4th Sem </td>
                  <td>Finance Secretary</td>
                </tr>
                <tr>
                  <td className="text-center ">7</td>
                  <td>Mercy A.Konyak </td>
                  <td>B.A. 4th Sem </td>
                  <td>Sports Secretary</td>
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
