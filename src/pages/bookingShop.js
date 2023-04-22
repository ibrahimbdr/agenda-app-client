import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShopCard from "../components/ShopCard";
import { FaSearch } from "react-icons/fa";

const ShopSelection = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [shopsPerPage] = useState(4);
  const navigate = useNavigate();

  const shops = [
    {
      id: 1,
      name: "Shop A",
      urlSlug: "ShopA",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 2,
      name: "Shop B",
      urlSlug: "ShopB",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 3,
      name: "Shop C",
      urlSlug: "ShopC",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 4,
      name: "Shop D",
      urlSlug: "ShopD",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 5,
      name: "Shop E",
      urlSlug: "ShopE",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 6,
      name: "Shop F",
      urlSlug: "ShopF",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 7,
      name: "Shop G",
      urlSlug: "ShopG",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 8,
      name: "Shop H",
      urlSlug: "ShopH",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 9,
      name: "Shop I",
      urlSlug: "ShopI",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 10,
      name: "Shop J",
      urlSlug: "ShopJ",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 11,
      name: "Shop K",
      urlSlug: "ShopK",
      imageUrl: "https://placehold.it/300x200",
    },
    {
      id: 12,
      name: "Shop L",
      urlSlug: "ShopL",
      imageUrl: "https://placehold.it/300x200",
    },
  ];

  const handleShopSelection = (shop) => {
    console.log(`User selected shop with ID ${shop.id}`);
    const shopUrlSlug = decodeURIComponent(shop.urlSlug);
    setSelectedShop(shop);
    navigate(`/shops/${shopUrlSlug}`);
    // Implement logic to navigate to the next page with the selected shop ID
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredShops = useMemo(() => {
    return shops.filter((shop) =>
      shop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [shops, searchQuery]);

  const indexOfLastShop = currentPage * shopsPerPage;
  const indexOfFirstShop = indexOfLastShop - shopsPerPage;
  const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredShops.length / shopsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(Number(pageNumber));
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 h-screen bg-gray-100 overflow-auto">
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="text-center text-5xl font-extrabold mb-8 text-gray-900">
          Choose a Shop
        </h1>

        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            placeholder="Search shops"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="py-2 px-4 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <FaSearch className="ml-2 text-gray-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {currentShops.map((shop) => (
            <div
              key={shop.id}
              className={`max-w-sm rounded overflow-hidden shadow-lg cursor-pointer ${
                selectedShop?.id === shop.id ? "ring-2 ring-indigo-500" : ""
              }`}
              onClick={() => handleShopSelection(shop)}
            >
              <img className="w-full" src={shop.imageUrl} alt={shop.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{shop.name}</div>
              </div>
            </div>
          ))}
        </div>
        <nav className="flex justify-center mt-4 bg-gray-100">
          <button
            onClick={handlePrevClick}
            className={`${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            } bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={(event) => handlePageChange(event, number)}
              className={`
            ${
              currentPage === number
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-500 hover:bg-gray-50"
            }
            
            border border-gray-300
            font-medium
            py-2 px-4
            focus:outline-none
            focus:ring-offset-2
            focus:ring-indigo-500
          `}
            >
              {number}
            </button>
          ))}
          <button
            onClick={handleNextClick}
            className={`${
              currentPage === pageNumbers.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            } bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </nav>
        {selectedShop && (
          <Link to={`/booking-start`}>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Continue
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ShopSelection;
