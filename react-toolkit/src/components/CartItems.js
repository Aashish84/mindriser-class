import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, toggleItemAmt } from "../features/cart/cartSlice";

export default function CartItems(props) {
  const dispatch = useDispatch();
  const { id, title, price, img, amount } = props;

  const img_style = {
    width: "100px",
    height: "100px",
  };

  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <div className="d-flex">
          <img src={img} alt={title} className="mh-100" style={img_style} />
          <div>
            <h2>{title}</h2>
            <h4>{price}</h4>
            <button onClick={() => dispatch(removeItem(id))}>remove</button>
          </div>
        </div>
        <div className="d-flex flex-column">
          <button
            onClick={() => dispatch(toggleItemAmt({ amt: 1, itemID: id }))}
          >
            inc
          </button>
          <h4 className="text-center">{amount}</h4>
          <button
            onClick={() => dispatch(toggleItemAmt({ amt: -1, itemID: id }))}
          >
            dec
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
