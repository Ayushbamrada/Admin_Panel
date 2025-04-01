import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaBuilding, FaClipboardList, FaIdBadge } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen p-5 shadow-lg flex flex-col justify-between">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-extrabold mb-5 tracking-wide animate-pulse">Admin Panel</h2>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-4">
          <li className="group">
            <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg transition duration-300 ease-in-out bg-gray-800 hover:bg-blue-500 hover:scale-105">
              <FaHome className="text-xl group-hover:rotate-180 transition duration-300" />
              <span className="font-semibold">Dashboard</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/owners" className="flex items-center space-x-3 p-3 rounded-lg transition duration-300 ease-in-out bg-gray-800 hover:bg-green-500 hover:scale-105">
              <FaUsers className="text-xl group-hover:rotate-180 transition duration-300" />
              <span className="font-semibold">Owners</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/properties" className="flex items-center space-x-3 p-3 rounded-lg transition duration-300 ease-in-out bg-gray-800 hover:bg-purple-500 hover:scale-105">
              <FaBuilding className="text-xl group-hover:rotate-180 transition duration-300" />
              <span className="font-semibold">Properties</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/bookings" className="flex items-center space-x-3 p-3 rounded-lg transition duration-300 ease-in-out bg-gray-800 hover:bg-yellow-500 hover:scale-105">
              <FaClipboardList className="text-xl group-hover:rotate-180 transition duration-300" />
              <span className="font-semibold">Bookings</span>
            </Link>
          </li>
          <li className="group">
            <Link to="/kyc-requests" className="flex items-center space-x-3 p-3 rounded-lg transition duration-300 ease-in-out bg-gray-800 hover:bg-red-500 hover:scale-105">
              <FaIdBadge className="text-xl group-hover:rotate-180 transition duration-300" />
              <span className="font-semibold">KYC Requests</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm mt-5">
        <p>&copy; 2025 Admin Panel</p>
      </div>
    </div>
  );
};

export default Sidebar;
