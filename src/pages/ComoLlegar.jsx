export default function ComoLlegar() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-roca mb-3">Cómo llegar</h1>
      <p className="text-texto/75 max-w-md mb-8">
        Valle Grande queda a 30 km de la ciudad de San Rafael, subiendo por la Ruta 144 hacia la cordillera.
      </p>
      <iframe
        src="https://www.google.com/maps?q=-34.8321553,-68.476116&output=embed"
        className="w-full h-80 rounded-sm border border-roca/20"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cómo llegar a Valle Grande"
      />
    </section>
  );
}