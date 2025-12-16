import { Navigate } from "react-router-dom";
import { auth } from "./auth";

export default function PrivateRoute({ children, roles }) {
  const token = auth.getToken();
  const userRole = auth.getRole();
  if (!token) return <Navigate to="/login" />;
  if (roles && roles.length && !roles.includes(userRole)) return <Navigate to="/" />;
  return children;
}
