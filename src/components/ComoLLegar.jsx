export default function ComoLlegar() {
  return (
    <section id="como-llegar" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="font-display text-3xl text-roca mb-3">Cómo llegar</h2>
      <p className="text-texto/75 max-w-md mb-8">
        Valle Grande queda a 30 km de la ciudad de San Rafael, subiendo por la Ruta 144 hacia la cordillera.
      </p>

      {/* Reemplazar este div por el iframe real cuando tengamos el link de Google Maps:
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        className="w-full h-80 rounded-sm border border-roca/20"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cómo llegar a Valle Grande"
      /> */}
      <div className="w-full h-80 rounded-sm border border-roca/20 bg-roca/10 flex items-center justify-center text-roca/50 text-sm">
        mapa próximamente
      </div>
    </section>
  );
}