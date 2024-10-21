import { Link, Route, Routes } from "react-router-dom";
import React from "react";

const result = () => {
  return (
    <div className="overflow-auto shadow rounded-2xl">
      <table className="w-full dark:text-white ">
        <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              YEAR
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              EXAM
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              APPEARED
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              PASSED I
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              PASSED II
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              PASSED III
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              %
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="p-3 text-sm ">1996</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">92</td>
            <td className="p-3 text-sm ">03</td>
            <td className="p-3 text-sm ">32</td>
            <td className="p-3 text-sm ">47</td>
            <td className="p-3 text-sm ">88.17%</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">1997</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">62</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">02</td>
            <td className="p-3 text-sm ">34</td>
            <td className="p-3 text-sm ">53.84%</td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">1998</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">57</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">10</td>
            <td className="p-3 text-sm ">23</td>
            <td className="p-3 text-sm ">57.89%</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">1999</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">33</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">06</td>
            <td className="p-3 text-sm ">15</td>
            <td className="p-3 text-sm ">69.33%</td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">2000</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">39</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">11</td>
            <td className="p-3 text-sm ">13</td>
            <td className="p-3 text-sm ">61.50% </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">2001</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">18</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">12</td>
            <td className="p-3 text-sm ">66.67% </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">2002</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">31</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">09</td>
            <td className="p-3 text-sm ">16</td>
            <td className="p-3 text-sm ">80.65% </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">2003</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">87</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">18</td>
            <td className="p-3 text-sm ">54</td>
            <td className="p-3 text-sm ">85.71% </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">2004</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">86</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">22</td>
            <td className="p-3 text-sm ">54</td>
            <td className="p-3 text-sm ">88.37% </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">2005</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">94</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">14</td>
            <td className="p-3 text-sm ">52</td>
            <td className="p-3 text-sm ">70.12% </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">2006</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">82</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">15</td>
            <td className="p-3 text-sm ">57</td>
            <td className="p-3 text-sm ">87.80% </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">2007</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">130</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">27</td>
            <td className="p-3 text-sm ">70</td>
            <td className="p-3 text-sm ">74.62% </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">2008</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">124</td>
            <td className="p-3 text-sm ">02</td>
            <td className="p-3 text-sm ">54</td>
            <td className="p-3 text-sm ">25</td>
            <td className="p-3 text-sm ">65.32% </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">2009</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">164</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">43</td>
            <td className="p-3 text-sm ">61</td>
            <td className="p-3 text-sm ">63.41% </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">2010</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">197</td>
            <td className="p-3 text-sm ">-</td>
            <td className="p-3 text-sm ">74</td>
            <td className="p-3 text-sm ">73</td>
            <td className="p-3 text-sm ">74.62% </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">2011</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">233</td>
            <td className="p-3 text-sm ">01</td>
            <td className="p-3 text-sm ">94</td>
            <td className="p-3 text-sm ">75</td>
            <td className="p-3 text-sm ">72.96% </td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">2012</td>
            <td className="p-3 text-sm ">BA </td>
            <td className="p-3 text-sm ">295</td>
            <td className="p-3 text-sm ">01</td>
            <td className="p-3 text-sm ">93</td>
            <td className="p-3 text-sm ">101</td>
            <td className="p-3 text-sm ">60.10% </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const RankHolder = () => {
  return (
    <div className="overflow-auto shadow rounded-2xl">
      <table className="w-full dark:text-white ">
        <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              SL. NO.
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              NAME
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              COURSE
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              YEAR
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left ">
              PLACE/ RANK
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="p-3 text-sm ">1</td>
            <td className="p-3 text-sm ">IMTILEMLA</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2003</td>
            <td className="p-3 text-sm ">1st in English (Hons.)</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">2</td>
            <td className="p-3 text-sm ">YEKALI AYE</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2008</td>
            <td className="p-3 text-sm ">1st in History (Hons.)</td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">3</td>
            <td className="p-3 text-sm ">ANNI MECH</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2008</td>
            <td className="p-3 text-sm ">2nd in History (Hons.)</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">4</td>
            <td className="p-3 text-sm ">IMTITUSULA</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2008</td>
            <td className="p-3 text-sm ">1st in Education (Hons.)</td>
          </tr>
          <tr>
            <td className="p-3 text-sm ">5</td>
            <td className="p-3 text-sm ">ULLA LAUREEN FERNANDEZ</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2010</td>
            <td className="p-3 text-sm ">1st in Education (Hons.)</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">6</td>
            <td className="p-3 text-sm ">SOYINGI ODYUO</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2011</td>
            <td className="p-3 text-sm ">1st class in Political Science</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">7</td>
            <td className="p-3 text-sm ">MS. ARPITA PODDAR</td>
            <td className="p-3 text-sm ">BCOM</td>
            <td className="p-3 text-sm ">2015</td>
            <td className="p-3 text-sm ">7th</td>
          </tr>

          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">8</td>
            <td className="p-3 text-sm ">SITA KUMARI</td>
            <td className="p-3 text-sm ">BCOM</td>
            <td className="p-3 text-sm ">2015</td>
            <td className="p-3 text-sm ">10th</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">9</td>
            <td className="p-3 text-sm ">BABITA SINHA</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2024</td>
            <td className="p-3 text-sm ">1st (Education)</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">10</td>
            <td className="p-3 text-sm ">PRIYANKA KATHERIA</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2024</td>
            <td className="p-3 text-sm ">6th (Education)</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">11</td>
            <td className="p-3 text-sm ">HAFIZA BEGUM</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2024</td>
            <td className="p-3 text-sm ">7th (Education)</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">12</td>
            <td className="p-3 text-sm ">IMJUNGWATILA LONGKUMER</td>
            <td className="p-3 text-sm ">BA</td>
            <td className="p-3 text-sm ">2024</td>
            <td className="p-3 text-sm ">10th (Sociology)</td>
          </tr>
          <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
            <td className="p-3 text-sm ">6</td>
            <td className="p-3 text-sm ">ANGOLU</td>
            <td className="p-3 text-sm ">BCOM</td>
            <td className="p-3 text-sm ">2024</td>
            <td className="p-3 text-sm ">2nd (Commerce)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AcademicRecord = () => {
  return (
    <>
      <div className="flex items-center text-center  justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Academic Record - Rank Holder of the College</p>
      </div>
      {/* <div className="flex justify-center p-10 ">
        <div className="w-full desk:w-1/2">
          <div className="flex flex-col w-full gap-5 desk:flex-row">
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/resources/academicRecord/result"
            >
              Result of the College
            </Link>
            <Link
              className="w-full px-3 py-2 text-center transition-all duration-300 border border-blue-500 rounded-full dark:text-white hover:bg-blue-500 hover:text-white"
              to="/resources/academicRecord/rankHolder"
            >
              Rank Holder of the College
            </Link>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center pb-5 desk:pb-10">
        <div className="w-full pt-10 desk:w-3/4">
          {/* <Routes>
            <Route path="result" element={result()} />
            <Route path="rankHolder" element={rankHolder()} />
          </Routes> */}
          <RankHolder />
        </div>
      </div>
    </>
  );
};

export default AcademicRecord;
