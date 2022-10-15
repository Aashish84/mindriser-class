import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  };

  async function handleClick() {
    const url = "https://mern-ecommerce70.herokuapp.com/api/orders";

    try {
      const res = await axios.get(url, config);
      console.log(res.data.data.length);
    } catch (error) {
      localStorage.removeItem("access_token");
      return navigate("/login");
    }
  }

  return <button onClick={handleClick}>click</button>;
}
