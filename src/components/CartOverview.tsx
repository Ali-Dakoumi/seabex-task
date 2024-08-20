import { useSelector } from "react-redux";
import { RootState } from "../types";
import Total from "./cart-page/Total";
import Coupon from "./cart-page/Coupon";
import CartItems from "./cart-page/CartItems";

function CartOverview() {
  const cartItems = useSelector((state: RootState) => state?.cart?.items);
  // const hasItems = cartItems.length > 0;

  return (
    <div className="space-y-20">
      {
        <div className="space-y-8">
          <CartItems cartItems={cartItems} />
        </div>
      }
      <div className="flex justify-between h-max">
        <Coupon />
        <Total cartItems={cartItems} />
      </div>
    </div>
  );
}

export default CartOverview;
