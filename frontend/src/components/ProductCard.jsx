import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, loading } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <button onClick={() => addToCart(product._id)} disabled={loading}>
        {loading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
}
