import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookingDate = () => {
  const [selectedDate, setSelectedDate] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected date:", selectedDate);
    localStorage.setItem("selectedDate", selectedDate);
    navigate(`/${params.id}/booking-hour`);
    // Implement logic to check if the selected date has any reserved appointments
    // If there are reserved appointments, show them in a div next to the date picker
    // If there are no reserved appointments, show a message saying "No Appointments"
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        Select a Date
      </h1>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="flex flex-wrap justify-center">
          <div className="w-96 p-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              calendarClassName="rounded-lg shadow-md p-4"
            />
          </div>
          {selectedDate && (
            <div className="bg-gray-200 rounded-md p-4 flex-1">
              <p className="text-lg font-semibold mb-2">
                Reserved Appointments:
              </p>
              <p>No Appointments</p>
            </div>
          )}
        </div>
        {selectedDate && (
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue
          </button>
        )}
      </form>
    </div>
  );
};

export default BookingDate;
