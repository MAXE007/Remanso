import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import ComoLlegar from "./pages/ComoLlegar";
import Reservar from "./pages/Reservar";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como-llegar" element={<ComoLlegar />} />
        <Route path="/preguntas-frecuentes" element={<Faq />} />
        <Route path="/reservar" element={<Reservar />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}