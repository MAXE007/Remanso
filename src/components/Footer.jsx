import { Link } from "react-router-dom";

const NUMERO_WHATSAPP = "5492610000000";

export default function Footer() {
  return (
    <footer className="bg-noche text-espuma">
      <div className="max-w-3xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl mb-3">Valle Grande</p>
          <p className="text-sm text-espuma/70 leading-relaxed">Rafting en el Río Atuel, a 30 km de San Rafael, Mendoza.</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-espuma/50 mb-3">Recorré</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-rio transition-colors">Inicio</Link></li>
            <li><Link to="/como-llegar" className="hover:text-rio transition-colors">Cómo llegar</Link></li>
            <li><Link to="/preguntas-frecuentes" className="hover:text-rio transition-colors">Preguntas frecuentes</Link></li>
            <li><Link to="/reservar" className="hover:text-rio transition-colors">Reservar</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-espuma/50 mb-3">Contacto</p>
          <a href={`https://wa.me/${NUMERO_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-rio transition-colors">
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-espuma/10 py-5 text-center text-xs text-espuma/50">
        © {new Date().getFullYear()} Valle Grande · Rafting en San Rafael, Mendoza
      </div>
    </footer>
  );
}