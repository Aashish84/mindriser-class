import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, toggleItemQty } from "../redux/reducer/cartSlice";

import new_product from "../assets/image/new-product.jpg";

export default function CartItem({ _id, name, price, image, quantity }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={image || new_product}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-black mb-0">{name}</h6>
        </div>

        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            className="btn btn-primary m-2 px-2"
            onClick={() => dispatch(toggleItemQty({ amt: -1, _id }))}
          >
            -
          </button>

          <h4 className="px-2 m-2">{quantity}</h4>

          <button
            className="btn btn-primary px-2 m-2"
            onClick={() => dispatch(toggleItemQty({ amt: 1, _id }))}
          >
            +
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0 text-center">Rs. {price}</h6>
          <button
            className="btn btn-danger ms-4 p-1 m-2"
            onClick={() => dispatch(removeItem(_id))}
          >
            {" "}
            remove{" "}
          </button>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" className="text-muted">
            <i className="fas fa-times"></i>
          </a>
        </div>
      </div>

      <hr className="my-4" />
    </>
  );
}
