import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <h1>Cartifi E-Commerce</h1>

        <ProductList products={[]} />
      </main>
    </div>
  );
}

export default App;