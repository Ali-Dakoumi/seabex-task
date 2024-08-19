import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Layout from "./components/Layout";
import Breadcrumb from "./components/Breadcrumb";
import SubHeader from "./components/SubHeader";
import { useSelector } from "react-redux";
import { RootState } from "./types";

export default function App() {
  const cartItems = useSelector((state: RootState) => state?.cart?.items);

  return (
    <Router>
      <Layout>
        <SubHeader cartItems={cartItems} />
        <Header />
        <Breadcrumb />
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
