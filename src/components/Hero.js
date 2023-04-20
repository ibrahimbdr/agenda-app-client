import React from "react";

function Hero() {
  const [searchType, setSearchType] = React.useState("professional");

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search based on selected search type
    console.log(`Searching for ${searchType}`);
  };

  return (
    <div className="bg-gray-800 text-gray-100">
      <div className="mx-auto px-4 py-12 max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-6">
          Find the right professional or service for your needs
        </h1>
        <form
          className="w-full mx-auto flex flex-col md:flex-row items-center"
          onSubmit={handleSubmit}
        >
          <div className="relative flex-grow mr-2">
            <input
              type="text"
              className="w-full py-3 px-4 text-gray-800 bg-gray-200 rounded-lg placeholder-gray-600 focus:bg-white focus:outline-none focus:shadow-outline"
              placeholder="Search for a professional or service"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="button"
                className="inline-flex items-center bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded-r-lg focus:outline-none"
                onClick={handleSubmit}
              >
                <svg
                  className="w-6 h-6 text-gray-800 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.564 21.436l-6.617-6.617c1.21-1.448 1.943-3.29 1.943-5.319 0-4.824-3.916-8.74-8.74-8.74-4.824 0-8.74 3.916-8.74 8.74 0 4.824 3.916 8.74 8.74 8.74 2.03 0 3.87-.733 5.319-1.943l6.617 6.617c.195.195.451.293.707.293.256 0 .512-.098.707-.293.39-.39.39-1.023 0-1.414zm-15.824-6.696c-3.62 0-6.565-2.945-6.565-6.565 0-3.62 2.945-6.565 6.565-6.565 3.62 0 6.565 2.945 6.565 6.565 0 3.62-2.945 6.565-6.565 6.565z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative mt-4 md:mt-0 md:ml-4 flex-shrink-0">
            <select
              value={searchType}
              onChange={handleSearchTypeChange}
              className="block appearance-none w-full bg-gray-200 text-gray-800 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:shadow-outline"
            >
              <option value="professional">Search by professional</option>
              <option value="service">Search by service</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z" />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
