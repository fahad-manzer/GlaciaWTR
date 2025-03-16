import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/Glacia WTR.png"

const Navbar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          // backgroundColor: theme.palette.background.default,
          backgroundColor: "#ffffff",
          px: 2,
          // borderBottom: `2px solid ${theme.palette.primary.main}`,
          // padding:"15px"
        }}
      >
        <Toolbar>
          {/* Logo & Brand Name */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Logo" style={{ height: 120, marginLeft: 50}} />
            {/* <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
              WaterGram
            </Typography> */}
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Link to="/about" style={{ textDecoration: "none", color: theme.palette.text.primary, fontWeight: 500 }}>
              About Us
            </Link>
            <Link to="/products" style={{ textDecoration: "none", color: theme.palette.text.primary, fontWeight: 500 }}>
              Products
            </Link>
            <Link to="/collection" style={{ textDecoration: "none", color: theme.palette.text.primary, fontWeight: 500 }}>
            Collections
            </Link>
            <Link to="/private-labels" style={{ textDecoration: "none", color: theme.palette.text.primary, fontWeight: 500 }}>
              Private Labels
            </Link>
            <Link to="/bulk-order" style={{ textDecoration: "none", color: theme.palette.text.primary, fontWeight: 500 }}>
              Bulk Order
            </Link>
            <Link to="/contact" style={{ textDecoration: "none", color: theme.palette.text.primary, fontWeight: 500 }}>
            Contact Us
            </Link>
          </Box>

          {/* Appointment Button with Fixed Animation & Visible Text */}
          {/* <Button variant="appointmentButton" sx={{marginLeft:"30px"}}>
            <span className="btn-text">
              <img src="https://watergram.in/wp-content/uploads/2022/08/Group-1-1.svg" alt="svg" width="16" style={{ marginRight: 8 }} />
              Appointment
            </span>
            <div className="btn-cover">
              <span className="btn-text btn-cover-text">
                <img src="https://watergram.in/wp-content/uploads/2022/08/Group-1-1.svg" alt="svg" width="16" style={{ marginRight: 8 }} />
                Appointment
              </span>
              <div className="btn-bg"></div>
            </div>
          </Button> */}

          {/* Mobile Menu Icon */}
          <IconButton edge="end" sx={{ display: { md: "none" }, color: theme.palette.text.primary }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2, backgroundColor: theme.palette.background.paper }}>
          <List>
            {["About Us", "Products", "Customization", "Collections", "Contact Us", "Shop by Amazon"].map((text) => (
              <ListItem
                button
                key={text}
                component={Link}
                to={`/${text.toLowerCase().replace(/ /g, "-")}`}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={text} sx={{ color: theme.palette.text.primary }} />
              </ListItem>
            ))}
          </List>

          {/* Appointment Button in Mobile Menu with Fixed Animation & Visible Text */}
          {/* <Button
            variant="contained"
            sx={{
              position: "relative",
              borderRadius: "0px",
              width: "100%",
              backgroundColor: theme.palette.success.main,
              color: "white",
              fontWeight: 600,
              height: "50px",
              mt: 2,
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "100%",
                backgroundColor: "#4CAF50",
                transition: "width 0.5s ease-in-out",
                zIndex: 0, // Ensures background stays below text
              },
              "&:hover::before": {
                width: "100%",
              },
              "& span": {
                position: "relative",
                zIndex: 1, // Keeps text above the animation
              },
            }}
          >
            <span>Appointment</span>
          </Button> */}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
