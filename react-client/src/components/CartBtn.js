import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductWrapper } from "../redux/reducer/cartSlice";

import CartIcon from "../assets/image/cartbtn.svg";

export default function CartBtn(props) {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.user);

  if (!isLoggedIn) {
    return (
      <Link className="btn btn-success" to="/login">
        <img src={CartIcon} alt="cart_icon" />
      </Link>
    );
  }

  return (
    <button
      className="btn btn-success"
      // onClick={() => dispatch(addProduct(product))}
      onClick={() => dispatch(addProductWrapper(props.product))}
    >
      <img src={CartIcon} alt="cart_icon" />
    </button>
  );
}
