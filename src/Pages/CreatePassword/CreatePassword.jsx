import React from "react";
import "./createpassword.css";
import Input from "../../components/Input";
import { Button } from "@mui/material";

function CreatePassword() {
  return (
      <div>
        <div className="formDiv">
          <form action="">
            <h1>Create Password</h1>
            <div className="inputDiv">
              <Input labelInput="New Password" inputName="password" inputType="password" />
              <Input labelInput="Password" inputName="password" inputType="password" />
            </div>
            <div className="buttonDiv">
              <Button href="/reset" variant="outlined" type="cancel" color="secondary" sx={{ py: 1, px: 6 }}>Cancel</Button>
              <Button href="/" variant="contained" type="submit" sx={{ py: 1, px: 6 }} >Submit</Button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default CreatePassword;
