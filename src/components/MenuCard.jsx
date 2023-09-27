import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes

export default function MediaCard({ category, name, price, image }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea href="/detail">
        <CardMedia
          sx={{ height: 140 }}
          image="http://via.placeholder.com/600"
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
              marginBottom: 5,
            }}
          >
            {name}
          </Typography>
          <Typography variant="h6" color="primary">
            Rp. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};
