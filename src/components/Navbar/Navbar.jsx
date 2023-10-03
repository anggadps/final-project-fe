import React, { useState } from "react";
import "./component.css";
import { Button } from "@mui/material";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import logo from "./logo.png";
import useAuth from "../../hooks/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import tokenDecode from "jwt-decode";

function Navbar() {
  const { isLoggedIn, logout, payload } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const cartClick = () => {
    navigate("/cart");
    toggleDrawer();
  };

  const adminClick = () => {
    navigate("/admin");
    toggleDrawer();
  };

  // mendapatkan rolesnya
  let userRoles = null;
  console.log(userRoles)
  const decode = () => {
    if (payload !== null) {
      userRoles = tokenDecode(payload.token)
      return userRoles
    } else {
      return { role: "unknow" }
    }
  }


  return (
    <div>
      <nav>
        <div className="logo-button">
          <Button href="/">
            <img src={logo} alt="Logo" />
          </Button>
        </div>

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <div className="drawer-content">
            <ul>
              {isLoggedIn ? (
                <>
                  <li>
                    <Button variant="contained" sx={{ width: 120 }}>
                      <Link
                        reloadDocument
                        to={`/myclass`}
                        onClick={toggleDrawer}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        My Class
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="contained" sx={{ width: 120 }}>
                      <Link
                        reloadDocument
                        to={`/invoice`}
                        onClick={toggleDrawer}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Invoice
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <ShoppingCartIcon
                      onClick={cartClick}
                      color="secondary"
                      cursor="pointer"
                    />
                  </li>
                  <li onClick={adminClick}>
                      <PersonIcon color="primary" />
                  </li>
                  <li onClick={handleLogout}>
                    <LogoutIcon cursor="pointer" color="secondary" />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button
                      variant="outlined"
                      sx={{ width: "100%" }}
                      color="secondary"
                      href="/register"
                      onClick={toggleDrawer}
                    >
                      Register
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="/login"
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={toggleDrawer}
                    >
                      Login
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Drawer>
        {/* Render the button to open Drawer */}

        <div className="button-container">
          {isLoggedIn ? (
            <>
              <ShoppingCartIcon
                onClick={() => navigate("/cart")}
                color="secondary"
                cursor="pointer"
              />
              <p>
                <Link reloadDocument to={`/myclass`}>
                  My Class
                </Link>
              </p>
              <p>
                <Link reloadDocument to={`/invoice`}>
                  Invoice
                </Link>
              </p>
              <p>|</p>


              {decode().role === "admin" && (
                <PersonIcon onClick={adminClick} cursor="pointer" color="primary" />
              )}


              <LogoutIcon
                onClick={handleLogout}
                cursor="pointer"
                color="secondary"
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="menu-icon">
          {/* Add a button to toggle the Drawer */}
          <Button onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
