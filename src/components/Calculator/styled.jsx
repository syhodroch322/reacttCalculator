import { Box, Button, styled, TextField } from "@mui/material";

export const Boxcalc = styled(Box)({
  width: 350,
  margin: "150px auto",
  padding: 16,
  borderRadius: 8,
  border: "2px solid orange",
  backgroundColor: "#222",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
});

export const StyledTextField = styled(TextField)({
  marginBottom: 16,
  backgroundColor: "#fff",
  borderRadius: 4,
});

export const StyledButton = styled(Button)({
  borderRadius: 10,
});
