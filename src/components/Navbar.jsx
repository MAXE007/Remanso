import { useState } from "react";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#galeria", label: "Galería" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-noche text-espuma">
      <div className="relative flex items-stretch h-20">
        <div className="relative bg-rio pl-6 pr-10 flex items-center rounded-br-[2.5rem]">
          <a href="#inicio" className="font-display text-lg whitespace-nowrap">
            Valle Grande
          </a>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end gap-10 px-10 text-sm tracking-wide uppercase">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-rio transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#reserva" className="bg-roca text-espuma px-5 py-2.5 rounded-sm normal-case tracking-normal hover:bg-roca/90 transition-colors">
            Reservar
          </a>
        </div>

        <button
          className="md:hidden ml-auto mr-6 self-center"
          onClick={() => setAbierto((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={abierto}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {abierto && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 uppercase text-sm tracking-wide">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setAbierto(false)} className="hover:text-rio">
              {link.label}
            </a>
          ))}
          <a href="#reserva" onClick={() => setAbierto(false)} className="bg-roca text-espuma px-5 py-2.5 rounded-sm normal-case text-center">
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
}