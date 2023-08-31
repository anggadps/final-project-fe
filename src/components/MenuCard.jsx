import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ category, name, price, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image using placeholder.com
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="p" color="text.secondary">
          {category}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            marginBottom: 4,
          }}
        >
          {name}
        </Typography>
        <Typography variant="h6" color="primary">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
