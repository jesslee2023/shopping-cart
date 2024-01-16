import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: 60,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        display: "flex",
        fontSize: "2em",
        color: "white",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div>Duck Shop</div>
      </Link>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
          <Cart />
        </Link>
      </div>
    </div>
  );
}

export default Header;
