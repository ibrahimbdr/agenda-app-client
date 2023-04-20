import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedProfessionalsSlider = () => {
  const [professionals, setProfessionals] = useState([
    {
      id: 1,
      name: "John Smith",
      profession: "Dentist",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Doe",
      profession: "Physiotherapist",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Bob Johnson",
      profession: "Chiropractor",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Samantha Lee",
      profession: "Massage Therapist",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Bob Johnson",
      profession: "Chiropractor",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Samantha Lee",
      profession: "Massage Therapist",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4">Recommended Professionals</h2>
      <Slider {...settings}>
        {professionals.map((professional) => (
          <div key={professional.id} className="px-2">
            <div className="border rounded-lg overflow-hidden">
              <img
                className="w-full"
                src={professional.imageUrl}
                alt={professional.name}
              />
              <div className="px-4 py-2">
                <h3 className="font-bold text-lg mb-2">{professional.name}</h3>
                <p className="text-gray-700">{professional.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendedProfessionalsSlider;
