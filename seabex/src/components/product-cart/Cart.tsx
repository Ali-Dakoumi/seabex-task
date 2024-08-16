import Price from "./Price";
import { Product } from "../../types";
import Rating from "./Rating";

function Cart({ product }: { product: Product }) {
  return (
    <article className="relative group flex flex-col border-[3px] boder-borderColor cursor-pointer">
      <div className="absolute hidden group-hover:flex  bg-white/95 top-4 right-4 left-4 w-[calc(100%-2rem)] aspect-square justify-center items-center">
        <div className="flex gap-4">
          <img src="/hearts.svg" alt="hearts icon" />
          <img src="/cart.svg" alt="cart icon" />
        </div>
      </div>
      <img
        src={`/product-${Math.floor(Math.random() * 3) + 1}.jpg`}
        alt={product.title}
        className="w-full aspect-[1.099/1] object-cover"
      />
      <div className="flex flex-col gap-1 items-center justify-center p-2 pb-4">
        <h2 className="text-[17px] font-[700] text-center text-primary">
          {product.title}
        </h2>

        <Rating rating={4} maxStars={5} />
        <div className="flex gap-2 items-center">
          <Price>$299,43</Price>
          <Price variant={"linethrough"}>$534,33</Price>
          <Price variant="percentOff">24% Off</Price>
        </div>
      </div>
    </article>
  );
}

export default Cart;
