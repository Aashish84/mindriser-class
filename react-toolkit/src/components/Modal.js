import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModel } from "../features/modal/modalSlice";

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="fixed-top fixed-bottom transparant-bg d-flex align-items-center">
      <div className="bg-light w-25 m-auto p-2">
        <h4 className="mb-5">Remove all items from your shopping cart?</h4>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModel());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(closeModel())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
