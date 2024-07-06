import Header from "./components/header";
import Footer from "./components/Footer";
import ImageCarausal from "./components/imageCarausal";
import Quote from "./components/Quote";
import CTA from "./components/CTA";
import Motto from "./components/Motto";
import Notification from "./components/Notification";
import Feedback from "./components/feedback";
import Testimonials from "./components/Testimonials";
import HeadBackground from "./components/headBackground";

export default function App() {
  return (
    <>
      <Header />
      <HeadBackground />
      <ImageCarausal />
      <Quote />
      <CTA />
      <Motto />
      <Notification />
      <Testimonials />
      <Feedback />
      <Footer />
    </>
  );
}
