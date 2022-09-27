import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(props) {
  const loginStatus = props.isLogin();
  if (loginStatus) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}
