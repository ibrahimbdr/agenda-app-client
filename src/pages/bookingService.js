import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../axiosConfig/axiosConfig";

const BookingService = () => {
  const params = useParams();
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    instance.get(`/managers/shopname?urlSlug=${params.id}`).then((response) => {
      console.log(response.data);
      instance
        .get(`/services/shopname?shopName=${response.data.shopName}`)
        .then((response) => {
          console.log(response.data.services);
          setServices(response.data.services);
        });
    });
  }, []);

  useEffect(() => {
    console.log(selectedServices);
    localStorage.setItem("services", JSON.stringify(selectedServices));
  }, [selectedServices]);

  const handleServiceSelection = (service) => {
    // Check if the service is already selected
    if (
      selectedServices.some(
        (selectedService) => selectedService._id === service._id
      )
    ) {
      // If yes, remove it from the array
      setSelectedServices(
        selectedServices.filter(
          (selectedService) => selectedService._id !== service._id
        )
      );
    } else {
      // If no, add it to the array
      setSelectedServices([...selectedServices, service]);
    }
  };

  // const services = [
  //   { id: 1, name: "Service 1", image: "https://via.placeholder.com/150" },
  //   { id: 2, name: "Service 2", image: "https://via.placeholder.com/150" },
  //   { id: 3, name: "Service 3", image: "https://via.placeholder.com/150" },
  //   { id: 4, name: "Service 4", image: "https://via.placeholder.com/150" },
  // ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        Choose a Service
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            key={service._id}
            className={`bg-white rounded-lg shadow-md ${
              selectedServices.some(
                (selectedService) => selectedService._id === service._id
              )
                ? "ring-2 ring-indigo-500"
                : ""
            }`}
            onClick={() => handleServiceSelection(service)}
          >
            <img
              src="https://via.placeholder.com/150"
              alt={service.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-medium text-gray-900">
                {service.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {selectedServices.length > 0 && (
        <Link to={`/${params.id}/booking-professional`}>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Continue
          </button>
        </Link>
      )}
    </div>
  );
};

export default BookingService;
