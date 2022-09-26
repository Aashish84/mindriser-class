import { useState } from "react";

function About() {
  const [user, setUser] = useState({
    username: "change it",
    password: "password",
  });

  function handleChangeName() {
    const new_name = Math.random().toString(36).slice(2, 7);
    setUser({ ...user, username: new_name });
  }

  return (
    <div className="about">
      <h1>hello:{user.username}</h1>
      <button onClick={handleChangeName}>changename</button>
    </div>
  );
}

export default About;
