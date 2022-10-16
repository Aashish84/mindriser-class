import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setUser } from "../redux/reducer/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.user);
  const navigate = useNavigate();

  // loading status until response from api
  const [isAPILoading, setIsAPILoading] = useState(false);

  // for error recived from api
  const [apiError, setAPIError] = useState("");

  // for login form
  const [loginData, setLoginData] = useState({
    email: "asis@test1.com",
    password: "asis1234",
  });

  // if already logged-in
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsAPILoading(true);
    try {
      // login and get jwt-token then add to localStorage
      let url = "https://mern-ecommerce70.herokuapp.com/api/users/login";
      const login_res = await axios.post(url, loginData);
      localStorage.setItem("access_token", login_res.data.access_token);

      // verify jwt-token and get user from jwt-token
      url = "https://mern-ecommerce70.herokuapp.com/api/users/get-user";
      let config = {
        headers: { Authorization: `Bearer ${login_res.data.access_token}` },
      };
      const user_res = await axios.get(url, config);

      // set state of user
      dispatch(setUser({ user: user_res.data }));

      setIsAPILoading(false);
      navigate(-1);
    } catch (error) {
      setAPIError(error.response.data.msg);
      localStorage.removeItem("access_token");
      setIsAPILoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="col-2 pt-4 m-auto text-capitalize">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            disabled={isAPILoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            disabled={isAPILoading}
          />
        </div>
        <h5 className="m-2 text-danger">{apiError}</h5>
        <div className="d-flex justify-content-evenly align-items-center">
          <div className="d-flex align-items-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isAPILoading}
            >
              Login
            </button>
            {isAPILoading && (
              <div className="spinner-border m-2" role="status"></div>
            )}
          </div>

          <Link type="submit" className="" to="/signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
