import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[3/4] bg-roca/15 rounded-sm flex items-center justify-center text-roca/50 text-sm">foto 1</div>
          <div className="aspect-[3/4] bg-rio/15 rounded-sm flex items-center justify-center text-rio/50 text-sm mt-6">foto 2</div>
          <div className="aspect-[3/4] bg-roca/15 rounded-sm flex items-center justify-center text-roca/50 text-sm">foto 3</div>
        </div>
        {/* Cuando lleguen las fotos: <img src="/img/gomon-1.jpg" alt="Bajando el Atuel en gomón" className="aspect-[3/4] object-cover rounded-sm" /> */}
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <Link to="/reservar" className="inline-block bg-roca text-espuma px-8 py-4 rounded-sm font-medium hover:bg-roca/90 transition-colors">
          Reservar mi gomón
        </Link>
      </section>
    </>
  );
}