import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Jobs
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Press
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Accessibility
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Partners
            </a>
          </div>
        </nav>

        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.046 5.285a9.57 9.57 0 0 1-2.735.75 4.882 4.882 0 0 0 2.14-2.694 9.788 9.788 0 0 1-3.085 1.18 4.893 4.893 0 0 0-8.276 4.467 13.91 13.91 0 0 1-10.096-5.114 4.893 4.893 0 0 0 1.51 6.54 4.824 4.824 0 0 1-2.212-.606v.06a4.89 4.89 0 0 0 3.918 4.78 4.875 4.875 0 0 1-2.205.084 4.892 4.892 0 0 0 4.572 3.394A9.793 9.793 0 0 1 1.17 16.73a13.862 13.862 0 0 0 7.53 2.206c9.022 0 13.954-7.485 13.954-13.978 0-.21-.005-.42-.014-.63a9.982 9.982 0 0 0 2.457-2.558z"
              />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.75 2H5.25A3.25 3.25 0 0 0 2 5.25v13.5A3.25 3.25 0 0 0 5.25 22h6.09v-8.353H9.293v-3.243h2.047V8.612c0-2.025 1.238-3.122 3.028-3.122.868 0 1.616.065 1.836.094v2.107l-1.258.001c-.986 0-1.177.467-1.177 1.15v1.511h2.353l-.307 3.242h-2.046v8.353h4.113A3.25 3.25 0 0 0 22 18.75V5.25A3.25 3.25 0 0 0 18.75 2z"
              />
            </svg>
          </a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .75a11.25 11.25 0 0 0-3.57 21.9c.56.1.77-.24.77-.54v-1.91c-3.15.68-3.81-1.52-3.81-1.52-.51-1.3-1.26-1.65-1.26-1.65-.99-.67.08-.66.08-.66a1.502 1.502 0 0 1 1.09.72c.63 1.05 1.67.75 2.08.57a1.508 1.508 0 0 1 .45-1.03c-1.58-.18-3.24-.79-3.24-3.53a2.754 2.754 0 0 1 .73-1.91c-.07-.18-.32-.94.07-1.96 0 0 .62-.2 2.03.76a6.672 6.672 0 0 1 3.5 0c1.41-.96 2.03-.76 2.03-.76.39 1.02.14 1.78.07 1.96a2.76 2.76 0 0 1 .73 1.91c0 2.75-1.67 3.35-3.25 3.53.26.22.49.66.49 1.33v1.97c0 .3.2.64.78.53A11.25 11.25 0 0 0 12 .75z"
              />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          © 2023 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
