import { FaCheckCircle, FaTimesCircle, FaUserTie } from "react-icons/fa";

const dummyOwners = [
  { id: 1, name: "John Doe", email: "john@example.com", verified: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", verified: false },
];

const Owners = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center">
        <FaUserTie className="text-blue-500 mr-3" /> Owners
      </h2>

      {/* Owners List */}
      <div className="space-y-4">
        {dummyOwners.map((owner) => (
          <div
            key={owner.id}
            className="bg-white p-5 shadow-md rounded-lg flex justify-between items-center transition transform hover:scale-105"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{owner.name}</p>
              <p className="text-gray-500">{owner.email}</p>
            </div>
            <div className="flex items-center space-x-2">
              {owner.verified ? (
                <span className="text-green-600 font-semibold flex items-center">
                  <FaCheckCircle className="mr-1" /> Verified
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

export default Owners;
