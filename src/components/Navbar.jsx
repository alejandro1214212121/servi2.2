// src/components/Navbar.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

const WA_NUMBER = "573227859837";
const WA_COTIZAR = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hola, quisiera solicitar una cotización."
)}`;

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto",  href: "#contacto" },
];

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L.057 23.428a.75.75 0 0 0 .921.921l5.569-1.476A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 0 1-4.964-1.355l-.355-.212-3.686.976.976-3.587-.233-.371A9.725 9.725 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75zm5.472-7.368c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  );
}

function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-[#0F2A3D] border-b border-[#1F4A63] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-medium tracking-widest uppercase text-[#3A8FC1]">
            Distribuciones
          </span>
          <span className="text-white font-semibold text-base tracking-wide">
            ServiPharmaPlus
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-[#8BAFC4] hover:text-white px-3 py-1.5 rounded-md hover:bg-[#1F4A63] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={onCartOpen}
            className="relative text-[#8BAFC4] hover:text-white p-2 rounded-md hover:bg-[#1F4A63] transition-colors"
            aria-label="Abrir carrito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#6BBF59] text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <a
            href={WA_COTIZAR}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#6BBF59] hover:bg-[#4A9A39] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <WhatsAppIcon />
            Cotizar
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onCartOpen}
            className="relative text-[#8BAFC4] hover:text-white p-1"
            aria-label="Abrir carrito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#6BBF59] text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="text-[#8BAFC4] hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1F4A63] px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#8BAFC4] hover:text-white px-3 py-2 rounded-md hover:bg-[#1F4A63] transition-colors"
            >
              {label}
            </a>
          ))}

          <a
            href={WA_COTIZAR}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#6BBF59] hover:bg-[#4A9A39] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
          >
            <WhatsAppIcon />
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;