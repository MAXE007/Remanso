import { useState } from "react";

const NUMERO_WHATSAPP = "5492610000000";
const HORARIOS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function Reservar() {
  const [form, setForm] = useState({ nombre: "", telefono: "", fecha: "", horario: HORARIOS[0], personas: 1, comentario: "" });
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
      `Nombre: ${form.nombre}\nTeléfono: ${form.telefono}\nFecha: ${form.fecha}\nHorario: ${form.horario}\nPersonas: ${form.personas}\n` +
      (form.comentario ? `Comentario: ${form.comentario}\n` : "") +
      `\nQuedo atento/a para confirmar y coordinar el pago.`;

    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-roca mb-8">Reservá tu gomón</h1>
      <form onSubmit={handleSubmit} className="bg-espuma border border-roca/20 rounded-sm overflow-hidden md:flex">
        <div className="p-8 md:w-1/2 space-y-5">
          <h2 className="font-display text-2xl text-roca">Detalles de la bajada</h2>
          <label className="block">
            <span className="text-sm text-texto/70">Fecha</span>
            <input type="date" name="fecha" min={hoy} value={form.fecha} onChange={handleChange} className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio" />
          </label>
          <label className="block">
            <span className="text-sm text-texto/70">Horario</span>
            <select name="horario" value={form.horario} onChange={handleChange} className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio">
              {HORARIOS.map((h) => <option key={h} value={h}>{h} hs</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm text-texto/70">Cantidad de personas</span>
            <input type="number" name="personas" min={1} value={form.personas} onChange={handleChange} className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio" />
          </label>
        </div>

        <div className="hidden md:block w-0 border-l-2 border-dashed border-roca/30 my-8" aria-hidden="true" />
        <div className="md:hidden mx-8 border-t-2 border-dashed border-roca/30" aria-hidden="true" />

        <div className="p-8 md:w-1/2 space-y-5 bg-roca/5">
          <h2 className="font-display text-2xl text-roca">Tus datos</h2>
          <label className="block">
            <span className="text-sm text-texto/70">Nombre y apellido</span>
            <input name="nombre" value={form.nombre} onChange={handleChange} className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio" />
          </label>
          <label className="block">
            <span className="text-sm text-texto/70">WhatsApp</span>
            <input name="telefono" placeholder="Con código de área" value={form.telefono} onChange={handleChange} className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio" />
          </label>
          <label className="block">
            <span className="text-sm text-texto/70">Comentario (opcional)</span>
            <textarea name="comentario" rows={2} value={form.comentario} onChange={handleChange} className="mt-1 w-full bg-transparent border-b border-texto/30 py-1 focus:outline-none focus:border-rio resize-none" />
          </label>
          {error && <p className="text-sm text-roca">{error}</p>}
          <button type="submit" className="w-full bg-roca text-espuma font-medium py-3 rounded-sm hover:bg-roca/90 transition-colors">
            Reservar por WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}