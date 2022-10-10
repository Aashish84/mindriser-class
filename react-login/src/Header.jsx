import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./App";

function Header() {
  const loginContext = useContext(LoginContext);

  return (
    <ul className="nav bg-dark">
      <li className="nav-item p-3">
        <Link to="/">home</Link>
      </li>
      <li className="nav-item p-3">
        <Link to="/dashboard">dashboard</Link>
      </li>
      <li className="nav-item p-3">
        <Link to="/login">login</Link>
      </li>
      <li className="nav-item p-3">
        <Link to="/signup">signup</Link>
      </li>
      <li className="nav-item p-3">
        {loginContext.isLogin ? (
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => {
              loginContext.setIsLogin(false);
            }}
          >
            logout
          </button>
        ) : (
          <Link className="btn btn-warning" to="/login">
            login
          </Link>
        )}
      </li>
    </ul>
  );
}

export default Header;
