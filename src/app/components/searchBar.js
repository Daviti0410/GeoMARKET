"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function searchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <form className="flex items-center" onSubmit={handleSubmit}>
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
      </form>
    </>
  );
}
