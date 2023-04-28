import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../axiosConfig/axiosConfig";

const BookingSummary = () => {
  const [shopName, setShopName] = useState("");
  const professional = JSON.parse(localStorage.getItem("professional"));
  const services = JSON.parse(localStorage.getItem("services"));
  const d = new Date(localStorage.getItem("dateTime"));
  const date = new Intl.DateTimeFormat(["ban", "id"]).format(d);
  const time = new Intl.DateTimeFormat("en-GB", { timeStyle: "short" }).format(
    d
  );
  const params = useParams();
  useEffect(() => {
    instance.get(`/managers/shopname?urlSlug=${params.id}`).then((response) => {
      console.log(response.data);
      setShopName(response.data.shopName);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">
        Booking Summary
      </h1>
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center items-center">
        <p className="text-lg font-semibold mb-4">Shop Name:</p>
        <p className="text-xl mb-8">{shopName}</p>
        <p className="text-lg font-semibold mb-4">Professional:</p>
        <p className="text-xl mb-8">{professional.name}</p>
        <p className="text-lg font-semibold mb-4">Service:</p>
        <p className="text-xl mb-8">
          {services.map((service) => {
            return <span>{service.name} </span>;
          })}
        </p>
        <p className="text-lg font-semibold mb-4">Selected Date:</p>
        <p className="text-xl mb-8">{date}</p>
        <p className="text-lg font-semibold mb-4">Selected Time:</p>
        <p className="text-xl mb-8">{time}</p>
        <p className="text-lg font-semibold mb-4">Reserved for:</p>
        <p className="text-xl mb-8">John Doe</p>
        <p className="text-lg font-semibold mb-4">Contact Phone:</p>
        <p className="text-xl mb-8">(555) 555-5555</p>
        <Link to="/">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingSummary;
