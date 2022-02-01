import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";

export default function Coupon() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1563302111-eab4b145e6c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Adidas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get lots of discount on adidas shoes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
