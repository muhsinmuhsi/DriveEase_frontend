import { Navigate } from "react-router-dom";

const AdminProtected: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAdmin = localStorage.getItem("admin_token"); // Example check
  return isAdmin ? children : <Navigate to="/login" />;
};

export default AdminProtected;
