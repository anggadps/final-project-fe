import React from "react";
import "./login.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // on submit form console.log(data)
  const onSubmit = (e) => {
    e.preventDefault();

    if (data.email === "" || data.password === "") {
      alert("Please fill all the form");
    } else if (
      data.email.includes("@") === false ||
      data.email.includes(".") === false
    ) {
      alert("Please enter a valid email address");
    } else if (data.password.length <= 8) {
      alert("Password must be at least 8 characters");
    } else {
      console.log(data);
    }
  };
  return (
    <div>
      <div className="formDiv">
        <form action="" onSubmit={onSubmit}>
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
        </form>
        <p>
          Dont have account? <a href="/register">Sign Up here</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
