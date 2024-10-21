import React from "react";

const Journal = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p className="text-center ">Pranab College Journal (PCJ)</p>
        <p className="pt-2 text-xl text-center desk:text-4xl">
          (ISSN -2394-2851)
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full p-5 desk:p-10 desk:w-3/4 dark:text-white">
          <p>
            The Pranab College Journal (PCJ) Journal is an annual
            multi-disciplinary research journal on social sciences, humanities
            and commerce, published by the Research Committee of Pranab College
            with ISSN.2394-2851.
          </p>
          <br />
          <p>
            The journal encourages submissions that reflect critical thinking,
            originality and with interdisciplinary approach on any topic in the
            social sciences and commerce streams. In specific, the journal
            encourages submissions on the socio-cultural, economic, political,
            environmental and developmental issues of Northeast India. The
            following are members of the Editorial Board:-
          </p>
          <div className="my-5 overflow-auto shadow rounded-2xl">
            <table className="w-full">
              <thead className="bg-gray-200 border-b-2 border-zinc-500 dark:bg-opacity-25 dark:bg-black">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    SL. NO.
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    NAME
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    DESIGNATION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-sm ">1</td>
                  <td className="p-3 text-sm ">
                    Dr. Alomi Cynthia Shikhu, Asst. Prof., Dept. of Sociology
                  </td>
                  <td className="p-3 text-sm ">Editor-in-Chief</td>
                </tr>{" "}
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">2</td>
                  <td className="p-3 text-sm ">
                    Dr. Sanjukta Battacharjee, Asst. Prof., Dept. of English{" "}
                  </td>
                  <td className="p-3 text-sm ">Joint Editor</td>
                </tr>{" "}
                <tr>
                  <td className="p-3 text-sm ">3</td>
                  <td className="p-3 text-sm ">
                    Mr. I. Imkongakum Ao, Asst. Prof., Dept. of History{" "}
                  </td>
                  <td className="p-3 text-sm ">Joint Editor</td>
                </tr>{" "}
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">4</td>
                  <td className="p-3 text-sm ">
                    Miss Olivia Kikon, Asst. Prof.,Dept. of Sociology{" "}
                  </td>
                  <td className="p-3 text-sm ">Joint Editor</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-opacity-25 dark:bg-black">
                  <td className="p-3 text-sm ">5</td>
                  <td className="p-3 text-sm ">
                    Mr Seiboy Kongsai, Asst.Prof., Dept. of Sociology{" "}
                  </td>
                  <td className="p-3 text-sm ">Joint Editor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pt-3 ">
            <p>
              The Pranab College Journal maintains standard norms of ethical
              behaviour and practices which shall be binding on all the parties
              engaged in the project of publishing the Journal viz., the
              editorial board, the author/authors, reviewers and the publisher.
              All the parties concerned in publishing the journal are committed
              to best ethical practices with regard to originality, issues of
              plagiarism and publication practices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
