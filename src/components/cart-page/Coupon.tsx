function Coupon() {
  return (
    <form className="h-max flex">
      <input
        className="w-3/4 border-l-2 border-t-2 border-b-2 placeholder-[#262626] text-[16px] poppins-regular py-2 px-4"
        type="text"
        placeholder="Voucher code"
      />
      <button
        type="submit"
        className="w-1/4 rounded-tr-sm rounded-br-sm bg-success text-white py-2 px-4 flex justify-center items-center"
      >
        Redeem
      </button>
    </form>
  );
}

export default Coupon;
