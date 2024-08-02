"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleWomenMenu = () => {
    setIsWomenOpen((prev) => {
      const newState = !prev;
      setClickCount((prevCount) => prevCount + 1);
      if (newState) {
        setIsMenOpen(false);
      }
      return newState;
    });
  };

  const toggleMenMenu = () => {
    setIsMenOpen((prev) => {
      const newState = !prev;
      setClickCount((prevCount) => prevCount + 1);
      if (newState) {
        setIsWomenOpen(false);
      }
      return newState;
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsWomenOpen(false);
      setIsMenOpen(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickCount]);

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
            <div className="text-2xl ml-60 font-bold text-gray-300 mt-3">
              <Link href="/">
                <h2>GeoMarket</h2>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1 mt-">
            <button
              onClick={toggleWomenMenu}
              className={`py-2 px-4 ${
                isWomenOpen ? "text-purple-700" : "text-gray-700"
              } hover:text-purple-700 focus:outline-none`}
            >
              Women
            </button>
            <button
              onClick={toggleMenMenu}
              className={`py-2 px-4 ${
                isMenOpen ? "text-purple-700" : "text-gray-700"
              } hover:text-purple-700 focus:outline-none`}
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
            <span className="py-2 px-4 text-gray-400 cursor-pointer">CAD</span>
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
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className=" w-6 h-6 text-gray-400 hover:text-blue-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {(isWomenOpen || isMenOpen) && (
          <div
            ref={dropdownRef}
            className="relative inset-0 z-50 flex justify-center items-center bg-zinc-900 mt-3"
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
                                isWomenOpen ? "Women" : "Men",
                                item
                              )
                            }
                            className="block py-1 text-white hover:text-purple-700 cursor-pointer"
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
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <Link href="/women">
                <span className="block text-sm px-2 py-4 text-white bg-purple-700 font-semibold">
                  Women
                </span>
              </Link>
            </li>
            <li>
              <Link href="/men">
                <span className="block text-sm px-2 py-4 hover:bg-purple-700 transition duration-300">
                  Men
                </span>
              </Link>
            </li>
            <li>
              <Link href="/company">
                <span className="block text-sm px-2 py-4 hover:bg-purple-700 transition duration-300">
                  Company
                </span>
              </Link>
            </li>
            <li>
              <Link href="/stores">
                <span className="block text-sm px-2 py-4 hover:bg-purple-700 transition duration-300">
                  Stores
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`md:hidden ${
            isWomenOpen || isMenOpen ? "block" : "hidden"
          } mobile-menu`}
        >
          <ul className="">
            <li className="active">
              <Link href="/women">
                <span className="block text-sm px-2 py-4 text-white bg-purple-700 font-semibold">
                  Women
                </span>
              </Link>
            </li>
            <li>
              <Link href="/men">
                <span className="block text-sm px-2 py-4 hover:bg-purple-700 transition duration-300">
                  Men
                </span>
              </Link>
            </li>
            <li>
              <Link href="/company">
                <span className="block text-sm px-2 py-4 hover:bg-purple-700 transition duration-300">
                  Company
                </span>
              </Link>
            </li>
            <li>
              <Link href="/stores">
                <span className="block text-sm px-2 py-4 hover:bg-purple-700 transition duration-300">
                  Stores
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
