import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  calculateTotal,
  formatCurrency,
} from "../utils/utils";

import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, dispatch } =
    useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const handleClearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const totalPrice = calculateTotal(cartItems);

  return (
    <div className="cart-page">

      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (

          <div className="empty-cart-message">
            <h2>Your cart is empty.</h2>
            <p>Add some products to your cart.</p>
          </div>

        ) : (

          <>
            <div className="cart-items">

              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">

                    <h3>{item.title}</h3>

                    <p>
                      {formatCurrency(item.price)}
                    </p>

                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="cart-summary">

              <h2>
                Total :
                {" "}
                {formatCurrency(totalPrice)}
              </h2>

              <button
                className="clear-cart-button"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
};

export default Cart;