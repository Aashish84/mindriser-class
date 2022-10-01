import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import Header from "./component/Header";
import ColorChanger from "./component/ColorChanger";
import Counter from "./component/Counter";
import Users from "./component/Users";
import SingleUser from "./component/SingleUser";
import ProtectedRoute from "./component/ProtectedRoute";
import Login from "./component/Login";

export const HeaderContext = createContext({ username: "", logOut: () => {} });
export const LoginContext = createContext();

function App() {
  const [username, setUsername] = useState();
  const [isLogin, setIsLogin] = useState(false);

  function validateLogin(username, password) {
    if (username === "test" && password === "test") {
      setIsLogin(true);
      setUsername(username);
    }
  }

  function logOut() {
    setIsLogin(false);
    setUsername();
  }

  return (
    <BrowserRouter>
      <HeaderContext.Provider value={{ username, logOut }}>
        <Header logOut={logOut} username={username} />
      </HeaderContext.Provider>

      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="colorchanger" element={<ColorChanger />} />

        {/* <LoginContext.Provider value={validateLogin}> */}
        <Route path="login" element={<Login validateLogin={validateLogin} />} />
        {/* </LoginContext.Provider> */}

        <Route path="users" element={<ProtectedRoute loginStatus={isLogin} />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<SingleUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
