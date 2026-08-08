import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import localProducts from "./data/products.json";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch products from the API."
          );
        }

        const data = await response.json();

        setProducts(data);
      } catch (fetchError) {
        console.error(
          "Product API error:",
          fetchError
        );

        if (localProducts.length > 0) {
          setProducts(localProducts);
          setError("");
        } else {
          setProducts([]);
          setError(
            "Products could not be loaded. Please try again later."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories((previousCategories) => {
      const categoryAlreadySelected =
        previousCategories.includes(category);

      if (categoryAlreadySelected) {
        return previousCategories.filter(
          (selectedCategory) =>
            selectedCategory !== category
        );
      }

      return [...previousCategories, category];
    });
  };

  const filteredProducts = products.filter(
    (product) => {
      const productTitle = product.title.toLowerCase();

      const enteredSearchText = searchText
        .trim()
        .toLowerCase();

      const matchesSearch =
        productTitle.includes(enteredSearchText);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(
          product.category
        );

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div className="app">
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={filteredProducts}
              loading={loading}
              error={error}
              selectedCategories={
                selectedCategories
              }
              handleCategoryChange={
                handleCategoryChange
              }
            />
          }
        />

        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;