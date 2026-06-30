// src/components/NewsBanner.jsx
function NewsBanner() {
  return (
    <div className="bg-[#6BBF59] text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <span className="text-white/80 text-xs uppercase tracking-widest hidden sm:block">Novedad</span>
        <span className="w-1 h-1 rounded-full bg-white/50 hidden sm:block" />
        <span>🆕 Nuevos productos Genfar y La Sante disponibles — consulta disponibilidad por WhatsApp</span>
        <a
          href={`https://wa.me/573115166081?text=${encodeURIComponent("Hola, quisiera información sobre los nuevos productos disponibles.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline underline-offset-2 text-white hover:text-white/80 transition-colors shrink-0"
        >
          Consultar →
        </a>
      </div>
    </div>
  );
}

export default NewsBanner;