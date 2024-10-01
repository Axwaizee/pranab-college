import React from "react";

const GoverningBody = () => {
  return (
    <>
      <div className="flex text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Governing Body Members</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex justify-center w-full desk:w-2/3 dark:text-white">
          <div className="w-full overflow-auto shadow rounded-2xl">
            <table className="w-full dark:text-white ">
              <tbody className="text-center ">
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">
                    {" "}
                    Swami Dhyaneshanandaji Maharaj
                  </td>
                  <td className="p-3 text-lg ">President, Pranab College </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">
                    {" "}
                    Swami Gurupadanandji Maharaj
                  </td>
                  <td className="p-3 text-lg ">Secretary, Pranab College </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">
                    {" "}
                    Swami Chinmayanandaji Maharaj
                  </td>
                  <td className="p-3 text-lg ">
                    Joint Secretary, Pranab College{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg "> Dr. Santosh Kumar</td>
                  <td className="p-3 text-lg ">Principal, Pranab College </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg "> Ms. C. Narola Ao</td>
                  <td className="p-3 text-lg ">
                    Vice Principal, Pranab College{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg "> Prof. C. S. Maiti</td>
                  <td className="p-3 text-lg ">
                    SASRD (Univ. Representative){" "}
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg "> Mr. Saurav Dowarah</td>
                  <td className="p-3 text-lg ">
                    Teacher Representative and Co-Ordinator IQAC NAAC{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg "> Shri Monoj Bhattacharjee</td>
                  <td className="p-3 text-lg ">
                    Principal, P.V. H.S.S, Dimapur{" "}
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg "> Shri P. B. Paul</td>
                  <td className="p-3 text-lg ">
                    Advocate, Guwahati High Court, Kohima Bench{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg "> Dr. S.K. Dey</td>
                  <td className="p-3 text-lg ">Physician </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg "> Shri. Dulal Majumder</td>
                  <td className="p-3 text-lg ">
                    Retd. Asst. Prof., PCC, Dimapur{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg "> Shri. Badal Bhadra</td>
                  <td className="p-3 text-lg ">
                    Former Executive Engineer, DMC{" "}
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg "> Shri. Bikah Chowdhury</td>
                  <td className="p-3 text-lg ">Businessman </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg "> Shri. Arun Nandy</td>
                  <td className="p-3 text-lg ">Class-1 Govt. Contractor </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg "> Smt. Falguni Sharma</td>
                  <td className="p-3 text-lg ">Social Worker </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoverningBody;
