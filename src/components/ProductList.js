import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

const ProductList = ({ products }) => {
  return (
    <section className="product-list-section">
      <div className="product-list-header">
        <h2>Available Products</h2>

        <p>
          {products.length}{" "}
          {products.length === 1
            ? "product found"
            : "products found"}
        </p>
      </div>

      {products.length === 0 ? (
        <div className="no-products-message">
          <h3>No products found.</h3>
          <p>
            Try changing the search text or selected
            categories.
          </p>
        </div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;