// src/components/Hero.jsx
const WA_COTIZAR = `https://wa.me/573227859837?text=${encodeURIComponent(
  "Hola, quisiera solicitar una cotización."
)}`;

const stats = [
  { value: "+50",     label: "clientes activos",              color: "text-[#6BBF59]" },
  { value: "100%",    label: "productos con registro INVIMA",  color: "text-[#3A8FC1]" },
  { value: "Directo", label: "sin intermediarios",            color: "text-[#F0F6FB]" },
];

function Hero() {
  return (
    <section className="bg-[#0F2A3D] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-[10px] font-medium tracking-widest uppercase text-[#3A8FC1] mb-4 flex items-center gap-2">
          <span className="block w-6 h-px bg-[#3A8FC1]" aria-hidden="true" />
          Distribución mayorista
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-[#F0F6FB] leading-tight max-w-2xl mb-4">
          Medicamentos para{" "}
          <span className="text-[#6BBF59]">droguerías,</span>{" "}
          clínicas y hospitales
        </h1>

        <p className="text-[#8BAFC4] text-base max-w-xl leading-relaxed mb-8">
          Genéricos, vitaminas e insumos con entrega directa a tu institución.
          Sin intermediarios.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#productos"
            className="flex items-center gap-1.5 bg-[#6BBF59] hover:bg-[#4A9A39] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Ver catálogo
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>

          <a
            href={WA_COTIZAR}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#1F4A63] text-[#8BAFC4] hover:border-[#3A8FC1] hover:text-[#F0F6FB] px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Solicitar cotización
          </a>
        </div>

        <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#1F4A63]">
          {stats.map(({ value, label, color }) => (
            <div key={label}>
              <p className={`text-xl font-semibold ${color}`}>{value}</p>
              <p className="text-xs text-[#8BAFC4] mt-0.5">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;