import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Signup() {
  const { isLoggedIn } = useSelector((store) => store.user);

  const [apiError, setAPIError] = useState("default");
  const [isAPILoading, setIsAPILoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "asis",
    email: "asis@test1.com",
    password: "asis1234",
    role: "buyer",
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsAPILoading(true);
    let url = "https://mern-ecommerce70.herokuapp.com/api/users/signup";

    try {
      let res = await axios.post(url, formData);
      if (res.status === 200) {
        return navigate("/login");
      }
      setIsAPILoading(false);
    } catch (error) {
      setAPIError(
        `${error.response.data.errors[0].msg} : ${error.response.data.errors[0].param} feild`
      );
      setIsAPILoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="col-3 pt-4 m-auto text-capitalize">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            htmlFor="exampleInputName1"
            className="form-label required-field"
          >
            Email name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label required-field"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label required-field"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="exampleFormControlSelect1"
            className="form-label required-field"
          >
            Role
          </label>
          <select
            className="m-2"
            id="exampleFormControlSelect1"
            name="role"
            onChange={handleChange}
            value={formData.role}
          >
            <option disabled value={"DEFAULT"} hidden>
              ...
            </option>
            <option value="seller">seller</option>
            <option value="buyer">buyer</option>
          </select>
        </div>

        <h5 className="m-2 text-danger">{apiError}</h5>

        <div className="d-flex justify-content-evenly align-items-center">
          <div className="d-flex align-items-center">
            <button type="submit" className="btn btn-primary ">
              Sign Up
            </button>
            {isAPILoading && (
              <div className="spinner-border m-2" role="status"></div>
            )}
          </div>
          <Link to="/login">login</Link>
        </div>
      </form>
    </div>
  );
}
