import React from "react";
import { Link } from "react-router-dom";

import new_product from "../assets/image/new-product.jpg";
import CardBtn from "./CardBtn";

export default function Card({ product }) {
  return (
    <div className="col-3 p-2" key={product._id}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          style={{ height: "300px" }}
          src={product.images[0] || new_product}
          alt="Cardimage"
        />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{product.name}</h5>
          <p className="card-text">Rs. {product.price}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/product/${product._id}`} className="btn btn-primary">
              view detail
            </Link>
            {/* toggle cart btn */}
            <CardBtn product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
