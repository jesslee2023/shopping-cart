import { useContext } from "react";
import CartProviderContext from "./CartProvider.context";

export const useCart = () => {
  return useContext(CartProviderContext);
};
