import React from "react";
import "./reset.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";

function Reset() {
  return (
    <div>
      <div className="formDiv">
        <form action="">
          <h1>Reset Password</h1>
          <p>Send OTP code to your email address</p>
          <div className="inputDiv">
            <Input labelInput="Email" inputName="email" inputType="email" />
          </div>
          <div className="buttonDiv">
            <Button variant="outlined" color="secondary" type="reset">
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
