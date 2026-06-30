// src/context/CartContext.jsx  — agrega soporte para toast
import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "" });

  const addItem = useCallback((product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setToast({ show: false, message: "" });
    setTimeout(() => {
      setToast({ show: true, message: `✓ ${product.name} agregado al pedido` });
    }, 10);
  }, []);

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function changeQty(id, qty) {
    if (qty < 1) return removeItem(id);
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = items.reduce((acc, i) => acc + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, changeQty, clearCart, totalItems, toast }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}