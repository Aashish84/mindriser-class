import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ReactSwitch from "react-switch";

export default function Signup(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    age: 0,
    isAgreed: false,
  });
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setFormData((prev) => {
      return {
        ...prev,
        isAgreed: check,
      };
    });
  }, [check]);

  if (props.isLogin) {
    return <Navigate to="/dashboard" />;
  }

  function handleChange(e) {
    let { name, value, type } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form className="col-4 m-auto text-capitalize" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="input1" className="p-2">
          username
        </label>
        <input
          id="input1"
          type="text"
          name="username"
          className="form-control"
          onChange={handleChange}
          value={formData.username}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input2" className="p-2">
          password
        </label>
        <input
          id="input2"
          type="password"
          name="password"
          className="form-control"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="p-2">
          age
        </label>
        <input
          id="input3"
          type="number"
          name="age"
          className="form-control"
          onChange={handleChange}
          value={formData.age}
        />
      </div>
      <div className="form-group d-flex align-items-center">
        <ReactSwitch
          className="m-2"
          id="chkbox"
          onChange={(checked) => {
            setCheck(checked);
          }}
          checked={check}
        />
        <label htmlFor="chkbox">terms and condition</label>
      </div>
      <div className="form-group">
        {check && (
          <button type="submit" className="btn btn-primary">
            signin
          </button>
        )}
      </div>
    </form>
  );
}
