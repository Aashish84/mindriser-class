import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logOutUserWrapper } from "../redux/reducer/userSlice";

export default function Navbar() {
  const { isLoggedIn, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-capitalize">
        {isLoggedIn && (
          <p className="text-dark m-0 rounded-circle bg-light p-2 m-2">{`${user.name}`}</p>
        )}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/cart">
                cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/order">
                order
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <button
                className="text-primary bg-dark border-0"
                onClick={() => {
                  dispatch(logOutUserWrapper());
                }}
              >
                logOut
              </button>
            ) : (
              <Link className="nav-item nav-link text-primary m-2" to="/login">
                login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
