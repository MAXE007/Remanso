import { useState } from "react";

const PREGUNTAS = [
  { pregunta: "¿Hay que saber nadar?", respuesta: "Completá acá la respuesta real." },
  { pregunta: "¿Qué llevo puesto?", respuesta: "Completá acá la respuesta real." },
  { pregunta: "¿Hasta qué edad pueden participar?", respuesta: "Completá acá la respuesta real." },
];

export default function Faq() {
  const [abierta, setAbierta] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-roca mb-8">Preguntas frecuentes</h1>
      <div className="border-t border-roca/20">
        {PREGUNTAS.map((item, i) => {
          const estaAbierta = abierta === i;
          return (
            <div key={item.pregunta} className="border-b border-roca/20">
              <button onClick={() => setAbierta(estaAbierta ? null : i)} className="w-full flex items-center justify-between py-5 text-left" aria-expanded={estaAbierta}>
                <span className="font-medium">{item.pregunta}</span>
                <span className="text-roca text-xl leading-none">{estaAbierta ? "–" : "+"}</span>
              </button>
              {estaAbierta && <p className="pb-5 text-texto/75 max-w-md">{item.respuesta}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}