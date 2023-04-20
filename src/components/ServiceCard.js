import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img className="w-full" src={service.imageUrl} alt={service.name} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{service.name}</h3>
        <p className="text-gray-700">{service.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="font-bold text-xl">${service.price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
