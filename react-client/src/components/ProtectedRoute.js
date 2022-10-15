import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoggedIn: status } = useSelector((store) => store.user);

  if (status) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
