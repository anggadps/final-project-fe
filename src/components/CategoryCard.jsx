import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MediaCard({ name, image, id }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea href={`/menuclass/${id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image="http://via.placeholder.com/600"
          title={name}
        />
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
      </CardActionArea>
    </Card>
  );
}
