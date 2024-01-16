import { Link } from "react-router-dom";
import { useCart } from "../providers/CartProvider/CartProvider.hook";
import { products } from "../data";

export default function CartPage() {
  const { get, add, remove, count, totalValue } = useCart();
  const cartItems = get();

  if (count === 0) {
    return (
      <div>
        <div>No Items in Cart!</div>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return(
      <div>
        <h1>TotalValue: {totalValue} SEK</h1>
      {
        cartItems.map((item) => {
        const foundItem = products.find((product) => {
          return product.id === item.id;
        });

        if (foundItem) {
          return (
            <CartItem
              key={item.id}
              count={item.count}
              product={foundItem}
              onAdd={add}
              onRemove={remove}
            />
          );
        } else return undefined;
      })
    }
    </div>
  );
}

function CartItem({ count, product, onAdd, onRemove }) {
  const { name, price, image } = product;

  return (
    <div style={{ padding: "2em", display: "flex" }}>
      <img width={75} height={75} src={image} alt={name} />
      <p>
        {name} - {price} SEK
      </p>
      <p style={{ marginLeft: 20 }}>{count} in cart</p>
      <button
        style={{ marginLeft: 20 }}
        onClick={(e) => {
          e.preventDefault();
          onAdd(product, 1);
        }}
      >
        + Add to cart
      </button>
      <button
        style={{ marginLeft: 20 }}
        onClick={(e) => {
          e.preventDefault();
          onRemove(product, 1);
        }}
      >
        - Remove from cart
      </button>
    </div>
  );
}
