"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import SlideBar from "../components/slideBar";
import Footer from "../components/footer";
import SearchBar from "../components/searchBar";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const categoryParam = searchParams.get("category") || "";
  const subCategoryParam = searchParams.get("subCategory" || "");
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState(categoryParam);
  const [subCategory, setSubCategory] = useState(subCategoryParam);
  const router = useRouter();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `/api/getProduct?query=${encodeURIComponent(
            query
          )}&category=${encodeURIComponent(
            category
          )}&subCategory=${subCategory}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Fetch error: ", error);
        setResults([]);
      }
    };

    if (query || category || subCategory) {
      fetchResults();
    }
  }, [query, category, subCategory]);

  const handleCategoryClick = (newCategory, newSubCategory) => {
    setCategory(newCategory);
    setSubCategory(newSubCategory);
    router.push(
      `/search?query=${encodeURIComponent(query)}&category=${encodeURIComponent(
        newCategory
      )}&subCategory=${encodeURIComponent(newSubCategory)}`
    );
    console.log(setSubCategory);
  };

  return (
    <>
      <Navbar handleCategoryClick={handleCategoryClick} />
      <div className="flex min-h-screen">
        <SlideBar handleCategoryClick={handleCategoryClick} />
        <div className="w-3/4 p-4">
          <SearchBar />
          <h1 className="text-2xl font-bold mb-4">
            Search Results for "{query || category || subCategory}"
          </h1>
          <div className="flex flex-wrap -mx-4">
            {results.map((result) => (
              <div
                key={result.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"
              >
                <div className="border-2 border-gray-300 p-4 rounded-md">
                  <img
                    src={`data:image/jpeg;base64,${result.image}`}
                    alt={result.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-bold">{result.title}</h2>
                  <p>{result.description}</p>
                  <p className="text-red-500 font-bold">{result.price}$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
