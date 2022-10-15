import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../features/cart/cartSlice";
import { openModel } from "../features/modal/modalSlice";
import CartItems from "./CartItems";

export default function CartContainer() {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <>
        <h1>no items in cart</h1>{" "}
        <button
          className="btn btn-primary m-auto"
          onClick={() => dispatch(getCartItems())}
        >
          reset cart
        </button>
      </>
    );
  }

  return (
    <div className="col-6 m-auto">
      {cartItems.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
      <div className="d-flex flex-column aligh-items-end">
        <h4>total price : {total}</h4>
        <button
          className="btn btn-primary m-auto"
          onClick={() => dispatch(openModel())}
        >
          clear cart
        </button>
      </div>
    </div>
  );
}
