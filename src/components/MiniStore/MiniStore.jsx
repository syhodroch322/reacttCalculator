import React, { useState } from "react";
import {
  Box,
  Button,
  Badge,
  Select,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
import ProductList from "./ProductList";
import FilterSelect from "./FilterSelect";
import CartDialog from "./CartDialog";
import { getTheme } from "../Theme";

const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 1100,
    image: "/imagesStore/iphone 14.jpg",
    brand: "Apple",
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 2200,
    image: "/imagesStore/macbookpro.jpg",
    brand: "Apple",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 400,
    image: "/imagesStore/airpods.jpg",
    brand: "Apple",
  },
  {
    id: 4,
    name: "Samsung s23",
    price: 550,
    image: "/imagesStore/samsungs23.jpg",
    brand: "Samsung",
  },
  {
    id: 5,
    name: "Samsung Galaxy Book4 Ultra",
    price: 980,
    image: "/imagesStore/samsungbook4.jpg",
    brand: "Samsung",
  },
  {
    id: 6,
    name: "Samsung Galaxy Buds3 Pro",
    price: 200,
    image: "/imagesStore/samsungbuds3.jpg",
    brand: "Samsung",
  },
  {
    id: 7,
    name: "Xiaomi Redmi 13",
    price: 160,
    image: "/imagesStore/xiaomi redmi13.jpg",
    brand: "Xiaomi",
  },
  {
    id: 8,
    name: "Xiaomi Buds 5",
    price: 120,
    image: "/imagesStore/xiaomibuds5.jpg",
    brand: "Xiaomi",
  },
  {
    id: 9,
    name: "Xiaomi Laptop Pro 15",
    price: 890,
    image: "/imagesStore/xiaomilaptoppro15.jpg",
    brand: "Xiaomi",
  },
];

const MiniStore = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [cart, setCart] = useState([]);
  const [openCartDialog, setOpenCartDialog] = useState(false);
  const [sort, setSort] = useState("");

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "up") return a.price - b.price;
    if (sort === "down") return b.price - a.price;
    return 0;
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity: 1, cartId: `${product.id}-${Math.random()}` },
        ];
      }
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCartDialog = () => {
    setOpenCartDialog(!openCartDialog);
  };

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Box>
      <FilterSelect
        selectedBrand={selectedBrand}
        onBrandChange={handleBrandChange}
      />
      <Select value={sort} onChange={handleSort} displayEmpty sx={{ m: 2 }}>
        <MenuItem value="">Сортировка по цене</MenuItem>
        <MenuItem value="up">По возростанию</MenuItem>
        <MenuItem value="down">По убыванию</MenuItem>
      </Select>
      <ProductList
        selectedBrand={selectedBrand}
        products={sortedProducts}
        addToCart={addToCart}
      />
      <Box sx={{ position: "absolute", top: 10, right: 20 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={toggleCartDialog}
        >
          <Badge badgeContent={totalItemsInCart} color="error">
            Cart
          </Badge>
        </Button>
      </Box>
      <CartDialog
        open={openCartDialog}
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        toggleDialog={toggleCartDialog}
        updateQuantity={updateQuantity}
      />
    </Box>
  );
};

export default MiniStore;
