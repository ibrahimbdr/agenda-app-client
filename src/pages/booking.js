import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img className="w-full" src="https://placehold.it/300x200" />
      </div>
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        Start Booking Now !
      </h1>
      <div className="flex items-center justify-center">
        <Link to="/booking-service">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mr-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Book Now
          </button>
        </Link>
        <Link to="/signin">
          <button className="bg-gray-700 hover:bg-gray-800 text-white text-xl font-medium py-4 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
