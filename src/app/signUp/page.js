"use client";
import { use, useState } from "react";

export default function signUp() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => ++i);
  const years = Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 1950 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("day", day);
    formData.append("month", month);
    formData.append("year", year);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("phonenumber", phonenumber);
    formData.append("email", email);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("postal", postal);


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
    <>
      <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className=" flex justify-center mb-5 text-gray-700 font-bold text-4xl">
            Registration
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Birth Date
            </label>
            <div className="flex space-x-2">
              <select
                onChange={(e) => setDay(e.target.value)}
                value={day}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select 
                  onChange={(e) => setMonth(e.target.value)}
                  value={month}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                <option
                  onChange={(e) => setMonth(e.target.value)}
                  value={month}
                >
                  Month
                </option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select 
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              onChange={(e) => setPhonenumber(e.target.value)}
              value={phonenumber}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="(000) 000-0000"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              placeholder="Street Address"
            />
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              placeholder="City"
            />
            <input
              onChange={(e) => setState(e.target.value)}
              value={state}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              placeholder="State / Province"
            />
            <input
              onChange={(e) => setPostal(e.target.value)}
              value={postal}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              placeholder="Postal / Zip Code"
            />
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Country</option>
              <option>Georgia</option>
              <option>USA</option>
              <option>Japan</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}