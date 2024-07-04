"use client";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFilePreview(fileURL);
    }
  };

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
      <div className="flex flex-col items-center justify-center w-full h-auto bg-gray-100">
        <div className="w-full max-w-7xl min-h-auto p-8 space-y-6 space-x-20 rounded-lg bg-white shadow-lg">
          <h1 className="text-2xl font-bold text-center">Create Listing</h1>
          <form
            className="flex flex-wrap justify-between space-x-6"
            onSubmit={handleSubmit}
          >
            <div className="flex-1 min-w-[48%] space-y-10">
              <select
                type="text"
                placeholder="Brand"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
              >
                <option value="">Select Brand</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="gucci">Gucci</option>
              </select>

              <input
                type="text"
                placeholder="Color"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
              <select
                type="text"
                placeholder="Type"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
              </select>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Description"
                className="w-full min-h-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex-1 min-w-[48%] space-y-10">
              <div className="w-full h-32 border-4 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
                <label className="cursor-pointer w-full h-full flex items-center justify-center relative">
                  {filePreview ? (
                    <img
                      src={filePreview}
                      alt="Selected file"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500">Click to upload</span>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
              <select
                type="text"
                placeholder="Category"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="footwear">Footwear</option>
              </select>
              <select
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                required
              >
                <option value="">Select Condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
              <input
                type="number"
                placeholder="Price"
                className="input-number w-full p-2 border border-inherit rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={price}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setPrice(newValue < 0 ? 0 : newValue);
                }}
                min={0}
                required
              />
              <input
                type="number"
                placeholder="No of Stock"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={stock}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setStock(newValue < 0 ? 0 : newValue);
                }}
                min={0}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-32 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
