"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default function Navbar({ handleCategoryClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (category) => {
    setDropdown((prev) => (prev === category ? null : category));
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
    <nav className="bg-stone-900 text-white p-4 py-8 top-0 z-50 relative flex">
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white hover:text-slate-300">
            GeoMARKET
          </Link>
        </div>

        <div className="hidden md:flex justify-center space-x-20 mr-80">
          {["WOMEN", "MEN", "KIDS", "SALE"].map((category) => (
            <div className="relative" key={category} ref={dropdownRef}>
              <span
                onClick={() => handleDropdownToggle(category)}
                className="hover:text-gray-300 cursor-pointer"
              >
                {category}
              </span>
              {dropdown === category && (
                <div className="dropdown-menu flex flex-row">
                  <ul>
                    {["NEW", "CLOTHES", "SHOES", "ACCESSORIES"].map((item) => (
                      <li key={item} className="dropdown-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="text-end">
        <a href="signIn" className="hover:text-slate-300">
          <CgProfile size={24} />
        </a>
      </div>

      {isOpen && (
        <div className="md:hidden flex text-end flex-col">
          <span
            onClick={() => handleCategoryClick("WOMEN")}
            className="hover:text-gray-300 cursor-pointer"
          >
            WOMEN
          </span>
          <span
            onClick={() => handleCategoryClick("MEN")}
            className="hover:text-gray-300 cursor-pointer"
          >
            MEN
          </span>
          <span
            onClick={() => handleCategoryClick("KIDS")}
            className="hover:text-gray-300 cursor-pointer"
          >
            KIDS
          </span>
          <span
            onClick={() => handleCategoryClick("SALE")}
            className="hover:text-gray-300 cursor-pointer"
          >
            SALE
          </span>
        </div>
      )}
    </nav>
  );
}
