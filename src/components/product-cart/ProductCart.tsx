import Price from "./Price";
import { Product } from "../../types";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addOrUpdateItem } from "../../slices/cart";

function ProductCart({
  product,
  withBadge = false,
}: {
  product: Product;
  withBadge?: boolean;
}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      product: product,
      quantity: 1,
    };

    dispatch(addOrUpdateItem(cartItem));
  };
  return (
    <article
      data-testId={`productCart-${product.id}`}
      className="relative group flex flex-col border-[3px] boder-borderColor cursor-pointer"
    >
      <div className="z-10 absolute hidden group-hover:flex  bg-white/95 top-4 right-4 left-4 w-[calc(100%-2rem)] aspect-square justify-center items-center">
        <div className="flex gap-4">
          <button>
            <img src="/images/hearts.svg" alt="hearts icon" />
          </button>

          <button
            data-testId={`addToCart-${product.id}`}
            onClick={handleAddToCart}
          >
            <img src="/images/cart.svg" alt="cart icon" />
          </button>
        </div>
      </div>
      {withBadge && (
        <div className="absolute top-0 left-0 px-4 py-1 text-white bg-bgRed">
          HOT
        </div>
      )}
      <img
        src={`/images/product-${Math.floor(Math.random() * 3) + 1}.jpg`}
        alt={product.title}
        className="w-full aspect-[1.099/1] object-cover"
      />
      <div className="flex flex-col gap-1 items-center justify-center p-2 pb-4">
        <h2 className="text-[17px] font-[700] text-center text-primary">
          {product.title}
        </h2>

        <Rating rating={4} maxStars={5} />
        <div className="flex gap-2 items-center">
          <Price>${product.price}</Price>
          <Price variant="linethrough">$534,33</Price>
          <Price variant="percentOff">24% Off</Price>
        </div>
      </div>
    </article>
  );
}

export default ProductCart;
