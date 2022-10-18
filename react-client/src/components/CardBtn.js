import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartBtn from "./CartBtn";

export default function CardBtn({ product }) {
  const { cartItems } = useSelector((store) => store.cart);

  if (cartItems.find((item) => item._id === product._id)) {
    return (
      <Link to="/cart" className="btn btn-success text-capitalize">
        goto cart
      </Link>
    );
  }
  return <CartBtn product={product} />;
}
