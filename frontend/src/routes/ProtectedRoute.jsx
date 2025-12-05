import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { connectSocket } from "../utils/Socket";

export function GuestRoute() {
  const { user } = useSelector((state) => state.auth);

  if (user) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default function ProtectedRoute() {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

   useEffect(() => {
    if (isAuthenticated && user?._id) {
      connectSocket(user._id);
    }
  }, [isAuthenticated, user]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
