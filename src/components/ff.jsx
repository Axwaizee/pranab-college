import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FeedbackForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_arpn9ei", "template_p60cqos", form.current, {
        publicKey: "hh49w-pS55V3KTDl1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-[400px] dark:text-white"
      >
        <label>Name</label>
        <input className="text-black" type="text" name="user_name" />
        <label>Email</label>
        <input className="text-black" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="text-black" name="message" />
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
