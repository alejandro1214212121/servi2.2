// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsBanner from "./components/NewsBanner";
import LabsBanner from "./components/LabsBanner";
import WhyUs from "./components/WhyUs";
import ProductGrid from "./components/ProductGrid";
import HowToOrder from "./components/HowToOrder";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { CartProvider, useCart } from "./context/CartContext";

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const { toast } = useCart();

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <NewsBanner />
      <main>
        <section id="inicio">
          <Hero />
          <LabsBanner />
          <WhyUs />
        </section>
        <section id="productos">
          <ProductGrid />
        </section>
        <HowToOrder />
        <Testimonials />
        <section id="contacto">
          <Footer />
        </section>
      </main>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toast message={toast.message} show={toast.show} />
      <WhatsAppFloat />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;