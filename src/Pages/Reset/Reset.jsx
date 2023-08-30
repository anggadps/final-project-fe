import React from "react";
import "./reset.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";

function Reset() {
  const [data, setData] = useState({
    email: "",
  });

  const inputOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // on submit form console.log(data)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div className="formDiv">
        <form action="" onSubmit={onSubmit}>
          <h1>Reset Password</h1>
          <p>Send OTP code to your email address</p>
          <div className="inputDiv">
            <Input
              labelInput="Email"
              inputName="email"
              inputType="email"
              inputOnchange={inputOnchange}
            />
          </div>
          <div className="buttonDiv">
            <Button href="/login" variant="outlined" color="secondary" type="reset">
              Cancel
            </Button>
            <Button href="/createpassword" variant="contained" type="submit">
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
