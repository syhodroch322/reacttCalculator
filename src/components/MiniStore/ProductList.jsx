import React from "react";
import { Grid2 } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({ selectedBrand, products, addToCart }) => {
  const filteredProducts = products.filter((product) =>
    selectedBrand ? product.brand === selectedBrand : true
  );

  return (
    <Grid2 container spacing={3} justifyContent="center">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </Grid2>
  );
};

export default ProductList;
