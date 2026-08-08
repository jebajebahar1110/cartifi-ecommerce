import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import "../styles/Navbar.css";

const Navbar = ({ searchText, setSearchText }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Cartifi
        </Link>

        <div className="navbar-search">
          <input
            type="text"
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
            placeholder="Search products..."
            aria-label="Search products"
          />
        </div>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/cart" className="navbar-link cart-link">
            Cart

            <span className="cart-count">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;