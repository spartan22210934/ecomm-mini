import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/api';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetchProducts();
      setProducts(res.data || []);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
