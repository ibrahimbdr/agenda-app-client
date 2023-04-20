import React from "react";
import { Link } from "react-router-dom";

const BookingSummary = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        Booking Summary
      </h1>
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center items-center">
        <p className="text-lg font-semibold mb-4">Shop Name:</p>
        <p className="text-xl mb-8">Example Shop</p>
        <p className="text-lg font-semibold mb-4">Professional:</p>
        <p className="text-xl mb-8">John Doe</p>
        <p className="text-lg font-semibold mb-4">Service:</p>
        <p className="text-xl mb-8">Haircut</p>
        <p className="text-lg font-semibold mb-4">Selected Date:</p>
        <p className="text-xl mb-8">May 1, 2023</p>
        <p className="text-lg font-semibold mb-4">Selected Time:</p>
        <p className="text-xl mb-8">3:00 PM</p>
        <p className="text-lg font-semibold mb-4">Reserved for:</p>
        <p className="text-xl mb-8">John Doe</p>
        <p className="text-lg font-semibold mb-4">Contact Phone:</p>
        <p className="text-xl mb-8">(555) 555-5555</p>
        <Link to="/">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingSummary;
