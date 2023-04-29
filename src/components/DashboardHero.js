import React from "react";

const DashboardHero = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to our app</h1>
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lobortis arcu ligula, eu feugiat odio mollis nec. Nulla at mi
                ultricies, elementum quam sit amet, sodales velit. Suspendisse
                fringilla, nibh in accumsan suscipit, dui libero accumsan
                turpis, non pellentesque ante mi vel sapien.
              </p>
              <button className="bg-white text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;
