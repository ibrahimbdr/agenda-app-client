import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value.trim());
    const searchQuery = event.target.value.trim();
    navigate(`/shops?q=${encodeURIComponent(searchQuery)}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div
      className=" bg-gray-800 flex flex-col justify-center items-center"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <h1 className="text-5xl text-white font-bold mb-8">
        Find The Right Shop for Your Need
      </h1>
      <div className="w-2/3 md:w-1/3 lg:w-1/4 relative">
        <input
          type="text"
          name="search"
          placeholder="Search for a shop"
          className="w-full py-3 pl-8 pr-2 text-white rounded-full bg-gray-700 focus:outline-none focus:shadow-outline"
          onKeyDown={handleKeyDown}
        />
        <svg
          className="h-6 w-6 absolute top-0 left-0 mt-3 ml-3 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a7 7 0 015.697 10.912l5.18 5.181a1 1 0 01-1.414 1.414l-5.18-5.18A7 7 0 1110 3zm0 2a5 5 0 100 10 5 5 0 000-10z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
