import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

function Login(props) {
  const navigate = useNavigate();
  const loginContext = useContext(LoginContext);
  console.log(loginContext);

  const formStyle = {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username && password) {
      props.validateLogin(username, password);
    }
    return navigate(-1);
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label className="seperate">
        username:
        <input type="text" name="username" />
      </label>
      <label className="seperate">
        password:
        <input type="password" name="password" />
      </label>
      <button type="submit" className="seperate">
        login
      </button>
    </form>
  );
}
export default Login;
