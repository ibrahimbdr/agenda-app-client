import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArticlesSlider = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Benefits of Regular Exercise",
      imageUrl: "https://via.placeholder.com/600x400",
      author: "John Smith",
      date: "January 1, 2022",
    },
    {
      id: 2,
      title: "Tips for Better Sleep",
      imageUrl: "https://via.placeholder.com/600x400",
      author: "Jane Doe",
      date: "February 15, 2022",
    },
    {
      id: 3,
      title: "How to Manage Stress",
      imageUrl: "https://via.placeholder.com/600x400",
      author: "Bob Johnson",
      date: "March 31, 2022",
    },
    {
      id: 4,
      title: "The Importance of a Balanced Diet",
      imageUrl: "https://via.placeholder.com/600x400",
      author: "Samantha Lee",
      date: "April 18, 2022",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <Slider {...settings}>
        {articles.map((article) => (
          <div key={article.id} className="px-2">
            <div className="border rounded-lg overflow-hidden">
              <img
                className="w-full"
                src={article.imageUrl}
                alt={article.title}
              />
              <div className="px-4 py-2">
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-gray-700">
                  By {article.author} on {article.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticlesSlider;
