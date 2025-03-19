import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card
      sx={{
        width: "320px",
        boxShadow: 3,
        margin: "0",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "340px",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "contain",
          width: "100%",
          height: "200px",
          objectPosition: "center",
        }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
