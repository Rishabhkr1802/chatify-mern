import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function GuestRoute() {
  const { user } = useSelector((state) => state.auth);

  if (user) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default function ProtectedRoute() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
