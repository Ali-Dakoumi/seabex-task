function Hero() {
  return (
    <div className="relative bg-success text-white py-20 px-20 flex ">
      <div className="w-1/2 flex flex-col justify-between items-start gap-10">
        <h1 className="text-[30px] poppins-medium">
          Adidas Men Running Sneakers
        </h1>
        <p className="text-[14px] poppins-regular">
          Performance and design. Taken right to the edge.
        </p>
        <button className="relative text-[12px] poppins-semibold">
          SHOP NOW
          <span className="absolute -bottom-2 left-0 h-[2px] bg-white w-1/2"></span>
        </button>
      </div>
      <div className="w-1/2 absolute right-4 -top-12">
        <img
          className="block w-full h-auto"
          src="/images/hero.png"
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default Hero;
