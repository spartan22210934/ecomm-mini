import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) return <h2>Your cart is empty</h2>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item._id} className="cart-item">
          <img src={item.product.image} alt={item.product.name} />
          <div>
            <h4>{item.product.name}</h4>
            <p>₹{item.product.price}</p>

            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={e =>
                updateQuantity(item._id, Number(e.target.value))
              }
            />

            <button onClick={() => removeFromCart(item._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
