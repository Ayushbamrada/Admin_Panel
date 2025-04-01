const dummyBookings = [
    { id: 1, user: "Alice", property: "Office Space 1", date: "2025-04-02", status: "Confirmed" },
    { id: 2, user: "Bob", property: "Meeting Room 5", date: "2025-04-05", status: "Pending" },
  ];
  
  const Bookings = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">📋 Bookings</h2>
  
        <div className="bg-white shadow-lg rounded-lg p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Property</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyBookings.map((booking) => (
                <tr key={booking.id} className="border-b transition hover:bg-gray-100">
                  <td className="p-3">{booking.user}</td>
                  <td className="p-3">{booking.property}</td>
                  <td className="p-3">{booking.date}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-white text-sm font-bold ${
                      booking.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Bookings;
  