import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Header />
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
