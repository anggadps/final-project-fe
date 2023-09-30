import React from "react";
import "./component.css";
import { Button } from "@mui/material";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import useAuth from "../../hooks/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <nav>
        <div>
          <Button href="/">
            <img src={logo} alt="Logo" />
          </Button>
        </div>
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
              <PersonIcon color="primary" />
              <LogoutIcon onClick={handleLogout} color="secondary" />
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
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
