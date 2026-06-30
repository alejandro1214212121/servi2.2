// src/components/Testimonials.jsx
const testimonials = [
  {
    text: "Excelente servicio, los pedidos llegan completos y a tiempo. Los precios son muy competitivos comparado con otros distribuidores.",
    name: "Droguería La Salud",
    location: "Medellín",
    initials: "DS",
  },
  {
    text: "Llevamos más de un año trabajando con ServiPharmaPlus. La atención por WhatsApp es rápida y siempre tienen disponibilidad.",
    name: "Clínica Santa María",
    location: "Bogotá",
    initials: "CS",
  },
  {
    text: "Lo que más valoro es que todos los productos tienen registro INVIMA y la facturación es impecable. 100% recomendados.",
    name: "Farmacia Central",
    location: "Cali",
    initials: "FC",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#F4F5F6] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A9A39] mb-2">Lo que dicen nuestros clientes</p>
          <h2 className="text-2xl font-bold text-gray-900">Testimonios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#6BBF59] hover:shadow-sm transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6BBF59]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EBF7E8] flex items-center justify-center text-[#4A9A39] text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;