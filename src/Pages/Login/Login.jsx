import React from "react";
import "./login.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Navbar from "../../components/Navbar/Navbar-guest";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const navigate = useNavigate();

  const [alert, setAlert] = React.useState({
    open: false,
  });
  const { open, message } = alert;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      setAlert({ open: true, message: "Please fill up the form." });
    } else if (!data.email.includes("@")) {
      setAlert({
        open: true,
        message: "Email must be valid.",
      });
    } else if (data.password.length < 8) {
      setAlert({
        open: true,
        message: "Password must be at least 8 characters.",
      });
    } else {
      setAlert({ open: false, message: "" });
      axios
        .post(process.env.REACT_APP_API_URL + "/User/Login", {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          setAlert({ ...alert, open: true, message: response.data });
          navigate("/");
        })
        .catch((error) => {
          if (error.response) {
            // Server responded with an error (e.g., 401 Unauthorized)
            setAlert({ ...alert, open: true, message: "Invalid credentials." });
          } else {
            // Network error or other issues
            setAlert({
              ...alert,
              open: true,
              message: "An error occurred. Please try again later.",
            });
          }
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formDiv">
        <form onSubmit={onSubmit}>
          <h1>Welcome Back! Cheff</h1>
          <p>Please login first</p>
          <div className="inputDiv">
            <Input
              labelInput="Email"
              inputName="email"
              // inputType="email"
              inputOnchange={inputOnchange}
            />
            <Input
              labelInput="Password"
              inputOnchange={inputOnchange}
              inputName="password"
              inputType="password"
            />
            <p>
              Forgot Password? <a href="/reset">Click here</a>{" "}
            </p>
          </div>
          <Button variant="contained" type="submit" sx={{ py: 1, px: 6 }}>
            Login
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => setAlert({ open: false, message: "" })}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
        </form>
        <p>
          Dont have account? <a href="/register">Sign Up here</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
