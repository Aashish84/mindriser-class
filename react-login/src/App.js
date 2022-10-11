import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./login";

import Signin from "./Signin";

export const LoginContext = createContext();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <Header />
      </LoginContext.Provider>

      <Routes>
        <Route element={<ProtectedRoute isLogin={isLogin} />}>
          <Route path="dashboard" element={<h1>dashboard</h1>} />
        </Route>

        <Route index element={<h1>hello</h1>} />
        <Route path="login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="signin" element={<Signin isLogin={isLogin} />} />
      </Routes>
    </>
  );
}
