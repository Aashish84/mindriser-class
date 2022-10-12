import React from "react";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    academic: "",
    isAgreed: false,
    quantity: 0,
  });

  function handelChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function changeCounter(amt) {
    setFormData((prev) => {
      return {
        ...prev,
        quantity: prev.quantity + amt,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form className="col-2 m-auto d-flex flex-column" onSubmit={handleSubmit}>
      <input
        className="mt-2 mb-2"
        type="text"
        placeholder="enter first name"
        name="firstname"
        value={formData.firstname}
        onChange={handelChange}
      />
      <input
        className="mt-2 mb-2"
        type="text"
        placeholder="enter last name"
        name="lastname"
        value={formData.lastname}
        onChange={handelChange}
      />
      <p className="mb-0">academic : </p>
      <select
        name="academic"
        className="mb-2"
        defaultValue={"DEFAULT"}
        onChange={handelChange}
      >
        <option disabled value={"DEFAULT"} hidden>
          ...
        </option>
        <option value="slc">slc</option>
        <option value="+2">+2</option>
        <option value="bachelor">bachelor</option>
      </select>

      <div className="d-flex align-items-center">
        <button type="button" className="m-2" onClick={() => changeCounter(1)}>
          +
        </button>
        <h1>{`qty ${formData.quantity}`}</h1>
        <button type="button" className="m-2" onClick={() => changeCounter(-1)}>
          -
        </button>
      </div>

      <div className="">
        <input
          id="chkbox"
          type="checkbox"
          name="isAgreed"
          checked={formData.isAgreed}
          onChange={handelChange}
        />
        <label htmlFor="chkbox">terms and condition</label>
      </div>

      <button
        className="mt-2 mb-2 btn btn-primary"
        type="submit"
        disabled={!formData.isAgreed}
      >
        submit
      </button>
    </form>
  );
}
