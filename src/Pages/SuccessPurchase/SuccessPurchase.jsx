import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SuccessPurchase = () => {
  return (
    <div>
      <Grid sx={{ mt: 10, minHeight: "100vh" }} container>
        <Grid md={3} xs={1}></Grid>
        <Grid md={6} mdOffset={3} xs={10}>
          <Stack alignItems="center">
            <img
              src="/images/success.png"
              width={"250px"}
              alt="Success Register"
            />
            <Typography sx={{ mt: 3 }}>Purchase Successfully</Typography>
            <Typography sx={{ mt: 1 }}>
              Horay!! Let’s cook and become a professional cheff
            </Typography>
            <Stack sx={{ mt: 4 }} direction="row" spacing={2}>
              <Link to="/">
                <Button
                  sx={{ px: { sm: 3, xs: 2 }, py: 1.5, borderRadius: 2 }}
                  variant="outlined"
                >
                  <HomeIcon fontSize="small" sx={{ mr: 1 }} />
                  Back to Home
                </Button>
              </Link>

              <Link to="/invoice">
                <Button
                  sx={{
                    px: { sm: 3, xs: 2 },
                    py: 1.5,
                    borderRadius: 2,
                  }}
                  variant="contained"
                >
                  <ArrowForwardIcon fontSize="small" sx={{ mr: 1 }} />
                  Open Invoice
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default SuccessPurchase;
