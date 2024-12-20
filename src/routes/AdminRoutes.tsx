import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/adminpages/AdminHome";
import ManageVehicles from "../pages/adminpages/ManageVehicles";
import ManageBookings from "../pages/adminpages/ManageBookings";
import ManageUsers from "../pages/adminpages/ManageUsers";
import Reports from "../pages/adminpages/Reports";
import Sidebar from "../components/Adim/SideBar";
import Addvehicle from "../pages/adminpages/Addvehicle";

const AdminRoutes: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cars" element={<ManageVehicles />} />
          <Route path="/bookings" element={<ManageBookings />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/addvehicle" element={<Addvehicle/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
