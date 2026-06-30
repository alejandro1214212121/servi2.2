// src/components/WhyUs.jsx
function WhyUs() {
  const points = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Registro INVIMA vigente",
      desc: "Todos nuestros productos cuentan con registro sanitario vigente y cadena de frío garantizada.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      title: "Precio directo de laboratorio",
      desc: "Sin intermediarios. Compramos directo a los laboratorios y trasladamos el ahorro a tu institución.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="m16 8 5 3-5 3V8z" />
        </svg>
      ),
      title: "Atención personalizada",
      desc: "Un asesor dedicado responde tu pedido por WhatsApp con disponibilidad y precios en minutos.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
      title: "Entrega rápida",
      desc: "Despachos ágiles a droguerías, clínicas y hospitales con seguimiento en tiempo real.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A9A39] mb-2 flex items-center gap-2">
            <span className="block w-4 h-0.5 bg-[#6BBF59] rounded" />
            Nuestra propuesta
          </p>
          <h2 className="text-2xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="p-5 border border-gray-100 rounded-xl hover:border-[#6BBF59] hover:shadow-sm transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#EBF7E8] flex items-center justify-center text-[#4A9A39] mb-4 group-hover:bg-[#6BBF59] group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;