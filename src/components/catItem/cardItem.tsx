import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cardSlice/cartslice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();


  return (
    <div className="max-w-2xl mx-auto pt-56 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="flex justify-between border p-4 mb-2">
            <div>
              <img src={item.photo} alt={item.name} className="w-16 h-16 object-cover" />
              <h3 className="text-lg">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item._id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
