// src/components/LabsBanner.jsx
const labs = [
  { name: "American Generics", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
  { name: "Colmed",            color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
  { name: "Genfar",            color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-100"   },
  { name: "La Sante",          color: "text-rose-600",   bg: "bg-rose-50",   border: "border-rose-100"   },
];

function LabsBanner() {
  return (
    <section className="bg-white border-y border-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-center text-gray-400 uppercase tracking-widest mb-6">
          Laboratorios que distribuimos
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border ${lab.bg} ${lab.border} transition-transform duration-200 hover:scale-105`}
            >
              <span className={`text-lg font-bold ${lab.color}`}>
                {lab.name.split(" ").map((w) => w[0]).join("")}
              </span>
              <span className="text-sm font-medium text-gray-700">{lab.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LabsBanner;