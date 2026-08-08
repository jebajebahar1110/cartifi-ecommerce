import CategorySidebar from "../components/CategorySidebar";
import ProductList from "../components/ProductList";

const Home = ({
  products,
  loading,
  error,
  selectedCategories,
  handleCategoryChange,
}) => {
  return (
    <main className="home-page">

      <div className="home-container">

        <CategorySidebar
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />

        <section className="products-section">

          {loading ? (

            <h2 className="loading-message">
              Loading products...
            </h2>

          ) : error ? (

            <div className="error-message">

              <h2>Something went wrong.</h2>

              <p>{error}</p>

            </div>

          ) : (

            <ProductList
              products={products}
            />

          )}

        </section>

      </div>

    </main>
  );
};

export default Home;