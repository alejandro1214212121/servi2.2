// src/components/ProductGrid.jsx
import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const labs = ["Todos", "American Generics", "Colmed", "Genfar", "La Sante"];

const labColors = {
  "Todos":             "border-[#6BBF59] text-[#4A9A39]",
  "American Generics": "border-orange-400 text-orange-600",
  "Colmed":            "border-purple-400 text-purple-600",
  "Genfar":            "border-blue-400 text-blue-600",
  "La Sante":          "border-rose-400 text-rose-600",
};

const labCounts = labs.reduce((acc, lab) => {
  acc[lab] = lab === "Todos"
    ? products.length
    : products.filter((p) => p.lab === lab).length;
  return acc;
}, {});

function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col animate-pulse">
      <div className="h-32 bg-gray-100" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-3 bg-gray-100 rounded w-16" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-3 bg-gray-100 rounded w-3/4" />
      </div>
      <div className="px-3 pb-3 pt-2 border-t border-gray-50 flex gap-2">
        <div className="h-7 bg-gray-100 rounded-md flex-1" />
        <div className="h-7 bg-gray-100 rounded-md w-14" />
      </div>
    </div>
  );
}

function useIntersectionObserver() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function AnimatedCard({ product, index }) {
  const [ref, visible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className="transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${(index % 5) * 60}ms`,
      }}
    >
      <ProductCard product={product} />
    </div>
  );
}

function ProductGrid() {
  const [selectedLab, setSelectedLab]         = useState("Todos");
  const [search, setSearch]                   = useState("");
  const [sortBy, setSortBy]                   = useState("default");
  const [animating, setAnimating]             = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [loading, setLoading]                 = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  function applyFilters(lab, query, sort) {
    let result = lab === "Todos" ? products : products.filter((p) => p.lab === lab);
    if (query.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (sort === "az") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "lab") result = [...result].sort((a, b) => (a.lab ?? "").localeCompare(b.lab ?? ""));
    return result;
  }

  function handleLabChange(lab) {
    if (lab === selectedLab) return;
    setAnimating(true);
    setTimeout(() => {
      setSelectedLab(lab);
      setDisplayedProducts(applyFilters(lab, search, sortBy));
      setAnimating(false);
    }, 200);
  }

  function handleSearch(e) {
    const q = e.target.value;
    setSearch(q);
    setDisplayedProducts(applyFilters(selectedLab, q, sortBy));
  }

  function handleSort(e) {
    const s = e.target.value;
    setSortBy(s);
    setDisplayedProducts(applyFilters(selectedLab, search, s));
  }

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">

      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4A9A39] mb-1 flex items-center gap-2">
          <span className="block w-4 h-0.5 bg-[#6BBF59] rounded" aria-hidden="true" />
          Disponibles ahora
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Catálogo de medicamentos
        </h2>
      </div>

      {/* Buscador + Ordenar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Buscar medicamento..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BBF59] focus:border-transparent transition-all"
          />
          {search && (
            <button
              onClick={() => { setSearch(""); setDisplayedProducts(applyFilters(selectedLab, "", sortBy)); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
              aria-label="Limpiar búsqueda"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <select
          value={sortBy}
          onChange={handleSort}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#6BBF59] transition-all"
        >
          <option value="default">Ordenar por...</option>
          <option value="az">Nombre A → Z</option>
          <option value="za">Nombre Z → A</option>
          <option value="lab">Laboratorio</option>
        </select>
      </div>

      {/* Pills de laboratorio con conteo */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-400 mr-1">Laboratorio:</span>
        {labs.map((lab) => (
          <button
            key={lab}
            onClick={() => handleLabChange(lab)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
              selectedLab === lab
                ? `${labColors[lab]} bg-white shadow-sm scale-105`
                : "border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600"
            }`}
          >
            {lab}
            <span className="ml-1 opacity-60">({labCounts[lab]})</span>
          </button>
        ))}
        {(search || selectedLab !== "Todos") && (
          <span className="text-xs text-gray-400 ml-1">
            {displayedProducts.length} resultado{displayedProducts.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Grid */}
      <div className={`transition-all duration-200 ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : displayedProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-3 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <p className="text-base font-medium">Sin resultados para "{search}"</p>
            <p className="text-sm mt-1">Intenta con otro nombre o cambia el laboratorio.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayedProducts.map((product, index) => (
              <AnimatedCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>

    </section>
  );
}

export default ProductGrid;