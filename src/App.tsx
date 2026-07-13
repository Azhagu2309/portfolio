import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loading/LoadingScreen";
import CircuitBackground from "./components/background/CircuitBackground";
import CustomCursor from "./components/layout/CustomCursor";
import ScrollProgress from "./components/layout/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      <div className={loading ? "pointer-events-none select-none opacity-0" : "opacity-100"}>
        <CircuitBackground />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
