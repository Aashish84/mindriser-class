import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { setUser } from "./redux/reducer/userSlice";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // fetch user form jwt-token on localStorage
  async function fetchInitialUser() {
    let access_token = localStorage.getItem("access_token");
    if (access_token) {
      // verify jwt-token of localStorage
      try {
        const url = "https://mern-ecommerce70.herokuapp.com/api/users/get-user";
        const config = {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };

        const res = await axios.get(url, config);
        dispatch(setUser({ user: res.data }));
      } catch (error) {
        console.log("log in for better experience");
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialUser();
    // eslint-disable-next-line
  }, []);

  console.log("App render..");

  if (loading) {
    return (
      <div className="vh-100 row align-items-center justify-content-center">
        <button className="btn btn-primary col-1" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Route>

        <Route path="/product/:id" element={<Product />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
