import { CartItem as ICartItem } from "../types";
import CartItem from "./CartItem";

function CartItems({ cartItems }: { cartItems: ICartItem[] }) {
  console.log("🚀 ~ CartItems ~ cartItems:", cartItems);
  return (
    <>
      {cartItems.length === 0 && (
        <h2 className="text-3xl poppins-medium">Your cart is empty.</h2>
      )}
      {cartItems.length > 0 && (
        <>
          <div className="w-full grid grid-cols-[50px_1fr_100px_200px_100px]">
            <div></div>
            <div>Product</div>
            <div>Price</div>
            <div>QTY</div>
            <div>Unit price</div>
          </div>
          <div className="w-full h-[2px] bg-bgColor"></div>
          <ul className="w-full space-y-8">
            {cartItems?.map((item: ICartItem) => (
              <CartItem key={item.product.id} product={item} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default CartItems;
