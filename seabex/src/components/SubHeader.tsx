import { CartItem } from "../types";
import { Link } from "react-router-dom";

function SubHeader({ cartItems }: { cartItems: CartItem[] }) {
  const totalItems: number | null =
    cartItems.length === 0 ? null : cartItems.length;

  return (
    <div className="flex py-4 justify-between items-center">
      <div className="flex gap-4">
        <button className="flex gap-2 items-center">
          EN <img src="/images/arrow-down.svg" alt="" />
        </button>
        <button className="flex gap-2 items-center">
          USD <img src="/images/arrow-down.svg" alt="" />
        </button>
      </div>
      <div>
        <div className="flex gap-4">
          <button className="flex gap-2 items-center">
            <img src="/images/profile-icon.svg" alt="" /> My Profile
          </button>
          <Link to="/cart" className="flex gap-2 items-center relative">
            <img src="/images/cart-icon.svg" alt="" />
            {totalItems && (
              <span
                data-testID="totalItems"
                className="bg-error text-white rounded-full absolute -top-2 -right-2 text-xs h-4 w-4 flex justify-center items-center"
              >
                {totalItems}
              </span>
            )}
          </Link>
          <button>
            <img src="/images/search-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
