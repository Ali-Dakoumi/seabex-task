import { useDispatch } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "../slices/cart";

function Quantity({ id, quantity }: { id: string; quantity: number }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseItemQuantity({ id, amount: 1 }));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity({ id, amount: 1 }));
  };

  return (
    <div className="flex items-center w-max bg-bgColor">
      <button
        onClick={handleDecreaseQuantity}
        className="text-[18px] py-1 px-2 text-iconColor"
      >
        -
      </button>
      <span className="text-[18px] poppins-regularpy-1 px-2 "> {quantity}</span>
      <button
        onClick={handleIncreaseQuantity}
        className="text-[18px] py-1 px-2 text-iconColor"
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
