import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";

export default function Navbar() {
  const [menuState, setMenuState] = useState({
    isWomenOpen: false,
    isMenOpen: false,
  });
  const [clickCount, setClickCount] = useState(0);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleMenu = (menuType, event) => {
    event.preventDefault();
    event.stopPropagation();
    setMenuState((prevState) => {
      const newState = {
        ...prevState,
        isWomenOpen: menuType === "Women" ? !prevState.isWomenOpen : false,
        isMenOpen: menuType === "Men" ? !prevState.isMenOpen : false,
      };
      setClickCount((prevCount) => prevCount + 1);
      return newState;
    });
  };

  const handleCategoryClick = (category, subCategory) => {
    router.push(`/search?category=${category}&subCategory=${subCategory}`);
  };

  const categories = {
    Clothing: [
      "Tops",
      "Dresses",
      "Pants",
      "Denim",
      "Sweaters",
      "T-Shirts",
      "Jackets",
      "Activewear",
      "Browse All",
    ],
    Accessories: ["Watches", "Wallets", "Bags", "Sunglasses", "Hats", "Belts"],
    Brands: [
      "Full Nelson",
      "My Way",
      "Re-Arranged",
      "Counterfeit",
      "Significant Other",
    ],
  };

  return (
    <div className="bg-black">
      <nav className="bg-black shadow-md h-20">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl ml-60 font-bold text-gray-300 ">
              <Link href="/">
                <h2>GeoMarket</h2>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <button
              className={`py-2 px-4 ${
                menuState.isWomenOpen ? "text-blue-400" : "text-gray-400"
              } hover:text-blue-400 focus:outline-none`}
              onClick={(e) => toggleMenu("Women", e)}
            >
              Women
            </button>
            <button
              className={`py-2 px-4 ${
                menuState.isMenOpen ? "text-blue-400" : "text-gray-400"
              } hover:text-blue-400 focus:outline-none`}
              onClick={(e) => toggleMenu("Men", e)}
            >
              Men
            </button>
            <Link href="/company">
              <span className="py-2 px-4 text-gray-400 hover:text-blue-400">
                Company
              </span>
            </Link>
            <Link href="/stores">
              <span className="py-2 px-4 text-gray-400 hover:text-blue-400">
                Stores
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/search">
              <span className="py-2 px-4 text-gray-400 cursor-pointer hover:text-blue-400">
                <GoSearch />
              </span>
            </Link>
            <Link href="/signIn">
              <span className="py-2 px-4 text-gray-400 hover:text-blue-400">
                Sign in
              </span>
            </Link>
            <Link href="/signUp">
              <span className="py-2 px-4 text-gray-400 hover:text-blue-400">
                Create account
              </span>
            </Link>
            <div className="relative cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H3m4 8v6a2 2 0 002 2h8a2 2 0 002-2v-6M7 13h10"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {(menuState.isWomenOpen || menuState.isMenOpen) && (
          <div
            ref={dropdownRef}
            className={`relative inset-0 z-50 flex justify-center items-center bg-zinc-900 -mt-2 some-class ${
              menuState.isWomenOpen || menuState.isMenOpen ? "show" : "hide"
            }`}
          >
            <div className="container mx-auto px-6 py-3">
              <div className="grid grid-cols-3 gap-4 ml-60">
                {Object.entries(categories).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-neutral-200 mb-5 text-2xl">
                      {category}
                    </h4>
                    <ul>
                      {items.map((item) => (
                        <li key={item}>
                          <span
                            onClick={() =>
                              handleCategoryClick(
                                menuState.isWomenOpen ? "Women" : "Men",
                                item
                              )
                            }
                            className="block py-1 text-white hover:text-blue-400 cursor-pointer"
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
