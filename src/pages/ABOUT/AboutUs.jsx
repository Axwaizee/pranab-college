import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-center min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>ABOUT THE SPONSORING AUTHORITY OF THE COLLEGE</p>
      </div>
      <div className="flex justify-center p-5 desk:p-10">
        {" "}
        <div className="text-justify text-white desk:w-1/2 dark">
          <p>
            The College has been sponsored by Bharat Sevashram Sangha (Head
            Office-211, Rash Behari Avenue, Kolkata – 700019), a spiritual
            brotherhood of monks and selfless workers devoted to the services of
            humanity. It was founded in 1917 by the illustrious patriot Acharya
            Srimat Swami Pranabanandaji Maharaj. It is purely a philanthropic
            and charitable organization with non-sectarian, non-communal and
            non-political character and outlook <br />
            <br />
            The Sangha has been maintaining several educational institutions in
            different places all over the country and also abroad. The main
            function of the institution is to impart true education which makes
            ideal personages and helps to build a powerful nation.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
