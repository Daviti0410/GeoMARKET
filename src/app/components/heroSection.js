export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative flex-1 h-96 md:h-lvh">
        <img
          src="/images/jeans.jpg"
          alt="Jeans"
          className="w-full h-full object-cover"
        />
        <div className=" absolute inset-0 flex items-center justify-center space-x-4 p-8 text-white">
          <h2 className="text-4xl font-bold text-shadow cursor-default">
            JEANS FROM
          </h2>
          <p className="text-3xl text-black font-semibold text-shadow cursor-default">
            20$
          </p>
        </div>
      </div>
      <div className="relative flex-1 h-96 md:h-screen">
        <img
          src="/images/winterClothes.jpg"
          alt="Winter Sale"
          className="w-full h-screen object-cover"
        />
        <div className=" absolute inset-0 flex items-center justify-center p-8 space-x-4  text-white">
          <h2 className="text-4xl font-bold text-shadow cursor-default">
            WINTER SALE
          </h2>
          <p className="text-3xl text-slate-400 text-shadow font-semibold cursor-default">
            40%
          </p>
        </div>
      </div>
    </div>
  );
}
