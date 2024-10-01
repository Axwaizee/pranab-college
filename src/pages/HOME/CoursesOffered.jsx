import React from "react";

const CoursesOffered = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Courses Offered</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full p-5 desk:w-1/2 dark:text-white">
          <div className="flex justify-center mt-10 overflow-auto shadow rounded-2xl">
            <div className="w-full rounded-2xl desk:w-1/2">
              <table className="w-full ">
                <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                  <tr>
                    <th className="p-3 text-lg font-semibold tracking-wide text-left ">
                      #
                    </th>
                    <th className="p-3 text-lg font-semibold tracking-wide text-left">
                      POST GRADUATE COURSE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 text-lg ">1</td>
                    <td className="p-3 text-lg ">Sociology </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center mt-10 overflow-auto shadow rounded-2xl">
            <table className="w-full desk:w-1/2 ">
              <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                <tr>
                  <th className="p-3 text-lg font-semibold tracking-wide text-left ">
                    #
                  </th>
                  <th className="p-3 text-lg font-semibold tracking-wide text-left">
                    DEGREE COURSE (ARTS)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-lg ">1</td>
                  <td className="p-3 text-lg ">English (Major & Minor)</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">2</td>
                  <td className="p-3 text-lg ">
                    Political Science (Major & Minor)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">3</td>
                  <td className="p-3 text-lg ">History (Major & Minor)</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">4</td>
                  <td className="p-3 text-lg ">Education (Major & Minor)</td>
                </tr>
                <tr>
                  <td className="p-3 text-lg ">5</td>
                  <td className="p-3 text-lg ">Sociology (Major & Minor)</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-lg ">6</td>
                  <td className="p-3 text-lg ">Economics (Minor)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-10 overflow-auto shadow rounded-2xl">
            <table className="w-full desk:w-1/2 ">
              <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                <tr>
                  <th className="p-3 text-lg font-semibold tracking-wide text-left ">
                    #
                  </th>
                  <th className="p-3 text-lg font-semibold tracking-wide text-left">
                    DEGREE COURSE (COMMERCE)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-lg ">1</td>
                  <td className="p-3 text-lg ">Commerce (Major & Minor) </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesOffered;
