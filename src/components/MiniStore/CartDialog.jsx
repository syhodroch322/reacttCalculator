import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

const CartDialog = ({
  open,
  cart,
  removeFromCart,
  clearCart,
  toggleDialog,
  updateQuantity,
}) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
        Shopping Cart
      </DialogTitle>
      <DialogContent>
        {cart.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", py: 3 }}>
            Your cart is empty.
          </Typography>
        ) : (
          <List>
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    variant="rounded"
                    sx={{ width: 60, height: 60, marginRight: 2 }}
                  />
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price * item.quantity}`}
                    sx={{ flexGrow: 1 }}
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                      onClick={() => updateQuantity(item.cartId, -1)}
                      size="small"
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="body1">{item.quantity}</Typography>
                    <IconButton
                      onClick={() => updateQuantity(item.cartId, 1)}
                      size="small"
                    >
                      <Add />
                    </IconButton>
                    <IconButton
                      onClick={() => removeFromCart(item.cartId)}
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        )}
      </DialogContent>
      {cart.length > 0 && (
        <Typography
          variant="h6"
          sx={{ textAlign: "center", py: 2, fontWeight: "bold" }}
        >
          Total: ${totalPrice.toFixed(2)}
        </Typography>
      )}

      <DialogActions sx={{ justifyContent: "space-between", padding: 2 }}>
        <Button onClick={toggleDialog} variant="outlined">
          Close
        </Button>
        {cart.length > 0 && (
          <Button onClick={clearCart} variant="contained" color="error">
            Clear Cart
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
