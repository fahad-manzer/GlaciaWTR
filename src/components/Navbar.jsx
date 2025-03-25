import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/Glacia WTR.png";

const Navbar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const navLinks = [
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Collections", path: "/collection" },
    // { label: "Private Labels", path: "/private-labels" },
    { label: "Bulk Order", path: "/bulk-order" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#ffffff", px: 2 }}
      >
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, textDecoration: "none" }}
          >
            <img src={logo} alt="Logo" style={{ height: 120, marginLeft: 50 }} />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                style={{ textDecoration: "none", color: theme.palette.text.primary, fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          <IconButton
            edge="end"
            aria-label="open navigation menu"
            aria-controls="mobile-menu"
            aria-haspopup="true"
            sx={{ display: { md: "none" }, color: theme.palette.text.primary }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2, backgroundColor: theme.palette.background.paper }}>
          <List>
            {navLinks.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => setIsOpen(false)}
                sx={{ textDecoration: "none", color: theme.palette.text.primary }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;