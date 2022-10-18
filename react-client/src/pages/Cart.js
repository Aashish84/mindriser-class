import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import { updateAmtTotal } from "../redux/reducer/cartSlice";

export default function Cart() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAmtTotal());
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <section className="h-100 ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2 border-rounded bg-light">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <h6 className="mb-0 text-muted">{amount} items</h6>
                      </div>
                      <hr className="my-4" />
                      {/* cart item start */}
                      {cartItems.map((product) => {
                        return <CartItem {...product} key={product._id} />;
                      })}
                      {/* cart item end */}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to="/" className="text-body">
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* left end */}
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>Rs. {total}</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
