const API_BASE = 'http://localhost:5000';

export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE}/api/products`);
  return res.json();
};

export const fetchCart = async () => {
  const res = await fetch(`${API_BASE}/api/cart`);
  return res.json();
};

export const addToCartAPI = async (productId, quantity = 1) => {
  const res = await fetch(`${API_BASE}/api/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity }),
  });
  return res.json();
};

export const updateCartAPI = async (cartItemId, quantity) => {
  const res = await fetch(`${API_BASE}/api/cart/${cartItemId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity }),
  });
  return res.json();
};

export const removeCartAPI = async (cartItemId) => {
  const res = await fetch(`${API_BASE}/api/cart/${cartItemId}`, {
    method: 'DELETE',
  });
  return res.json();
};
