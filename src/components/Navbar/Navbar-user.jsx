import React from "react";
import "./component.css";
import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import logo from "./logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <Button href="/">
            <img src={logo} alt="Logo" />
          </Button>
        </div>
        <div className="button-container">
          <ShoppingCartIcon color="secondary" />
          <p>
            <Link reloadDocument to={`/menuclass/1`}>
              My Class
            </Link>
          </p>
          <p>Invoice</p>
          <p>|</p>
          <PersonIcon color="primary" />
          <LogoutIcon color="secondary" />
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
