import React, { useState } from "react";

export default function FilterCard(props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchError, setSearchError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInput) {
      props.setUrl(
        `${process.env.REACT_APP_API_URL}/products?search_term=${searchInput}`
      );
      setSearchError("");
      return;
    }
    setSearchError("empty search key");
  }

  return (
    <div>
      <h1>FilterCard</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center">
          <input
            type="text"
            value={searchInput}
            name="search"
            placeholder="enter product name"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">search</button>
        </div>
        <p className="text-danger">{searchError}</p>
        <span>
          {props.isAPILoading && (
            <div className="spinner-border" role="status"></div>
          )}
        </span>
      </form>
    </div>
  );
}
