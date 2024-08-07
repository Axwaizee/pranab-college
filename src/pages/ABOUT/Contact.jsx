import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-6xl font-normal text-white gradientBar font-inter">
        <p>Contact</p>
      </div>
      <div className="flex flex-col justify-center p-10 desk:flex-row">
        <div className="flex justify-center p-10">
          <div className=" w-96 dark:text-white">
            <p className="pb-2 text-3xl">Pranab College</p>
            <p>
              Lhomithi Colony, <br />
              Dimapur – 797112, Nagaland. <br /> Phone No:{" "}
              <p className="inline text-orange-600">9863233963</p> |
              <p className="inline text-orange-600"> 03862357469</p> <br />
              Email:{" "}
              <a href="mailto:pranabcollege@yahoo.com">
                Pranabcollege@yahoo.com
              </a>
              <br />
              Email:{" "}
              <a href="mailto:pranabananda_wc@yahoo.com">
                Pranabananda_wc@yahoo.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14356.073257575466!2d93.70875376643073!3d25.9017684440515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3745e18a36c49f3f%3A0x4526346f157e90a3!2sPranab%20College!5e0!3m2!1sen!2sin!4v1722535973204!5m2!1sen!2sin"
            className=" h-[450px] w-[600px]"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
