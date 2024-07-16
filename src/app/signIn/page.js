"use client";

import { useState } from "react";

export default function signIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const res = await fetch("/api/createUser", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Upload successful!");
      } else {
        setMessage("Upload faild:" + data.message);
      }
    } catch (error) {
      setMessage("Upload failed: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="flex justify-center text-2xl font-bold mb-2">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email or Phone
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email or Phone"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Password"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"></span>
            </div>
          </div>

          <div className="mb-6">
            <a className="cursor-pointer text-blue-500 hover:text-blue-800 text-sm">
              Forgot password?
            </a>
          </div>

          <div className="mb-4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="mb-4">
            <button
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
