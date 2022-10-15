import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import Header from "./component/Header";
import ColorChanger from "./component/ColorChanger";
import Counter from "./component/Counter";
import Users from "./component/Users";
import SingleUser from "./component/SingleUser";
import ProtectedRoute from "./component/ProtectedRoute";
import Login from "./component/Login";

export const HeaderContext = createContext();
export const IsLoginContext = createContext();
export const ValidateContext = createContext();

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
      <HeaderContext.Provider
        value={{ username, logOut, setIsLogin, setUsername }}
      >
        <Header logOut={logOut} username={username} />
      </HeaderContext.Provider>

      <IsLoginContext.Provider value={isLogin}>
        <ValidateContext.Provider value={validateLogin}>
          <Routes>
            <Route
              path="login"
              element={
                <Login
                  validateLogin={validateLogin}
                  setUsername={setUsername}
                />
              }
            />
          </Routes>
        </ValidateContext.Provider>

        <Routes>
          <Route path="counter" element={<Counter />} />
          <Route path="colorchanger" element={<ColorChanger />} />
          <Route path="users" element={<ProtectedRoute />}>
            <Route index element={<Users />} />
            <Route path=":id" element={<SingleUser />} />
          </Route>
        </Routes>
      </IsLoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
