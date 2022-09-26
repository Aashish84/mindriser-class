import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  if (loginStatus) {
    return <Outlet />;
  }

  return navigate("/login");
}
