function Hero() {
  return (
    <div className="bg-success text-white py-10 px-20 flex">
      <div className="w-1/2 flex flex-col justify-between items-start">
        <h1>Adidas Men Running Sneakers</h1>
        <p>Performance and design. Taken right to the edge.</p>
        <button>SHOP NOW</button>
      </div>
      <div className="w-1/2 -translate-y-20">
        <img className=" " src="/images/hero.png" alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
