"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [stock, setStock] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("type", type);
    formData.append("condition", condition);
    formData.append("color", color);
    formData.append("stock", stock);
    formData.append("price", price);

    try {
      const res = await fetch("/api/createProduct", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Upload successful!");
      } else {
        setMessage("Upload failed: " + data.message);
      }
    } catch (error) {
      setMessage("Upload failed: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-8 space-y-3 rounded-lg bg-white shadow-lg">
          <h1 className="text-xl font-bold">Upload Clothes</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-3">
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm font-medium text-gray-700">Image</label>
              <input
                type="file"
                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="flex-1 min-w-[240px] flex flex-col space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                  <option value="footwear">Footwear</option>
                </select>
              </div>
              <div className="flex-1 min-w-[240px] flex flex-col space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Brand
                </label>
                <select
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                >
                  <option value="">Select Brand</option>
                  <option value="nike">Nike</option>
                  <option value="adidas">Adidas</option>
                  <option value="gucci">Gucci</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="flex-1 min-w-[240px] flex flex-col space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                </select>
              </div>
              <div className="flex-1 min-w-[240px] flex flex-col space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Condition
                </label>
                <select
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="flex-1 min-w-[240px] flex flex-col space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Colour
                </label>
                <input
                  type="text"
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1 min-w-[240px] flex flex-col space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  className="input-number px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1 min-w-[240px] flex flex-col space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  No of Stock
                </label>
                <input
                  type="number"
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </form>
          {message && <p className="text-sm text-red-500">{message}</p>}
        </div>
      </div>
    </>
  );
}
