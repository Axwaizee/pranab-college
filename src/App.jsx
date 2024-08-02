import Header from "./constantComponents/header";
import Footer from "./constantComponents/Footer";
import HeadBackground from "./constantComponents/headBackground";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import NaacRoutes from "./pages/pageContents/NAAC/NaacRoutes";
import HomeRoutes from "./pages/pageContents/HOME/HomeRoutes";
import AboutRoutes from "./pages/pageContents/ABOUT/AboutRoutes";
import SSRoutes from "./pages/pageContents/STUDENTSERVICES/SSRoutes";

export default function App() {
  return (
    <>
      <Header />
      <HeadBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="/about/*" element={<AboutRoutes />} />
        <Route path="/onlineAdmissions/*" element />
        <Route path="/studentServices/*" element={<SSRoutes />} />
        <Route path="/NAAC/*" element={<NaacRoutes />} />
        <Route path="/calender/*" element />
        <Route path="/resources/*" element />
        <Route path="/library/*" element />
        <Route path="/committees/*" element />
        <Route path="/gallery/*" element />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}
