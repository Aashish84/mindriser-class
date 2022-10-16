import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Signup() {
  const { isLoggedIn } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const [apiError, setAPIError] = useState("");
  const [isAPILoading, setIsAPILoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "asis",
    email: "asis@test1.com",
    password: "asis1234",
    role: "buyer",
    confirmPassword: "asis1234",
  });

  const [formDataError, setFormDataError] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    confirmPassword: "",
  });

  // check if confirm password and password are equal
  useEffect(() => {
    let newPasswordError = "";
    if (formData.password !== formData.confirmPassword) {
      newPasswordError = " password not matched";
    }
    setFormDataError((prev) => {
      return {
        ...prev,
        password: newPasswordError,
      };
    });
  }, [formData.password, formData.confirmPassword]);

  // check if already logged in
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  // function to check if any field is empty
  // return true if first empty field found
  function ifFormDataEmpty() {
    for (let key in formData) {
      if (!formData[key]) {
        setFormDataError((prev) => {
          return {
            ...prev,
            [key]: " required",
          };
        });
        return true;
      }
    }
    return false;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsAPILoading(true);

    // check if any form field is empty
    // return if any empty
    if (ifFormDataEmpty()) {
      setIsAPILoading(false);
      return;
    }

    // api call after submit
    try {
      let url = "https://mern-ecommerce70.herokuapp.com/api/users/signup";
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
            <span className="text-danger ">{formDataError.name}</span>
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
            <span className="text-danger ">{formDataError.email}</span>
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
            <span className="text-danger ">{formDataError.password}</span>
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
            htmlFor="exampleInputPassword2"
            className="form-label required-field"
          >
            Confirm Password :
            <span className="text-danger">{formDataError.confirmPassword}</span>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="exampleFormControlSelect1"
            className="form-label required-field"
          >
            Role
            <span className="text-danger">{formDataError.role}</span>
          </label>
          <select
            className="m-2"
            id="exampleFormControlSelect1"
            name="role"
            onChange={handleChange}
            value={formData.role}
          >
            <option disabled value={""} hidden>
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
