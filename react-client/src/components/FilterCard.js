import React, { useState } from "react";

export default function FilterCard(props) {
  const initialInput = {
    search_term: "",
    price_from: "",
    price_to: "",
  };

  const [filterData, setFilterData] = useState(initialInput);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(filterData);
    props.setUrl(
      `${process.env.REACT_APP_API_URL}/products?page=1&per_page=${props.perPage}&search_term=${filterData.search_term}&price_from=${filterData.price_from}`
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFilterData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <h1>FilterCard</h1>
        <span className="m-2">
          {props.isAPILoading && (
            <div className="spinner-border" role="status"></div>
          )}
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.setUrl(
                // initial url of home
                `${process.env.REACT_APP_API_URL}/products?page=1&per_page=${props.perPage}`
              );
              setFilterData(initialInput);
            }}
          >
            clear all filter
          </button>
        </div>

        <div className="d-flex align-items-center form-group">
          <input
            type="text"
            className="form-control"
            placeholder="enter product name"
            name="search_term"
            value={filterData.search_term}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            filter
          </button>
        </div>

        <label htmlFor="min">min:</label>
        <input
          type="number"
          id="min"
          className="m-2 sm-input"
          value={filterData.price_from}
          name="price_from"
          onChange={handleChange}
        />
        <label htmlFor="max">max:</label>
        <input
          type="number"
          id="max"
          className="m-2 sm-input"
          value={filterData.price_to}
          name="price_to"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
