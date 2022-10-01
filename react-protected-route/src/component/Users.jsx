import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users?.length > 0 ? (
        users.map((el) => (
          <li key={el.id}>
            <Link to={`/users/${el.id}`}>{el.name}</Link>
          </li>
        ))
      ) : (
        <h1>loading...</h1>
      )}
    </ul>
  );
}
