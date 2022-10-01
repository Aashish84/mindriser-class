import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleUser() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return <h1>hello {user?.name || "loading..."} </h1>;
}
export default SingleUser;
