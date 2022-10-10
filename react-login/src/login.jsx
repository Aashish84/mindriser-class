import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "test" && password === "test") {
      props.setIsLogin(true);
      navigate(-1);
    }
  };

  return (
    <>
      <h1 className="text-center">Login</h1>
      <form className="d-flex flex-column col-2 m-auto" onSubmit={handleSubmit}>
        <input
          className="m-2"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="enter username"
        />

        <input
          className="m-2"
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="enter password"
        />

        <input className="btn btn-primary m-2" type="submit" value="login" />
      </form>
    </>
  );
}
