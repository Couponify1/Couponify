import React from "react";
import { Routes } from "react-router-dom";
import Nav from "./components/layout/Nav";
import "./scss/app.css";

import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes></Routes>
    </ThemeProvider>
  );
}

export default App;
