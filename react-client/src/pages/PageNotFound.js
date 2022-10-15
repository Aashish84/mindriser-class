import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <h1>404</h1>
      <h4>page not found</h4>
      <Link to="/">go back to home</Link>
    </div>
  );
}
