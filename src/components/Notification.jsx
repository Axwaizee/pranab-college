import React from "react";

const principal = "/assets/elements/principal/principal.png";

const Notification = () => {
  return (
    <div className=" min-[1181px]:max-[1399px]:px-[100px] min-[1400px]:max-[1600px]:px-[200px] wide:px-[300px] min-[200px]:max-[1180px]:px-5 desk:mt-[120px] desk:max-[1919px]:mt-[80px] min-[200px]:max-[1180px]:mt-12">
      <div className="flex  w-full">
        <div className=" fl bg-[#fafafa] p-8 text-[#008EF3] rounded-3xl  ">
          <div>
            <p className=" font-inter font-medium text-3xl">Notifications</p>
          </div>
          <div className=" text-center mt-2.5">
            <p className=" font-inter font-medium text-2xl">VACANCY</p>
          </div>
          <div className=" mt-4">
            <p className=" font-inter desk:font-normal text-lg">
              Applications are invited from the prospective and eligible
              candidate for the vacant post of Professor / Associate-Professor /
              Assistant-Professor in the Department of Political Science.
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
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div id="wrapper" className="min-[200px]:max-[1180px]:hidden">
          <div className="ml-10  h-full w-[300px]  relative object-contain rounded-br-[150px] rounded-bl-3xl z-50 overflow-hidden">
            <div className="w-full h-4/5 bg-[#61a6f2] absolute bottom-0 rounded-t-[150px] "></div>
            <img
              className=" h-full  absolute "
              src={principal}
              alt=""
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

{
  /* <div className=" w-full h-full overflow-hidden relative rounded-bl-3xl rounded-br-[180px]">
            <div>
              <div className="w-full h-3/4 bg-[#61a6f2] absolute bottom-0 rounded-t-[180px]"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="./public/assets/elements/principal/principal.png"
                alt="Principal"
              />
            </div>
          </div> */
}
