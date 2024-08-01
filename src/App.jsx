import Header from "./constantComponents/header";
import Footer from "./constantComponents/Footer";
import HeadBackground from "./constantComponents/headBackground";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import NaacRoutes from "./pages/pageContents/NAAC/NaacRoutes";
import HomeRoutes from "./pages/pageContents/HOME/HomeRoutes";
import AboutRoutes from "./pages/pageContents/ABOUT/AboutRoutes";

export default function App() {
  return (
    <>
      <Header />
      <HeadBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="/about/*" element={<AboutRoutes />} />
        <Route path="/onlineAdmissions/*" element={<HomeRoutes />} />
        <Route path="/studentServices/*" element={<HomeRoutes />} />
        <Route path="/NAAC/*" element={<NaacRoutes />} />
        <Route path="/calender/*" element={<HomeRoutes />} />
        <Route path="/resources/*" element={<HomeRoutes />} />
        <Route path="/library/*" element={<HomeRoutes />} />
        <Route path="/committees/*" element={<HomeRoutes />} />
        <Route path="/gallery/*" element={<HomeRoutes />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}
