import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiSettings,
  FiMenu,
  FiX,
  FiShoppingBag,
  FiBook,
  FiFileText,
  FiArchive,
} from "react-icons/fi";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [showHomeTooltip, setShowHomeTooltip] = useState(false);
  const [showHeroTooltip, setShowHeroTooltip] = useState(false);
  const [showShopsTooltip, setShowShopsTooltip] = useState(false);
  const [showArticlesTooltip, setShowArticlesTooltip] = useState(false);
  const [showSettingsTooltip, setShowSettingsTooltip] = useState(false);
  const [showServicesTooltip, setShowServicesTooltip] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="md:flex md:flex-row md:h-screen w-full">
      {/* Sidebar */}
      <nav
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block md:w-72 bg-gray-900 text-white px-4 pt-4 pb-8 overflow-y-auto`}
      >
        <div className="text-center mb-4">
          <Link to="/" className="text-2xl font-bold">
            Booking App
          </Link>
        </div>
        <ul className="mt-6">
          <li className="my-px">
            <Link
              to="/dashboard/home"
              onClick={() => handleClick("home")}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "home"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <FiHome className="mr-3 h-6 w-6" />
              <span className="flex-1">Home</span>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <FiArchive className="mr-3 h-6 w-6" />
              <span className="flex-1">Hero Section</span>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <FiShoppingBag className="mr-3 h-6 w-6" />
              <span className="flex-1">Recommended Shops</span>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <FiBook className="mr-3 h-6 w-6" />
              <span className="flex-1">Recommended Services</span>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <FiFileText className="mr-3 h-6 w-6" />
              <span className="flex-1">Articles</span>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/settings"
              onClick={() => handleClick("settings")}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "settings"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <FiSettings className="mr-3 h-6 w-6" />
              <span className="flex-1">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center px-4 py-2">
        <div className="text-2xl font-bold">Booking App</div>
        <button
          type="button"
          className="focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Bottom Menu */}
      <nav
        className={`${
          isSidebarOpen ? "hidden" : "block"
        } md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white px-4 py-5 overflow-y-auto`}
      >
        <ul className="flex w-full justify-evenly">
          <li className="my-px">
            <Link
              to="/dashboard/home"
              onClick={() => {
                handleClick("home");
                setIsSidebarOpen(true);
              }}
              onMouseEnter={() => setShowHomeTooltip(true)}
              onMouseLeave={() => setShowHomeTooltip(false)}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "home"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                <FiHome className="h-6 w-6" />
                {showHomeTooltip && (
                  <div className="bg-gray-800 text-white text-xs rounded-md px-1 py-0.5 absolute -left-2 bottom-8">
                    Home
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              onMouseEnter={() => setShowHeroTooltip(true)}
              onMouseLeave={() => setShowHeroTooltip(false)}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                <FiArchive className="h-6 w-6" />
                {showHeroTooltip && (
                  <div className="bg-gray-800 text-white text-xs rounded-md px-1 py-0.5 absolute -left-2 bottom-8">
                    Hero
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              onMouseEnter={() => setShowShopsTooltip(true)}
              onMouseLeave={() => setShowShopsTooltip(false)}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                <FiShoppingBag className="h-6 w-6" />
                {showShopsTooltip && (
                  <div className="bg-gray-800 text-white text-xs rounded-md px-1 py-0.5 absolute -left-2 bottom-8">
                    Shops
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              onMouseEnter={() => setShowServicesTooltip(true)}
              onMouseLeave={() => setShowServicesTooltip(false)}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                <FiBook className="h-6 w-6" />
                {showServicesTooltip && (
                  <div className="bg-gray-800 text-white text-xs rounded-md px-1 py-0.5 absolute -left-2 bottom-8">
                    Services
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/favorites"
              onClick={() => handleClick("favorites")}
              onMouseEnter={() => setShowArticlesTooltip(true)}
              onMouseLeave={() => setShowArticlesTooltip(false)}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "favorites"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                <FiFileText className="h-6 w-6" />
                {showArticlesTooltip && (
                  <div className="bg-gray-800 text-white text-xs rounded-md px-1 py-0.5 absolute -left-2 bottom-8">
                    Articles
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li className="my-px">
            <Link
              to="/dashboard/settings"
              onMouseEnter={() => setShowSettingsTooltip(true)}
              onMouseLeave={() => setShowSettingsTooltip(false)}
              onClick={() => {
                handleClick("settings");
                setIsSidebarOpen(true);
              }}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                activeLink === "settings"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="relative">
                <FiSettings className="h-6 w-6" />
                {showSettingsTooltip && (
                  <div className="bg-gray-800 text-white text-xs rounded-md px-1 py-0.5 absolute -left-2 bottom-8">
                    Settings
                  </div>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Sidebar;
