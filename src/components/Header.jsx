import React, { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import ModalWindow from "./ModalWindow";
import { getTheme } from "./Theme";

const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const theme = getTheme(darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/calculator")}>
            Calculator
          </Button>
          <Button color="inerhit" onClick={() => navigate("/todo")}>
            To-Do List
          </Button>
          <Button color="inerhit" onClick={() => navigate("/stopwatch")}>
            Stopwatch
          </Button>
          <Button color="inherit" onClick={() => navigate("/ministore")}>
            MiniStore
          </Button>
          <Button color="inherit" onClick={handleOpenDialog}>
            ModalWindow
          </Button>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <ModalWindow open={openDialog} handleClose={handleCloseDialog} />
    </ThemeProvider>
  );
};

export default Header;
