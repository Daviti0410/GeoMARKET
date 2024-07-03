export default function slideBar({ handleCategoryClick }) {
  return (
    <div className="box-border h-auto w-64 p-4 border-4">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
        Shoes for Men
      </h2>
      <ul className="space-y-2">
        <li
          className="font-semibold cursor-pointer"
          onClick={() => handleCategoryClick("Sport")}
        >
          Sport
        </li>
        <li
          className="font-semibold cursor-pointer"
          onClick={() => handleCategoryClick("Business")}
        >
          Business
        </li>
        <li
          className="font-semibold cursor-pointer"
          onClick={() => handleCategoryClick("Casual")}
        >
          Casual
        </li>
        <li
          className="font-semibold cursor-pointer"
          onClick={() => handleCategoryClick("Winter")}
        >
          Winter
        </li>
        <li
          className="font-semibold cursor-pointer"
          onClick={() => handleCategoryClick("Flip-Flops")}
        >
          Flip-Flops
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-4">Filter By</h2>
      <ul className="space-y-2 border-t-2 border-gray-300 pt-4">
        <li className="font-semibold">Size</li>
        <li className="font-semibold">Color</li>
        <li className="font-semibold">Price</li>
      </ul>
    </div>
  );
}
