import React from "react";

const principal = "/assets/elements/principal/principal.png";
const saurav = "/assets/images/notification/saurav.jpeg";

// bg-[#fafafa]   notifiation bg color

const Notification = () => {
  return (
    <div className=" min-[1181px]:max-[1399px]:px-[100px] min-[1400px]:max-[1600px]:px-[200px] wide:px-[300px] min-[200px]:max-[1180px]:px-5 desk:mt-[120px] desk:max-[1919px]:mt-[80px] min-[200px]:max-[1180px]:mt-12">
      <div className="flex justify-center w-full">
        <div className=" flex justify-center p-8 dark:text-white rounded-3xl border-[1px] rounded-xl ">
          {/* <div className="flex justify-center ">
            <p className="text-6xl font-medium font-greatVibes">
              In the sweet memory of
            </p>
          </div> */}
          <div className="mt-4 max-w-screen-lg " >
            <p className="text-2xl text-center underline sm:font-medium font-black font-inter">VACANCY</p>
            <p className="text-lg font-inter desk:font-normal">
              Applications are invited from the prospective and eligible
              candidate for the vacant post:
              <br />
              <b>i) Assistant Professor, Department of Political Science
              <br />
              ii) Assistant Professor, Department of Sociology</b>
              <br />
              Candidates must possess qualification as per the UGC norms. Interested candidates should submit their CV/Resume along with relevant testimonials to the office during working hours or through email at pranabananda_wc@yahoo.com on or before 22<sup>nd</sup> November, 2024. <br />
              <b>
                For further details contact: 03862-357469 / 8787454987 / 9863233963
              </b>
              <br />
              <br />
              <br />
            </p>
          </div>
          {/* <img src={saurav} className="w-1/2 " alt="" srcset="" /> */}
        </div>

        {/* Currently removed, add back after receiving new photo */}
        {/* <div id="wrapper" className="min-[200px]:max-[1180px]:hidden">
          <div className="ml-10  h-full w-[300px]  relative object-contain rounded-br-[150px] rounded-bl-3xl z-50 overflow-hidden">
            <div className="w-full h-4/5 bg-[#61a6f2] absolute bottom-0 rounded-t-[150px] "></div>
            <img
              className="absolute h-full "
              src={principal}
              alt=""
              draggable="false"
            />
          </div>
        </div> */}
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
                className="absolute inset-0 object-cover object-center w-full h-full"
                src="./public/assets/elements/principal/principal.png"
                alt="Principal"
              />
            </div>
          </div> */
}
