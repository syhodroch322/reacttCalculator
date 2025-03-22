import React, { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import ModalWindow from "./ModalWindow";
import { getTheme } from "./Theme";

const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = getTheme(darkMode);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}

          {!isMobile && (
            <div>
              <Button color="inherit" onClick={() => navigate("/calculator")}>
                Calculator
              </Button>
              <Button color="inherit" onClick={() => navigate("/todo")}>
                To-Do List
              </Button>
              <Button color="inherit" onClick={() => navigate("/stopwatch")}>
                Stopwatch
              </Button>
              <Button color="inherit" onClick={() => navigate("/ministore")}>
                MiniStore
              </Button>
              <Button color="inherit" onClick={handleOpenDialog}>
                ModalWindow
              </Button>
            </div>
          )}

          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button onClick={() => navigate("/calculator")}>
            <ListItemText primary="Calculator" />
          </ListItem>
          <ListItem button onClick={() => navigate("/todo")}>
            <ListItemText primary="To-Do List" />
          </ListItem>
          <ListItem button onClick={() => navigate("/stopwatch")}>
            <ListItemText primary="Stopwatch" />
          </ListItem>
          <ListItem button onClick={() => navigate("/ministore")}>
            <ListItemText primary="MiniStore" />
          </ListItem>
          <ListItem button onClick={handleOpenDialog}>
            <ListItemText primary="ModalWindow" />
          </ListItem>
        </List>
      </Drawer>

      <ModalWindow open={openDialog} handleClose={handleCloseDialog} />
    </ThemeProvider>
  );
};

export default Header;
