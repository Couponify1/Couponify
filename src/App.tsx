import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import "./scss/app.css";

import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Categories } from "./components/pages/Categories";
import ChangePassword from "./components/pages/ChangePassword";
import { Dashboard } from "./components/pages/Dashboard";
import Checkout from "./components/pages/Payments/Checkout";
import AddCoupon from "./components/pages/AddCoupon";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Categories />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/changepassword"} element={<ChangePassword />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/payment"} element={<Checkout />} />
        <Route path={"/add-coupon"} element={<AddCoupon />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
