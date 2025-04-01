import { useState } from "react";
import { FaCheck, FaTimes, FaUserShield } from "react-icons/fa";

const KYCRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "Michael", email: "michael@example.com", status: "Pending" },
    { id: 2, name: "Sarah", email: "sarah@example.com", status: "Pending" },
  ]);

  const handleAction = (id, action) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center">
        <FaUserShield className="text-blue-500 mr-3" /> KYC Requests
      </h2>

      {/* KYC Requests Container */}
      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className={`bg-white p-5 shadow-md rounded-lg flex justify-between items-center transition transform hover:scale-105 ${
              req.status === "Approved" ? "border-green-500 border-2" : ""
            } ${req.status === "Rejected" ? "border-red-500 border-2" : ""}`}
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{req.name}</p>
              <p className="text-gray-500">{req.email}</p>
              <p
                className={`font-semibold mt-2 ${
                  req.status === "Approved" ? "text-green-500" : ""
                } ${req.status === "Rejected" ? "text-red-500" : ""}`}
              >
                {req.status}
              </p>
            </div>
            {req.status === "Pending" ? (
              <div className="flex space-x-3">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600 transition"
                  onClick={() => handleAction(req.id, "Approved")}
                >
                  <FaCheck className="mr-2" /> Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600 transition"
                  onClick={() => handleAction(req.id, "Rejected")}
                >
                  <FaTimes className="mr-2" /> Reject
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KYCRequests;
