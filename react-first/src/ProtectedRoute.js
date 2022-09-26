import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const navigate = useNavigate();
  const loginStatus = props.isLogin();
  if (loginStatus) {
    return <Outlet />;
  }
  navigate("/login");
}
