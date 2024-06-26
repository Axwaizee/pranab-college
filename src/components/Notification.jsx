import React from "react";

const Notification = () => {
  return (
    <div className=" desk:px-[385px] desk:max-[1919px]:px-[300px] min-[200px]:max-[1180px]:px-5 desk:mt-[120px] desk:max-[1919px]:mt-[80px] min-[200px]:max-[1180px]:mt-12">
      <div className="flex">
        <div>
          <div className="bg-[#fafafa] p-8 text-[#008EF3] rounded-3xl">
            <div>
              <p className=" font-inter font-medium text-3xl">Notifications</p>
            </div>
            <div className=" text-center mt-2.5">
              <p className=" font-inter font-medium text-2xl">VACANCY</p>
            </div>
            <div className=" mt-4">
              <p className=" font-inter desk:font-normal text-lg">
                Applications are invited from the prospective and eligible
                candidate for the vacant post of Professor / Associate-Professor
                / Assistant-Professor in the Department of Political Science.
                Qualifications required as per UGC norms. <br />
                <br />
                Qualified retired professors can also apply. Candidates may send
                their resume during office hour or through email
                pranabananda_wc@yahoo.com on or before 20th May 2024. <br />{" "}
                <i>
                  {" "}
                  For further details contact: 03862-357469 / 9863233963 /
                  7005658208
                </i>
              </p>
            </div>
          </div>
        </div>
        <div id="wrapper" className="min-[200px]:max-[1180px]:hidden ml-10">
          <div id="container" className=" h-full ">
            <div className="bg-[#61a6f2] ">
              <img
                className=" h-full w-full object-cover"
                src="./public/assets/elements/principal/principal.png"
                alt="Principal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
