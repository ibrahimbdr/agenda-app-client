import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingHour = () => {
  const [selectedHour, setSelectedHour] = useState(null);
  const [isHourSelected, setIsHourSelected] = useState(false);

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
    setIsHourSelected(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Hour selected: ${selectedHour}`);
    // Implement booking logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        Select an Hour
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          <button
            type="button"
            className={`${
              selectedHour === "09:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "09:00" } })}
          >
            09:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "09:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "09:30" } })}
          >
            09:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "10:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "10:00" } })}
          >
            10:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "10:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "10:30" } })}
          >
            10:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "11:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "11:00" } })}
          >
            11:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "11:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "11:30" } })}
          >
            11:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "12:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "12:00" } })}
          >
            12:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "12:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "12:30" } })}
          >
            12:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "13:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "13:00" } })}
          >
            13:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "13:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "13:30" } })}
          >
            13:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "14:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "14:00" } })}
          >
            14:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "14:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "14:30" } })}
          >
            14:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "15:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "15:00" } })}
          >
            15:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "15:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "15:30" } })}
          >
            15:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "16:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "16:00" } })}
          >
            16:00
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "16:30" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "16:30" } })}
          >
            16:30
          </button>
          <button
            type="button"
            className={`${
              selectedHour === "17:00" ? "border-blue-500" : "border-gray-300"
            } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
            onClick={() => handleHourChange({ target: { value: "17:00" } })}
          >
            17:00
          </button>
        </div>
      </form>
      {isHourSelected && (
        <div className="flex flex-col items-center justify-center mt-4">
          <Link to="/booking-summary">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Book Now!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookingHour;
