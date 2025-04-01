import { FaCheckCircle, FaTimesCircle, FaUserTie } from "react-icons/fa";

const dummyProperties = [
  { id: 1, name: "Office Space 1", location: "New York", approved: true },
  { id: 2, name: "Meeting Room 5", location: "San Francisco", approved: false },
];

const Properties = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center">
        <FaUserTie className="text-blue-500 mr-3" /> Properties
      </h2>

      {/* Properties List */}
      <div className="space-y-4">
        {dummyProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white p-6 shadow-lg rounded-xl flex justify-between items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{property.name}</p>
              <p className="text-gray-500">{property.location}</p>
            </div>
            <div className="flex items-center space-x-2">
              {property.approved ? (
                <span className="text-green-600 font-semibold flex items-center">
                  <FaCheckCircle className="mr-1" /> Approved
                </span>
              ) : (
                <span className="text-red-600 font-semibold flex items-center">
                  <FaTimesCircle className="mr-1" /> Pending
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
