"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Navbar({ handleCategoryClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdown, setDropdown] = useState(null);

  const router = useRouter();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
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
    <nav className="bg-stone-900 text-white p-4 py-8 top-0 z-50 relative">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-2xl font-bold flex justify-center flex-grow space-x-10">
          <Link href="/" className="text-white hover:text-slate-300">
            GeoMARKET
          </Link>
        </div>

        <div className="hidden md:flex justify-start flex-grow space-x-20">
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

{
  /* <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-5 py-2 rounded-l-md bg-white-800 text-black focus:outline-none focus:ring-2 focus:ring-stone-900 w-64"
          />
          <button
            type="submit"
            className="px-4 py-3 rounded-r-md bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <IoSearchSharp />
          </button>
        </form> */
}
