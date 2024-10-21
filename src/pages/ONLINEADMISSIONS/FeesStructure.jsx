import React from "react";

const FeesStructure = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Fee Structure</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10 dark:text-white">
        <div className="w-full desk:w-1/2">
          <div className="pt-1 ">
            {" "}
            <div className="flex items-center justify-center ">
              <p>
                <b>For Undergraduate Programme</b>
              </p>
            </div>
            <div className="my-5 overflow-auto shadow rounded-2xl">
              <table className="w-full ">
                <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      INSTALLMENTS{" "}
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      1st SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      2nd SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      3rd SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      4th SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      5th SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      6th SEMESTER
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 text-sm ">1st INSTALLMENT</td>
                    <td className="p-3 text-sm text-right ">₹ 8,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 8,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 8,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 8,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 8,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 8,800.00</td>
                  </tr>{" "}
                  <tr>
                    <td className="p-3 text-sm ">2nd INSTALLMENT</td>
                    <td className="p-3 text-sm text-right ">₹ 7,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,800.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,800.00</td>
                  </tr>{" "}
                  <tr>
                    <td className="p-3 text-sm ">TOTAL</td>
                    <td className="p-3 text-sm text-right ">₹ 16,600.00</td>
                    <td className="p-3 text-sm text-right ">₹ 16,600.00</td>
                    <td className="p-3 text-sm text-right ">₹ 16,600.00</td>
                    <td className="p-3 text-sm text-right ">₹ 16,600.00</td>
                    <td className="p-3 text-sm text-right ">₹ 16,600.00</td>
                    <td className="p-3 text-sm text-right ">₹ 16,600.00</td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
            <br />
            <div className="flex gap-5 ">
              <div>N.B.:</div>
              <div>
                <ol className="list-decimal list-inside ">
                  <li className="pb-2">
                    Uniform fee ₹3,500.00 (including Blazer) to be paid during
                    admission of 1st semester.
                  </li>
                  <li className="pb-2">
                    First Installment to be paid in the beginning of each
                    semester.
                  </li>
                  <li className="pb-2">Fees once paid will not be refunded.</li>
                </ol>
              </div>
            </div>
            <br />
            <div className="flex items-center justify-center ">
              <p>
                <b>For Postgraduate Programme</b>
              </p>{" "}
            </div>
            <br />
            <div className="my-5 overflow-auto shadow rounded-2xl">
              <table className="w-full ">
                <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      INSTALLMENTS{" "}
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      1st SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      2nd SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      3rd SEMESTER
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                      4th SEMESTER
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 text-sm ">1st INSTALLMENT</td>
                    <td className="p-3 text-sm text-right ">₹ 12,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 12,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 12,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 12,000.00</td>
                  </tr>{" "}
                  <tr>
                    <td className="p-3 text-sm ">2nd INSTALLMENT</td>
                    <td className="p-3 text-sm text-right ">₹ 7,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 7,000.00</td>
                  </tr>{" "}
                  <tr>
                    <td className="p-3 text-sm ">Total</td>
                    <td className="p-3 text-sm text-right ">₹ 19,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 19,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 19,000.00</td>
                    <td className="p-3 text-sm text-right ">₹ 19,000.00</td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
            <br />
            <p>
              <b>ADITIONAL FEES</b>
            </p>
            <p>
              <i>(As and when required)</i>
            </p>
            <div className="flex w-full">
              <ol className="list-disc list-inside ">
                <li className="">Transfer Certificate - ₹100/- </li>
                <li className="">Character Certificate - ₹100/-</li>
                <li className="">Duplicate Identity Card/Fee Card – ₹100/-</li>
                <li className="">Bonafied Student Certificate – ₹100/-</li>

                <li className="">
                  Fees for Practical Exam (per subject) – ₹300/-{" "}
                </li>
                <li className="">
                  Additional fee for viva of dissertation for post graduate
                  programme.{" "}
                </li>
                <li className="">
                  Any others fees fixed by the Nagaland University
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeesStructure;
