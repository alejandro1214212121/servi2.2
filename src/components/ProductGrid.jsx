// src/components/ProductGrid.jsx
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const visibleProducts = products.filter((p) => p.image);

function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">

      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4A9A39] mb-1 flex items-center gap-2">
          <span className="block w-4 h-0.5 bg-[#6BBF59] rounded" aria-hidden="true" />
          Disponibles ahora
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Catálogo de medicamentos
        </h2>
      </div>

      {visibleProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">Sin productos disponibles</p>
          <p className="text-sm mt-1">Vuelve pronto, estamos actualizando el catálogo.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </section>
  );
}

export default ProductGrid;