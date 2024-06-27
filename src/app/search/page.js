"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/navbar";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `/api/getProduct?query=${encodeURIComponent(
            query
          )}&category=${encodeURIComponent(category)}`
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

    if (query || category) {
      fetchResults();
    }
  }, [query, category]);

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar- დროებით აქ ვაკეთებ მერე კომპონენტად გავიტან გააჩნია როგორ განვავრცობთ პროექტს */}
        <div className="box-border h-auto w-64 p-4 border-4">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
            Shoes for Men
          </h2>
          {/* Sidebar- აი აქედან იწყება სლაიდბარის კონტენტი მარტივია გადაავლე თვალი*/}
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
          <ul className="space-y-2  border-t-2 border-gray-300 pt-4">
            {/* SidebarContent- აი აქ მოგიწევს ამ სამი li დაჰენდვლა გადახედე სლაიდბარს რაც წერია ზემოთ დაახლოვებით ესეთი რამ უნდა ქნა. */}
            <li className="font-semibold">Size</li>
            <li className="font-semibold">Color</li>
            <li className="font-semibold">Price</li>
          </ul>
        </div>

        {/* Main Content-აქ გამოდის მთავარი კონტენტი ანუ პროდუქტების გამოსახულება და ასე შემდეგ !!!არ შეეხო!!! */}
        <div className="w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4">
            Search Results for "{query}"
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
    </>
  );
}
