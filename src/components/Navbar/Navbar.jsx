import React from "react";
import "./component.css";
import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <Button href="/">
            <img src={logo} alt="Logo" />
          </Button>
        </div>
        <div className="button-container">
          <Button
            variant="outlined"
            sx={{ ml: 4, width: 175, py: 1, px: 6 }}
            color="secondary"
            href="/register"
          >
            Register
          </Button>
          <Button
            href="/login"
            variant="contained"
            sx={{ ml: 4, width: 175, py: 1, px: 6 }}
          >
            Login
          </Button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
