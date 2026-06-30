// src/components/ProductCard.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

const WA_NUMBER = "573115166081";

const labColors = {
  "American Generics": "bg-orange-50 text-orange-600 border-orange-200",
  "Colmed":            "bg-purple-50 text-purple-600 border-purple-200",
  "Genfar":            "bg-blue-50 text-blue-600 border-blue-200",
  "La Sante":          "bg-rose-50 text-rose-600 border-rose-200",
};

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hola, quisiera información sobre: ${product.name} (${product.lab})`
  )}`;

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  const badgeStyles = {
    rx:  "bg-[#E6F3FA] text-[#1F6A99]",
    otc: "bg-[#EBF7E8] text-[#4A9A39]",
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#6BBF59]">

      <div className="h-32 bg-[#EBF7E8] flex items-center justify-center overflow-hidden relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#4A9A39] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M4.5 13.5 13.5 4.5a4.243 4.243 0 0 1 6 6L10.5 19.5a4.243 4.243 0 0 1-6-6Z" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        )}

        {/* Overlay con botón al hacer hover */}
        <div className="absolute inset-0 bg-[#0F2A3D]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAdd}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all duration-200 translate-y-2 group-hover:translate-y-0 ${
              added
                ? "bg-[#4A9A39] text-white scale-95"
                : "bg-white text-[#0F2A3D] hover:bg-[#6BBF59] hover:text-white"
            }`}
          >
            {added ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Agregado
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Agregar
              </>
            )}
          </button>
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1.5 flex-1">
        {product.lab && (
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border self-start ${labColors[product.lab] ?? "bg-gray-50 text-gray-500 border-gray-200"}`}>
            {product.lab}
          </span>
        )}
        {product.requiresPrescription != null && (
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full self-start ${
            product.requiresPrescription ? badgeStyles.rx : badgeStyles.otc
          }`}>
            {product.requiresPrescription ? "Receta" : "Venta libre"}
          </span>
        )}
        <p className="text-sm font-medium text-gray-900 leading-snug">
          {product.name}
        </p>
      </div>

      <div className="px-3 pb-3 pt-2 border-t border-gray-100 flex items-center gap-2">
        <button
          onClick={handleAdd}
          className={`flex-1 text-xs font-medium rounded-md px-2.5 py-1.5 flex items-center justify-center gap-1 transition-all duration-200 ${
            added
              ? "bg-[#4A9A39] text-white scale-95"
              : "bg-[#6BBF59] hover:bg-[#4A9A39] text-white"
          }`}
          aria-label={`Agregar ${product.name} al pedido`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d={added ? "M20 6 9 17l-5-5" : "M12 5v14M5 12h14"} />
          </svg>
          {added ? "Agregado" : "Agregar"}
        </button>
        
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#4A9A39] border border-[#6BBF59] rounded-md px-2.5 py-1.5 flex items-center gap-1 hover:bg-[#EBF7E8] transition-colors"
          aria-label={`Ver información de ${product.name}`}
        >
          Info
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>

    </div>
  );
}

export default ProductCard;