import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export default function MediaCard({ category, name, price, image, id }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea href={`/detail/${id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={process.env.REACT_APP_IMG_URL + `${image}`}
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
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};
