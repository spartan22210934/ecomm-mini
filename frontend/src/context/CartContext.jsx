import { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchCart,
  addToCartAPI,
  updateCartAPI,
  removeCartAPI,
} from '../api/api';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCart = async () => {
    const res = await fetchCart();
    setCart(res.data || []);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (productId) => {
    setLoading(true);
    await addToCartAPI(productId, 1);
    await loadCart();
    setLoading(false);
  };

  const updateQuantity = async (cartItemId, qty) => {
    if (qty < 1) return;
    await updateCartAPI(cartItemId, qty);
    await loadCart();
  };

  const removeFromCart = async (cartItemId) => {
    await removeCartAPI(cartItemId);
    await loadCart();
  };

  return (
    <CartContext.Provider
      value={{ cart, loading, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
