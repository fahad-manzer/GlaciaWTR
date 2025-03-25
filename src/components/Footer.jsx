import React from "react";
import { Box, Typography, Grid, Link as MuiLink, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/Glacia WTR logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Collections", path: "/collection" },
    // { label: "Private Labels", path: "/private-labels" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: 5, px: { xs: 2, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={logo} alt="Watergram Logo" style={{ width: 150, marginBottom: 10 }} />
          <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
            Glacia WTR - Purity in Every Drop
          </Typography>
          <Box>
            <IconButton sx={{ backgroundColor: "#222", color: "white", mr: 1 }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/glacia_wtr?igsh=dXYxZ3VnZ2drYmY3" target="_blank" sx={{ backgroundColor: "#222", color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          {quickLinks.map((item, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 1, color: "#aaa", "&:hover": { color: "#ffffff" } }}>
              <MuiLink component={Link} to={item.path} underline="none" sx={{ color: "inherit" }}>
                › {item.label}
              </MuiLink>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1, color: "#ffffff" }} />
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              F-32 B Street number 31 Madhu Vihar,Delhi,110092
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1, color: "#ffffff" }} />
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              7011597607, 8587012050
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <EmailIcon sx={{ mr: 1, color: "#ffffff" }} />
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              glaciawtr@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 5, borderTop: "1px solid #333", pt: 2, color: "#bbb" }}>
        Powered by Glacia WTR All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;