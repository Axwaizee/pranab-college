import React from "react";
import CTA from "./pageContents/Home/CTA";
import ImageCarausal from "./pageContents/Home/imageCarausal";
import Quote from "./pageContents/Home/Quote";
import Motto from "./pageContents/Home/Motto";
import Notification from "./pageContents/Home/Notification";
import Testimonials from "./pageContents/Home/Testimonials";
import Feedback from "./pageContents/Home/feedback";

const Home = () => {
  return (
    <>
      <ImageCarausal />
      <Quote />
      <CTA />
      <Motto />
      <Notification />
      <Testimonials />
      <Feedback />
    </>
  );
};

export default Home;
