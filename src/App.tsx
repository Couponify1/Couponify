import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import "./scss/app.css";

import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Categories } from "./components/pages/Categories";
import ChangePassword from "./components/pages/ChangePassword";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Categories />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/changepassword"} element={<ChangePassword />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
