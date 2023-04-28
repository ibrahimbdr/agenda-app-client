import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookingHour = () => {
  const [selectedHour, setSelectedHour] = useState(null);
  const [isHourSelected, setIsHourSelected] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
    setIsHourSelected(true);
  };
  const hours = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Hour selected: ${selectedHour}`);
    const selectedDate = localStorage.getItem("selectedDate");
    const d = new Date(selectedDate);
    const timeArr = selectedHour.split(":");
    d.setHours(+timeArr[0]);
    d.setMinutes(+timeArr[1]);
    localStorage.setItem("dateTime", d);
    navigate(`/${params.id}/booking-summary`);
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
          {hours.map((hour) => {
            return (
              <button
                type="button"
                className={`${
                  selectedHour === hour ? "ring-2 ring-indigo-500" : ""
                } bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 border rounded-lg text-center text-xl`}
                onClick={() => handleHourChange({ target: { value: hour } })}
              >
                {hour}
              </button>
            );
          })}
        </div>
        {isHourSelected && (
          <div className="flex flex-col items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Book Now!
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingHour;
