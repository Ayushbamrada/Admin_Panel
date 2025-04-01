import { FaUsers, FaUserTie, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">🚀 Admin Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 transform transition hover:scale-105">
          <FaUsers className="text-blue-500 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-gray-900">1,200</p>
          </div>
        </div>

        {/* Total Owners */}
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 transform transition hover:scale-105">
          <FaUserTie className="text-green-500 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Total Owners</h3>
            <p className="text-2xl font-bold text-gray-900">350</p>
          </div>
        </div>

        {/* App Traffic */}
        <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 transform transition hover:scale-105">
          <FaChartLine className="text-red-500 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">App Traffic</h3>
            <p className="text-2xl font-bold text-gray-900">50,000 visits</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h3>
        <ul className="space-y-3">
          <li className="p-3 border-l-4 border-blue-500 bg-gray-50">🔹 John Doe booked "Office Space 1"</li>
          <li className="p-3 border-l-4 border-green-500 bg-gray-50">🔹 Jane Smith uploaded a new property</li>
          <li className="p-3 border-l-4 border-yellow-500 bg-gray-50">🔹 Alex's KYC verification is pending</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
