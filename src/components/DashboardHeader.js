import React from "react";

const DashboardHeader = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a
              className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
              href="#"
            >
              My Website
            </a>
          </div>
          php Copy code
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="hidden md:flex md:items-center">
          <a
            className="text-gray-800 text-base font-medium hover:text-gray-900 mx-4 md:mx-8"
            href="#"
          >
            Features
          </a>

          <a
            className="text-gray-800 text-base font-medium hover:text-gray-900 mx-4 md:mx-8"
            href="#"
          >
            Pricing
          </a>

          <a
            className="text-gray-800 text-base font-medium hover:text-gray-900 mx-4 md:mx-8"
            href="#"
          >
            Contact
          </a>

          <button className="bg-yellow-500 text-white font-medium rounded-full py-2 px-6 md:mx-8 hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
