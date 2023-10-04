import React, { useEffect } from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const SuccessRegister = () => {
  const url = window.location.href;

  function getParameterValue(url, parameterName) {
    const urlSearchParams = new URLSearchParams(new URL(url).search);

    return urlSearchParams.get(parameterName);
  }

  const idUser = getParameterValue(url, "userId");
  const email = getParameterValue(url, "email");



  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/User/ActivateUser?userId=${idUser}&email=${email}`
      )
      .then((res) => console.log(res.status))
      .catch((error) => {
        console.error(error.response);
      });
  }, [])

  return (
    <div>
      <Grid sx={{ mt: 10, minHeight: "100vh" }} container>
        <Grid md={12}>
          <Stack alignItems="center">
            <img
              src="/images/success.png"
              width={"250px"}
              alt="Success Register"
            />
            <Typography sx={{ mt: 3 }}>Email Confirmation Success</Typography>
            <Typography sx={{ mt: 1 }}>
              Congratulation! your email {email} has already used.
            </Typography>
            <Link to="/login">
              <Button
                sx={{ mt: 4, px: 4, borderRadius: 2 }}
                variant="contained"
              >
                Login Here
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default SuccessRegister;
