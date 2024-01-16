import { useCart } from "../providers/CartProvider/CartProvider.hook";

function Cart() {
  const { count } = useCart();

  return <div>Cart ({count})</div>;
}

export default Cart;
