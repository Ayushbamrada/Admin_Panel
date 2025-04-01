import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dasboard";
import Owners from "./pages/Owners";
import Properties from "./pages/Properties";
import Bookings from "./pages/Bookings";
import KYCRequests from "./pages/KYCRequests";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/kyc-requests" element={<KYCRequests />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
