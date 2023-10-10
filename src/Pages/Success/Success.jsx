import React, { useEffect } from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Success = () => {

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
            <Typography sx={{ mt: 3 }}>Register Success</Typography>
            <Typography sx={{ mt: 1 }}>
              Congratulation! Your account has been successfully created, please check your email for confirmation.
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

export default Success;
