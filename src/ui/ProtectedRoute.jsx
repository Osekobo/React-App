import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ role }) {
  const userRole = localStorage.getItem("role");

  if (!userRole) {
    return <Navigate to="/login" />;
  }
  if (!userrole !== role) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
