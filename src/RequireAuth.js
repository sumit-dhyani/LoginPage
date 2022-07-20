import { Navigate, useLocation } from "react-router";
import { useAuth } from "./auth";

export default function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  return !auth.user ? (
    <Navigate to="/login" state={{ path: location.pathname }} />
  ) : (
    children
  );
}
