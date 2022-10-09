import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { IsLoginContext } from "../App";

export default function ProtectedRoute() {
  const loginStatus = useContext(IsLoginContext);
  if (loginStatus) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}
