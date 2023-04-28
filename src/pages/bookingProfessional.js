import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookingProfessional = () => {
  const params = useParams();
  const navigate = useNavigate();
  // example list of professionals
  const [professionals, setProfessionals] = useState([
    { id: 1, name: "Professional 1", description: "description" },
    { id: 2, name: "Professional 2", description: "description" },
    { id: 3, name: "Professional 3", description: "description" },
  ]);

  const handleSelction = (pro) => {
    localStorage.setItem("professional", JSON.stringify(pro));
    navigate(`/${params.id}/booking-date`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose a Professional
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-8">
            <ul className="divide-y divide-gray-200">
              {professionals.map((professional) => (
                <li key={professional.id} className="py-4">
                  <button
                    onClick={() => handleSelction(professional)}
                    className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-lg font-medium leading-5 text-gray-900">
                          {professional.name}
                        </div>
                        <div className="text-lg leading-5 text-gray-500">
                          {professional.description}
                        </div>
                      </div>
                      <div>
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a7 7 0 110 14 7 7 0 010-14zm0 1a6 6 0 100 12 6 6 0 000-12zm0 2a2 2 0 110 4 2 2 0 010-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProfessional;
