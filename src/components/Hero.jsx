export default function Hero() {
  return (
    <section id="inicio" className="relative h-[calc(100dvh-5rem)] min-h-[420px] flex items-end overflow-hidden bg-roca/20">
      {/* Reemplazar este comentario por la foto o el video real cuando lleguen:
      <img src="/hero.jpg" alt="Bajando el Atuel en gomón" className="absolute inset-0 w-full h-full object-cover" />

      o para video:
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      */}

      <div className="absolute inset-0 bg-gradient-to-t from-noche/85 via-noche/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pb-16 text-espuma">
        <p className="text-sm uppercase tracking-wide text-espuma/80 mb-3">Valle Grande · Río Atuel · San Rafael</p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
          Bajá el Atuel
          <br />
          en gomón.
        </h1>
        <p className="mt-6 text-lg max-w-md text-espuma/90">
          Salidas de rafting cada hora en Valle Grande. Reservá tu lugar y coordinamos todo por WhatsApp.
        </p>
      </div>
    </section>
  );
}