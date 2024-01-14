import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
const LessonCard = () => {
  return (
    <Card  sx={{
        width: 350
    }}>
      <CardMedia height={150} component='img' image="https://source.unsplash.com/random" />
      <CardContent>
        <Typography variant="h5" component="div">
          Başlığım
        </Typography>
        <Typography variant="body2" component="p">
          Başlığım Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque libero voluptatum provident eaque. Delectus, maiores?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ab consectetur soluta
          ipsum, expedita perspiciatis ea? Officia sint et laborum dolorum
          dignissimos molestiae veritatis aperiam, debitis enim facere sapiente,
          dicta eius.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">TEMIZLE</Button>
        <Button>KAYDET</Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;
