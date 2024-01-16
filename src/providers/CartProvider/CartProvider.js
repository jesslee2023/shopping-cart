import { useState } from "react";
import CartProviderContext from "./CartProvider.context";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]),
    [count, setCount] = useState(0),
    [totalValue, setTotalValue] = useState(0);

  const get = () => {
    return cartItems;
  };

  const addRemoveFromCart = (item, quantity) => {
    let foundItemInCart = false;

    const cart = cartItems.map((d) => {
      let newCount = d.count;

      if (d.id === item.id) {
        foundItemInCart = true;
        newCount = newCount + quantity;
      }

      return {
        ...d,
        count: newCount,
      };
    });

    if (!foundItemInCart && quantity > 0) {
      cart.push({ ...item, count: quantity });
    }

    const readyCart = cart.filter((d) => d.count > 0);

    setCartItems(readyCart);
    
  };

  const add = (item, quantity) => {
    addRemoveFromCart(item, quantity);
    setCount(count + quantity);
    setTotalValue(totalValue + item.price * quantity);
  };

  const remove = (item, quantity) => {
    addRemoveFromCart(item, -quantity);
    setCount(count - quantity);
    setTotalValue(totalValue + item.price * -quantity);
  };

  const value = {
    get,
    add,
    remove,
    count,
    totalValue,
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
