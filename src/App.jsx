import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

const NUMERO_WHATSAPP = "5492610000000"; // cod país 54 + 9 + cod área sin 0 + número sin 15
const HORARIOS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function App() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    horario: HORARIOS[0],
    personas: 1,
    comentario: "",
  });
  const [error, setError] = useState("");
  const hoy = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.fecha) {
      setError("Completá nombre, teléfono y fecha para reservar.");
      return;
    }
    if (form.fecha < hoy) {
      setError("Elegí una fecha desde hoy en adelante.");
      return;
    }
    setError("");

    const mensaje =
      `¡Hola! Quiero reservar un gomón para bajar el Atuel en Valle Grande 🚣\n\n` +
      `Nombre: ${form.nombre}\n` +
      `Teléfono: ${form.telefono}\n` +
      `Fecha: ${form.fecha}\n` +
      `Horario: ${form.horario}\n` +
      `Personas: ${form.personas}\n` +
      (form.comentario ? `Comentario: ${form.comentario}\n` : "") +
      `\nQuedo atento/a para confirmar y coordinar el pago.`;

    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <Hero />
      {/* GALERÍA — reemplazar cada src cuando lleguen las fotos */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[3/4] bg-roca/15 rounded-sm flex items-center justify-center text-roca/50 text-sm">
            foto 1
          </div>
          <div className="aspect-[3/4] bg-rio/15 rounded-sm flex items-center justify-center text-rio/50 text-sm mt-6">
            foto 2
          </div>
          <div className="aspect-[3/4] bg-roca/15 rounded-sm flex items-center justify-center text-roca/50 text-sm">
            foto 3
          </div>
        </div>
        {/* Cuando lleguen las fotos, cada bloque pasa a ser algo como:
        <img src="/img/gomon-1.jpg" alt="Bajando el atuel en gomón" className="aspect-[3/4] object-cover rounded-sm" /> */}
      </section>
          <Faq />
      {/* TALÓN DE RESERVA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <form
          onSubmit={handleSubmit}
          className="bg-espuma border border-roca/20 rounded-sm overflow-hidden md:flex"
        >
          {/* Detalles de la bajada */}
          <div className="p-8 md:w-1/2 space-y-5">
            <h2 className="font-display text-2xl text-roca">Detalles de la bajada</h2>

            <label className="block">
              <span className="text-sm text-texto/70">Fecha</span>
              <input
                type="date"
                name="fecha"
                min={hoy}
                value={form.fecha}
                onChange={handleChange}
                className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio"
              />
            </label>

            <label className="block">
              <span className="text-sm text-texto/70">Horario</span>
              <select
                name="horario"
                value={form.horario}
                onChange={handleChange}
                className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio"
              >
                {HORARIOS.map((h) => (
                  <option key={h} value={h}>{h} hs</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm text-texto/70">Cantidad de personas</span>
              <input
                type="number"
                name="personas"
                min={1}
                value={form.personas}
                onChange={handleChange}
                className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio"
              />
            </label>
          </div>

          {/* Línea de talón perforado */}
          <div
            className="hidden md:block w-0 border-l-2 border-dashed border-roca/30 my-8"
            aria-hidden="true"
          />
          <div className="md:hidden mx-8 border-t-2 border-dashed border-roca/30" aria-hidden="true" />

          {/* Datos de contacto */}
          <div className="p-8 md:w-1/2 space-y-5 bg-roca/5">
            <h2 className="font-display text-2xl text-roca">Tus datos</h2>

            <label className="block">
              <span className="text-sm text-texto/70">Nombre y apellido</span>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio"
              />
            </label>

            <label className="block">
              <span className="text-sm text-texto/70">WhatsApp</span>
              <input
                name="telefono"
                placeholder="Con código de área"
                value={form.telefono}
                onChange={handleChange}
                className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio"
              />
            </label>

            <label className="block">
              <span className="text-sm text-texto/70">Comentario (opcional)</span>
              <textarea
                name="comentario"
                rows={2}
                value={form.comentario}
                onChange={handleChange}
                className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio resize-none"
              />
            </label>

            {error && <p className="text-sm text-roca">{error}</p>}

            <button
              type="submit"
              className="w-full bg-roca text-espuma font-medium py-3 rounded-sm hover:bg-roca/90 transition-colors"
            >
              Reservar por WhatsApp
            </button>
          </div>
        </form>
      </section>
      <section id="reserva" className="max-w-3xl mx-auto px-6 pb-24">
        {/* ...form igual que antes... */}
      </section>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}