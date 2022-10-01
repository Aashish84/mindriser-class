import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ loginStatus }) {
  if (loginStatus) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}
