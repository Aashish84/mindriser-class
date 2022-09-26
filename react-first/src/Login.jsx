import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    props.validateLogin(username, password);
    navigate("/user");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username :
        <input type="text" name="username" />
      </label>
      <br />
      <br />
      <label>
        password :
        <input type="text" name="password" />
      </label>
      <br />
      <br />
      <button type="submit">login</button>
    </form>
  );
}

export default Login;