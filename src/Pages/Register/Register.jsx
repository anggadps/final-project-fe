import React, { useState } from "react";
import "./register.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar-guest";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState({
    open: false,
    message: "Password and Confirm Password do not match.",
  });
  const { open, message } = alert;

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirmPassword === ""
    ) {
      setAlert({
        open: true,
        message: "Please fill up the form.",
      });
      e.preventDefault();
    } else if (data.password !== data.confirmPassword) {
      setAlert({
        open: true,
        message: "Password and Confirm Password do not match.",
      });
      e.preventDefault();
    } else if (data.password.length < 8) {
      setAlert({
        open: true,
        message: "Password must be at least 8 characters.",
      });
      e.preventDefault();
    } else if (data.name.length < 3) {
      setAlert({
        open: true,
        message: "Name must be at least 3 characters.",
      });
      e.preventDefault();
    } else if (data.email.includes("@") === false) {
      setAlert({
        open: true,
        message: "Email must be valid.",
      });
      e.preventDefault();
    } else {
      setAlert({ open: false, message: "" });
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formDiv">
        <form onSubmit={onSubmit}>
          <h1>Are you ready become a professional cheff?</h1>
          <p>Please register first</p>
          <div className="inputDiv">
            <Input
              labelInput="Name"
              inputName="name"
              inputType="text"
              inputOnchange={inputOnchange}
            />
            <Input
              labelInput="Email"
              inputName="email"
              inputOnchange={inputOnchange}
            />
            <Input
              labelInput="Password"
              inputOnchange={inputOnchange}
              inputName="password"
              inputType="password"
            />
            <Input
              labelInput="Confirm Password"
              inputOnchange={inputOnchange}
              inputName="confirmPassword"
              inputType="password"
            />
          </div>

          <Button variant="contained" type="submit">
            Sign Up
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
          Have account? <a href="/login">Login here</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Register;
