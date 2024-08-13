import React from "react";

const Results = () => {
  return (
    <>
      <div className="flex text-center  items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Results</p>
      </div>
      <div className="flex justify-center ">
        <div className="w-full p-5 desk:p-10 desk:w-3/4 dark:text-white">
          <div className="overflow-auto shadow rounded-2xl">
            <div className="flex justify-center bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
              <p className="p-3 text-sm font-semibold tracking-wider text-left">
                2.6.3 Average pass percentage of Students during last five years
              </p>
            </div>
            <table className="w-full dark:text-white ">
              <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    Year
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    Program Code
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    Program Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    Number of Students Appeared
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    Number of Students Passed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B.A. General</td>
                  <td className="p-3 text-sm">185</td>
                  <td className="p-3 text-sm">89</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">ENG</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">41</td>
                  <td className="p-3 text-sm">26</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">HIS</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">21</td>
                  <td className="p-3 text-sm">11</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">EDN</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">38</td>
                  <td className="p-3 text-sm">29</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">POL. SC.</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">14</td>
                  <td className="p-3 text-sm">10</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">SOC</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">13</td>
                  <td className="p-3 text-sm">9</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B. Com General</td>
                  <td className="p-3 text-sm">1</td>
                  <td className="p-3 text-sm">1</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">Accounting & Finance</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">21</td>
                  <td className="p-3 text-sm">10</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2017</td>
                  <td className="p-3 text-sm">Management</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">0</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm"></td>
                  <td className="p-3 text-sm font-bold" colSpan={2}>
                    Total No. of Students Appeared and Passed
                  </td>
                  <td className="p-3 text-sm">334</td>
                  <td className="p-3 text-sm">185</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B.A. General</td>
                  <td className="p-3 text-sm">183</td>
                  <td className="p-3 text-sm">122</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">ENG</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">62</td>
                  <td className="p-3 text-sm">33</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">HIS</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">11</td>
                  <td className="p-3 text-sm">10</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">EDN</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">23</td>
                  <td className="p-3 text-sm">14</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">POL. SC.</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">24</td>
                  <td className="p-3 text-sm">20</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">SOC</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">23</td>
                  <td className="p-3 text-sm">17</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B. Com General</td>
                  <td className="p-3 text-sm">3</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">Accounting & Finance</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">19</td>
                  <td className="p-3 text-sm">8</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2018</td>
                  <td className="p-3 text-sm">Management</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">0</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm"></td>
                  <td className="p-3 text-sm font-bold" colSpan={2}>
                    Total No. of Students Appeared and Passed
                  </td>
                  <td className="p-3 text-sm">348</td>
                  <td className="p-3 text-sm">224</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B.A. General</td>
                  <td className="p-3 text-sm">114</td>
                  <td className="p-3 text-sm">53</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">ENG</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">28</td>
                  <td className="p-3 text-sm">18</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">HIS</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">8</td>
                  <td className="p-3 text-sm">8</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">EDN</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">14</td>
                  <td className="p-3 text-sm">11</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">POL. SC.</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">16</td>
                  <td className="p-3 text-sm">10</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">SOC</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">30</td>
                  <td className="p-3 text-sm">20</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B. Com General</td>
                  <td className="p-3 text-sm">2</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">Accounting & Finance</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">19</td>
                  <td className="p-3 text-sm">8</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2019</td>
                  <td className="p-3 text-sm">Management</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">0</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm"></td>
                  <td className="p-3 text-sm font-bold" colSpan={2}>
                    Total No. of Students Appeared and Passed
                  </td>
                  <td className="p-3 text-sm">231</td>
                  <td className="p-3 text-sm">128</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B.A. General</td>
                  <td className="p-3 text-sm">146</td>
                  <td className="p-3 text-sm">146</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">ENG</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">24</td>
                  <td className="p-3 text-sm">24</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">HIS</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">17</td>
                  <td className="p-3 text-sm">17</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">EDN</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">31</td>
                  <td className="p-3 text-sm">31</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">POL. SC.</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">57</td>
                  <td className="p-3 text-sm">57</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">SOC</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">30</td>
                  <td className="p-3 text-sm">30</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B. Com General</td>
                  <td className="p-3 text-sm">0</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">Accounting & Finance</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">10</td>
                  <td className="p-3 text-sm">10</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2020</td>
                  <td className="p-3 text-sm">Management</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">0</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm"></td>
                  <td className="p-3 text-sm font-bold" colSpan={2}>
                    Total No. of Students Appeared and Passed
                  </td>
                  <td className="p-3 text-sm">315</td>
                  <td className="p-3 text-sm">315</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B.A. General</td>
                  <td className="p-3 text-sm">155</td>
                  <td className="p-3 text-sm">155</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">ENG</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">24</td>
                  <td className="p-3 text-sm">24</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">HIS</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">15</td>
                  <td className="p-3 text-sm">15</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">EDN</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">32</td>
                  <td className="p-3 text-sm">32</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">POL. SC.</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">48</td>
                  <td className="p-3 text-sm">48</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">SOC</td>
                  <td className="p-3 text-sm">B.A. Honours</td>
                  <td className="p-3 text-sm">12</td>
                  <td className="p-3 text-sm">12</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">GEN</td>
                  <td className="p-3 text-sm">B. Com General</td>
                  <td className="p-3 text-sm">0</td>
                  <td className="p-3 text-sm">0</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">Accounting & Finance</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">15</td>
                  <td className="p-3 text-sm">15</td>
                </tr>
                <tr>
                  <td className="p-3 text-sm">2021</td>
                  <td className="p-3 text-sm">Management</td>
                  <td className="p-3 text-sm">B. Com Honours</td>
                  <td className="p-3 text-sm">2</td>
                  <td className="p-3 text-sm">2</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm"></td>
                  <td className="p-3 text-sm font-bold" colSpan={2}>
                    Total No. of Students Appeared and Passed
                  </td>
                  <td className="p-3 text-sm">277</td>
                  <td className="p-3 text-sm">277</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
