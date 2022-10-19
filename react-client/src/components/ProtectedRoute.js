import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ role }) {
  const { isLoggedIn, user } = useSelector((store) => store.user);

  if (role) {
    // if loggedIn and role not match
    if (isLoggedIn && role !== user?.role) {
      return (
        <div className="text-center">
          <h1>forbidden route</h1>
          <h4>logout and login as : {role}</h4>
        </div>
      );
    }
  }

  // should be loggedIN
  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
