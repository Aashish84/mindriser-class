import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./components/Dashboard";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import FakeApiCall from "./components/FakeApiCall";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  function isLogin() {
    return loginStatus;
  }

  function validateLogin(username, password) {
    if (username === "test" && password === "test") {
      setLoginStatus(true);
    }
  }

  function handleLogout() {
    setLoginStatus(false);
  }

  return (
    <>
      <Header handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fakeapicall" element={<FakeApiCall />} />

        <Route
          path="/login"
          element={<Login validateLogin={validateLogin} />}
        />

        <Route path="user" element={<ProtectedRoute isLogin={isLogin} />}>
          <Route index element={<h1>user main</h1>} />
          <Route path=":id" element={<h1>singleuser</h1>} />
          <Route path="admin" element={<h1>admin users</h1>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <About />
    </>
  );
}

export default App;