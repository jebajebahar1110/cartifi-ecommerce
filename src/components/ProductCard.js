import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { formatCurrency } from "../utils/utils";

import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { cartItems, dispatch } = useContext(CartContext);

  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const cardStyle = {
    transform: isHovered
      ? "translateY(-6px) scale(1.02)"
      : "translateY(0) scale(1)",
    boxShadow: isHovered
      ? "0 14px 30px rgba(15, 23, 42, 0.18)"
      : "0 4px 14px rgba(15, 23, 42, 0.08)",
    borderColor: isHovered
      ? "#2563eb"
      : "#e2e8f0",
  };

  return (
    <article
      className="product-card"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-card-content">
        <p className="product-category">
          {product.category}
        </p>

        <h3 className="product-title">
          {product.title}
        </h3>

        <div className="product-information">
          <p className="product-price">
            {formatCurrency(product.price)}
          </p>

          {product.rating && (
            <p className="product-rating">
              ⭐ {product.rating.rate}
              <span>
                {" "}
                ({product.rating.count})
              </span>
            </p>
          )}
        </div>

        <button
          type="button"
          className={`add-to-cart-button ${
            isInCart ? "added-button" : ""
          }`}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart
            ? "Already in Cart"
            : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;