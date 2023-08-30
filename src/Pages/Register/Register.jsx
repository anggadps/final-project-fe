import React from "react";
import { useState } from "react";
import "./register.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // on submit form console.log(data)
  const onSubmit = (e) => {
    if (data.password !== data.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
      e.preventDefault();
      console.log(data);
    }
  };

  return (
    <div>
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
              inputType="email"
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
          {!passwordsMatch && (
            <div className="custom-alert">
              <p>Password and Confirm Password do not match.</p>
            </div>
          )}
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </form>
        <p>
          Have account? <a href="/login">Login here</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Register;
