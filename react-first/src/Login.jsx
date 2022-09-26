function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (username === "asis" && password === "asis") {
      // if username == asis  && password == asis then change state of ProtectedRoute
      console.log("valid data");
    } else {
      console.log("invalid data");
    }
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
