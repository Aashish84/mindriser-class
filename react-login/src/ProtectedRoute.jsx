import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props) {
  if (props.isLogin) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}

export default ProtectedRoute;
