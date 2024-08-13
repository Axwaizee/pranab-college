import React from "react";

const GoverningBody = () => {
  return (
    <>
      <div className="flex text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Governing Body Members</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        <div className="flex justify-center w-full desk:w-1/2 dark:text-white">
          <div className="overflow-auto shadow rounded-2xl">
            <table className="w-full dark:text-white ">
              <tbody className="">
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">
                    {" "}
                    Swami Dhyaneshanandaji Maharaj
                  </td>
                  <td className="p-3 text-sm ">President, Pranab College </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm ">
                    {" "}
                    Swami Gurupadanandji Maharaj
                  </td>
                  <td className="p-3 text-sm ">Secretary, Pranab College </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">
                    {" "}
                    Swami Chinmayanandaji Maharaj
                  </td>
                  <td className="p-3 text-sm ">
                    Joint Secretary, Pranab College{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm "> Dr. Santosh Kumar</td>
                  <td className="p-3 text-sm ">Principal, Pranab College </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm "> Ms. C. Narola Ao</td>
                  <td className="p-3 text-sm ">
                    Vice Principal, Pranab College{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm "> Prof. V. K. Vidyarthi</td>
                  <td className="p-3 text-sm ">
                    SASRD (Univ. Representative){" "}
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm "> Mr. Saurav Dowarah</td>
                  <td className="p-3 text-sm ">
                    Teacher Representative and Co-Ordinator IQAC NAAC{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm "> Shri Monoj Bhattacharjee</td>
                  <td className="p-3 text-sm ">
                    Principal, P.V. H.S.S, Dimapur{" "}
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm "> Shri P. B. Paul</td>
                  <td className="p-3 text-sm ">
                    Advocate, Guwahati High Court, Kohima Bench{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm "> Dr. S.K. Dey</td>
                  <td className="p-3 text-sm ">Physician </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm "> Shri. Dulal Majumder</td>
                  <td className="p-3 text-sm ">
                    Retd. Asst. Prof., PCC, Dimapur{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm "> Shri. Badal Bhadra</td>
                  <td className="p-3 text-sm ">
                    Former Executive Engineer, DMC{" "}
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm "> Shri. Bikah Chowdhury</td>
                  <td className="p-3 text-sm ">Businessman </td>
                </tr>
                <tr>
                  <td className="p-3 text-sm "> Shri. Arun Nandy</td>
                  <td className="p-3 text-sm ">Class-1 Govt. Contractor </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm "> Smt. Falguni Sharma</td>
                  <td className="p-3 text-sm ">Social Worker </td>
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
