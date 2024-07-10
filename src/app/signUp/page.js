
export default function signUp() {
  const days = Array.from({ length: 31 }, (_, i) => ++i);
  const years = Array.from({ length: 2024 - 1970 + 1 }, (_, i) => 1970 + i);
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

  return (
    <>
<<<<<<< HEAD
      <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
=======
      <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-md">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
        <form>
          <div className=" flex justify-center mb-5 text-gray-700 font-bold text-4xl">
            Registration
          </div>
          <div className="mb-4">
<<<<<<< HEAD
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlfor="first-name"
            >
=======
            <label className="block text-gray-700 text-sm font-bold mb-2">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
<<<<<<< HEAD
              id="first-name"
=======
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
<<<<<<< HEAD
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlfor="last-name"
            >
=======
            <label className="block text-gray-700 text-sm font-bold mb-2">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
<<<<<<< HEAD
              id="last-name"
=======
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
<<<<<<< HEAD
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlfor="birth-date"
            >
              Birth Date
            </label>
            <div className="flex space-x-2">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="birth-day"
              >
=======
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Birth Date
            </label>
            <div className="flex space-x-2">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
                <option>day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
<<<<<<< HEAD
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="birth-month"
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
=======
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              </select>
              <select classNameName="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
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
<<<<<<< HEAD
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlfor="phone-number"
            >
=======
            <label className="block text-gray-700 text-sm font-bold mb-2">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
<<<<<<< HEAD
              id="phone-number"
=======
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              type="text"
              placeholder="(000) 000-0000"
            />
          </div>
          <div className="mb-4">
<<<<<<< HEAD
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlfor="email"
            >
=======
            <label className="block text-gray-700 text-sm font-bold mb-2">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
<<<<<<< HEAD
              id="email"
=======
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-4">
<<<<<<< HEAD
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlfor="address"
            >
=======
            <label className="block text-gray-700 text-sm font-bold mb-2">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
<<<<<<< HEAD
              id="address-1"
=======
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              type="text"
              placeholder="Street Address"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
<<<<<<< HEAD
              id="city"
=======
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              type="text"
              placeholder="City"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
<<<<<<< HEAD
              id="state"
=======
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              type="text"
              placeholder="State / Province"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
<<<<<<< HEAD
              id="postal-code"
              type="text"
              placeholder="Postal / Zip Code"
            />
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="countries" name="countries"
            >
=======
              type="text"
              placeholder="Postal / Zip Code"
            />
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
>>>>>>> f168686bf645360e36427e8af16365b7eec5c64b
              <option>Country</option>
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
