import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShopCard from "../components/ShopCard";

const ShopSelection = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const shops = [
    { id: 1, name: "Shop A", imageUrl: "https://placehold.it/300x200" },
    { id: 2, name: "Shop B", imageUrl: "https://placehold.it/300x200" },
    { id: 3, name: "Shop C", imageUrl: "https://placehold.it/300x200" },
    { id: 4, name: "Shop D", imageUrl: "https://placehold.it/300x200" },
  ];

  const handleShopSelection = (shop) => {
    setSelectedShop(shop);
    console.log(`User selected shop with ID ${shop.id}`);
    // Implement logic to navigate to the next page with the selected shop ID
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        Choose a Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {shops.map((shop) => (
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
      {selectedShop && (
        <Link to={`/booking-start`}>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Continue
          </button>
        </Link>
      )}
    </div>
  );
};

export default ShopSelection;
