// src/components/Footer.jsx
const WA_COTIZAR = `https://wa.me/573227859837?text=${encodeURIComponent(
  "Hola, quisiera solicitar una cotización."
)}`;

function Footer() {
  return (
    <footer className="bg-[#0F2A3D] border-t border-[#1F4A63] text-[#8BAFC4]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <p className="text-[10px] font-medium tracking-widest uppercase text-[#3A8FC1] mb-1">
            Distribuciones
          </p>
          <p className="text-white font-semibold text-lg mb-3">
            ServiPharmaPlus
          </p>
          <p className="text-sm leading-relaxed">
            Distribución mayorista de medicamentos para droguerías, clínicas y hospitales en Colombia.
          </p>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Navegación</p>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { label: "Inicio",    href: "#inicio" },
              { label: "Productos", href: "#productos" },
              { label: "Contacto",  href: "#contacto" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-sm font-medium mb-4">Contacto</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6BBF59] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.89-.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
              </svg>
              <span>322 785 9837</span>
            </li>
            <li>
              <a
                href={WA_COTIZAR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6BBF59] hover:bg-[#4A9A39] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors mt-1"
              >
                Cotizar por WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[#1F4A63] px-6 py-4 text-center text-xs text-[#3A8FC1]">
        © 2026 Distribuciones ServiPharmaPlus — Todos los derechos reservados
      </div>

    </footer>
  );
}

export default Footer;