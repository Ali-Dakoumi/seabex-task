import { useDispatch } from "react-redux";
import { CartItem as ICartItem } from "../types";
import Quantity from "./Quantity";
import { removeItem } from "../slices/cart";

function CartItem({ product }: { product: ICartItem }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(product.product.id.toString()));
  };

  return (
    <li className="w-full grid grid-cols-[50px_1fr_100px_200px_100px] items-center">
      <button onClick={handleRemoveItem} className="w-full">
        <img src="/images/delete.svg" alt="delete icon" />
      </button>
      <div className="flex items-center gap-4">
        <img
          className="h-24 aspect-video object-cover"
          src={product.product.image}
          alt={product.product.title}
        />
        <p data-testId="product-title"> {product.product.title} </p>
      </div>
      <div>${+product.product.price * product.quantity}</div>
      <div>
        <Quantity
          id={product.product.id.toString()}
          quantity={product.quantity}
        />
      </div>
      <div>${product.product.price}</div>
    </li>
  );
}

export default CartItem;
