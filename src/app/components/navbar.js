"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar({ handleCategoryClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black shadow-md h-20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-300 mt-3">
            <Link href="/">
              <h2>GeoMarket</h2>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-1 mt-">
          <button
            onClick={toggleMenu}
            className="py-2 px-4 text-gray-700 hover:text-purple-700 focus:outline-none"
          >
            Women
          </button>
          <Link href="/men">
            <span className="py-2 px-4 text-gray-400 hover:text-blue-400">
              Men
            </span>
          </Link>
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
          <Link href="/sign-in">
            <span className="py-2 px-4 text-gray-400 hover:text-blue-400">
              Sign in
            </span>
          </Link>
          <Link href="/create-account">
            <span className="py-2 px-4 text-gray-400 hover:text-blue-400">
              Create account
            </span>
          </Link>
          <span className="py-2 px-4 text-gray-400">CAD</span>
          <div className="relative">
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

      {isOpen && (
        <div className="relative inset-0 z-50 flex justify-center items-center bg-zinc-900 mt-3">
          <div className="container mx-auto px-6 py-3">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-neutral-200 mb-5 text-2xl">
                  Clothing
                </h4>
                <ul>
                  <li>
                    <span className="block py-1 text-white hover:text-purple-700 cursor-pointer">
                      Tops
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-white hover:text-purple-700 cursor-pointer">
                      Dresses
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-white hover:text-purple-700 cursor-pointer">
                      Pants
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-white hover:text-purple-700 cursor-pointer">
                      Denim
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-white hover:text-purple-700 cursor-pointer">
                      Sweaters
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      T-Shirts
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Jackets
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Activewear
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Browse All
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Accessories</h4>
                <ul>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Watches
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Wallets
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Bags
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Sunglasses
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Hats
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Belts
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Brands</h4>
                <ul>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Full Nelson
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      My Way
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Re-Arranged
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Counterfeit
                    </span>
                  </li>
                  <li>
                    <span className="block py-1 text-gray-600 hover:text-purple-700 cursor-pointer">
                      Significant Other
                    </span>
                  </li>
                </ul>
              </div>
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
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mobile-menu`}>
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
  );
}
