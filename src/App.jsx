// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="productos">
          <ProductGrid />
        </section>
        <section id="contacto">
          <Footer />
        </section>
      </main>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  );
}

export default App;