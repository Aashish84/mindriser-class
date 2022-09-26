import React from "react";
import { useState, useEffect } from "react";

function FakeApiCall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <ul>
        {data.length > 0 ? (
          data.map((el, index) => (
            <li key={el.id}>
              {index} = {el.title}
            </li>
          ))
        ) : (
          <h1>loading.. from api</h1>
        )}
      </ul>
    </>
  );
}

export default FakeApiCall;
