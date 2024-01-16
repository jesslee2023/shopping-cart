import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import Root from "./pages/Root";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./providers/CartProvider/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Shop />}></Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ItemPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
