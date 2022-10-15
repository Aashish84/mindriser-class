import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ValidateContext } from "../App";

function Login(props) {
  const loginContext = useContext(ValidateContext);
  const navigate = useNavigate();
  console.log({ loginContext });

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
    props.setUsername("asis");
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
