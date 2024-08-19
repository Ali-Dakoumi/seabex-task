import { useState } from "react";
import { CartItem } from "../types";
import Modal from "./Modal";

function Total({ cartItems }: { cartItems: CartItem[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const hasItems = cartItems.length > 0;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + +item.product.price * item.quantity,
    0
  );
  const shippingFee = hasItems ? 20 : 0;
  const total = subtotal + shippingFee;
  return (
    <div className="w-80 flex flex-col text-textColor gap-4">
      <div className="w-full flex justify-between text-[18px] poppins-regular">
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="w-full flex justify-between text-[18px] poppins-regular">
        <p>Shipping fee</p>
        <p>${shippingFee}</p>
      </div>
      <div className="w-full flex justify-between text-[18px] poppins-regular">
        <p>Coupon</p>
        <p>No</p>
      </div>
      <div className="h-[2px] bg-bgColor w-full"></div>
      <div className="w-full flex justify-between text-[30px] poppins-medium">
        <p>Total</p>
        <p data-testId="total">${total.toFixed(2)}</p>
      </div>
      <button
        data-testId="checkout"
        onClick={openModal}
        className="w-full h-12 bg-success text-white poppins-regular rounded-sm"
      >
        Check out
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 data-testId="modal-title" className="text-xl font-bold">
          Checkout
        </h2>
        <button
          onClick={closeModal}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Total;
