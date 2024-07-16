"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../lib/validation";
import { useRouter } from "next/navigation";

const signIn = () => {
  const [message, setMessage] = useState("");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) =>{
      try{
        const res = await fetch("/api/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        if (data.success) {
          setMessage("Log IN Successfull");
          router.push("/");
        } else {
          setMessage("Log In Failed: " + data.message);
        }
      } catch (error) {
        setMessage("Log In Failed: " + error.message);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="flex justify-center text-2xl font-bold mb-2">Sign in</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email or Phone
            </label>
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email or Phone"
            />
            {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs">
              {formik.errors.email}
            </div>
          ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs">
              {formik.errors.password}
            </div>
          ) : null}
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
              Sign In
            </button>
          </div>
          </form>
          <div className="flex items-center justify-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="mb-4">
            <button
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => router.push("/signUp")}
            >

              Create New Account
            </button>
          </div>
        
      </div>
    </div>
  );
}

export default signIn;