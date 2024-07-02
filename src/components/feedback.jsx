import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const initialValues = { name: "", email: "", feedback: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m215eo1", "template_cf7iwyw", form.current, {
        publicKey: "ED1kRi-zxn4VgZmxX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Thank you for your feedback!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    document.feedbackForm.reset();
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col gap-2 dark:text-white p-10 desk:w-[500px] w-full"
        ref={form}
        onSubmit={sendEmail}
        name="feedbackForm"
      >
        <p className=" font-inter font-medium text-2xl">Feedback Form</p>
        <input
          className=" w-full dark:bg-[#1a1a1a] outline-none border border-[#414141] py-2 px-3 rounded-lg"
          type="text"
          name="user_name"
          id="name"
          placeholder="Enter your name"
          required
        />
        <input
          className=" w-full dark:bg-[#1a1a1a] outline-none border border-[#414141] py-2 px-3 rounded-lg"
          type="email"
          name="user_email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          className=" w-full h-60 dark:bg-[#1a1a1a] outline-none border border-[#414141] py-2 px-3 rounded-lg"
          type="text"
          name="message"
          id="feedback"
          placeholder="Help us improve with your valueable feedback."
          required
        />
        <button
          type="submit"
          className=" h-10 bg-[#0376D1] rounded-lg font-inter font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
