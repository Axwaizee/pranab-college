import Header from "./constantComponents/header";
import Footer from "./constantComponents/Footer";
import HeadBackground from "./constantComponents/headBackground";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import NaacRoutes from "./pages/pageContents/NAAC/NaacRoutes";

export default function App() {
  return (
    <>
      <Header />
      <HeadBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NAAC/*" element={<NaacRoutes />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}
