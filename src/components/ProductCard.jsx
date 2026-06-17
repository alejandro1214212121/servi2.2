// src/components/ProductCard.jsx
import { useCart } from "../context/CartContext";

const WA_NUMBER = "573227859837";

function ProductCard({ product }) {
  const { addItem } = useCart();

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hola, quisiera información sobre: ${product.name}`
  )}`;

  const badgeStyles = {
    rx:  "bg-[#E6F3FA] text-[#1F6A99]",
    otc: "bg-[#EBF7E8] text-[#4A9A39]",
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6BBF59]">

      <div className="h-32 bg-[#EBF7E8] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#4A9A39]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4.5 13.5 13.5 4.5a4.243 4.243 0 0 1 6 6L10.5 19.5a4.243 4.243 0 0 1-6-6Z" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>

      <div className="p-3 flex flex-col gap-1.5 flex-1">
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
        {product.category && (
          <p className="text-xs text-gray-400">{product.category}</p>
        )}
      </div>

      <div className="px-3 pb-3 pt-2 border-t border-gray-100 flex items-center gap-2">
        <button
          onClick={() => addItem(product)}
          className="flex-1 text-xs text-white bg-[#6BBF59] hover:bg-[#4A9A39] rounded-md px-2.5 py-1.5 flex items-center justify-center gap-1 transition-colors"
          aria-label={`Agregar ${product.name} al pedido`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Agregar
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