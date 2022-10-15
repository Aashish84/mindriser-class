import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { amount } = useSelector((store) => store.cart);

  return (
    <div className="nav p-2 bg-dark text-light">{`total items = ${amount}`}</div>
  );
}
