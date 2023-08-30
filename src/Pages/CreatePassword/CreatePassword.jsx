import React from "react";
import "./createpassword.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";
import { useState } from "react";

function CreatePassword() {
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
    console.log(data);
  };
  return (
    <div>
      <div className="formDiv">
        <form action="" onSubmit={onSubmit}>
          <h1>Create Password</h1>
          <p></p>
          <div className="inputDiv">
            <Input
              labelInput="Email"
              inputName="email"
              inputType="email"
              inputOnchange={inputOnchange}
            />
            <Input
              inputOnchange={inputOnchange}
              labelInput="Password"
              inputName="password"
              inputType="password"
            />
          </div>
          <div className="buttonDiv">
            <Button
              variant="outlined"
              type="submit"
              color="secondary"
              sx={{ py: 1, px: 6 }}
            >
              Submit
            </Button>
            <Button variant="contained" type="submit" sx={{ py: 1, px: 6 }}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
