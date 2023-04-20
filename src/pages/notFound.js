import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        404: Page Not Found
      </h1>
      <p className="text-xl text-gray-500 mb-8">
        The page you are looking for does not exist.
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2017/03/15/21/57/not-found-2140286_960_720.png"
        alt="Page Not Found"
        className="w-64 h-64 mb-8"
      />
      <Link to="/" className="text-lg text-indigo-600 hover:text-indigo-700">
        Return to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
