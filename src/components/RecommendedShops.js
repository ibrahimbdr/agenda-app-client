import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedShopsSlider = () => {
  const [shops, setShops] = useState([
    {
      id: 1,
      name: "Shop 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Shop 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Shop 3",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Shop 4",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Shop 5",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Shop 6",
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
      <h2 className="text-2xl font-bold mb-4">Recommended Shops</h2>
      <Slider {...settings}>
        {shops.map((shop) => (
          <div key={shop.id} className="px-2">
            <div className="border rounded-lg overflow-hidden">
              <img className="w-full" src={shop.imageUrl} alt={shop.name} />
              <div className="px-4 py-2">
                <h3 className="font-bold text-lg mb-2">{shop.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendedShopsSlider;
