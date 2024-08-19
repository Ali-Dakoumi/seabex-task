import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="w-full flex justify-between py-4">
      <Link to="/" className="text-3xl font-bold">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link data-testId="cart" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
