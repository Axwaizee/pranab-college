import React from "react";

const PCSU = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Pranab College Students Union</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="w-full desk:w-3/4 dark:text-white">
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
                    #
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    NAME
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    CLASS
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    DESIGNATION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-lg ">1</td>
                  <td className="p-3 text-lg">Loangam Konyak</td>
                  <td className="p-3 text-lg">B.A. 5th Sem</td>
                  <td className="p-3 text-lg">President</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">2</td>
                  <td className="p-3 text-lg">Veronica K Yeptho</td>
                  <td className="p-3 text-lg">B.A. 3rd Sem</td>
                  <td className="p-3 text-lg">General Secretary</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">3</td>
                  <td className="p-3 text-lg">Priyanka Dey</td>
                  <td className="p-3 text-lg">B.A. 5th Sem</td>
                  <td className="p-3 text-lg">Cultural Secretary</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">4</td>
                  <td className="p-3 text-lg">Ambika Kashyap</td>
                  <td className="p-3 text-lg">B.Com 3rd Sem</td>
                  <td className="p-3 text-lg">Finance Secretary</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">5</td>
                  <td className="p-3 text-lg">Jenny Konyak</td>
                  <td className="p-3 text-lg">B.A. 5th Sem</td>
                  <td className="p-3 text-lg">Sports Secretary</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">6</td>
                  <td className="p-3 text-lg">Kedarai Chewang</td>
                  <td className="p-3 text-lg">B.A. 3rd Sem</td>
                  <td className="p-3 text-lg">Information Secretary</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">7</td>
                  <td className="p-3 text-lg">Kiboka</td>
                  <td className="p-3 text-lg">B.A. 1st Sem </td>
                  <td className="p-3 text-lg">Asst. General Secretary</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">8</td>
                  <td className="p-3 text-lg">Nyanbemo Ngullie</td>
                  <td className="p-3 text-lg">B.A. 1st Sem </td>
                  <td className="p-3 text-lg">Asst. Sports Secretary</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">9</td>
                  <td className="p-3 text-lg">Itoka Tuccu</td>
                  <td className="p-3 text-lg">B.A. 1st Sem </td>
                  <td className="p-3 text-lg">Asst. Cultural Secretary</td>
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
