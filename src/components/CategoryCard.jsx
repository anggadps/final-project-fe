import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, image }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          marginTop: 2,
          textAlign: "center",
        }}
      >
        {name}
      </Typography>
    </Card>
  );
}
