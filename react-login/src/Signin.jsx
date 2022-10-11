import { ErrorResponse } from "@remix-run/router";
import React, { useEffect, useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

export default function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    termsAgreed: false,
  });

  const [formError, setFormError] = useState({
    username: "required",
    password: "required",
    email: "required",
    phone: "required",
    termsAgreed: "must be agreed",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    let errors = [
      {
        value: "",
        msg: "the email field is already user",
        param: "email",
        location: "body",
      },
    ];

    errors.forEach((el) => {
      setFormError((prev) => {
        return {
          ...prev,
          [el.param]: el.msg,
        };
      });
    });
  }

  useEffect(() => {
    validateFormData();
  }, [formData]);

  function validateFormData() {
    // if any value in input clear required errorMsg
    for (const key in formData) {
      let msg = "requried";
      if (formData[key]) {
        msg = "";
      } else {
        msg = "required";
      }

      setFormError((prev) => {
        return {
          ...prev,
          [key]: msg,
        };
      });
    }
  }

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    // validateFormData();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-2">
        <label htmlFor="input1">username : </label>
        <input
          type="text"
          id="input1"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <ErrorMessage
          formData={formData}
          formError={formError}
          name="username"
        />
      </div>
      <div className="m-2">
        <label htmlFor="input2">password :</label>
        <input
          type="text"
          id="input2"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <ErrorMessage
          formData={formData}
          formError={formError}
          name="password"
        />
      </div>
      <div className="m-2">
        <label htmlFor="input3">email :</label>
        <input
          type="text"
          id="input3"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <ErrorMessage formData={formData} formError={formError} name="email" />
      </div>
      <div className="m-2">
        <label htmlFor="input4">phone :</label>
        <input
          type="text"
          id="input4"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone}
        />
        <ErrorMessage formData={formData} formError={formError} name="phone" />
      </div>
      <div className="m-2">
        <input
          id="chkbox"
          type="checkbox"
          name="termsAgreed"
          value={formData.termsAgreed}
          onChange={handleChange}
        />
        <label htmlFor="chkbox">terms and condition</label>
        <ErrorMessage
          formData={formData}
          formError={formError}
          name="termsAgreed"
        />
      </div>
      <button
        type="submit"
        className="btn btn-warning"
        disabled={!formData.termsAgreed}
      >
        signin
      </button>
    </form>
  );
}
