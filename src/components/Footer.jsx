import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/Glacia WTR logo.png"

// import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", py: 5, px: { xs: 2, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left: Logo & Social Media */}
        <Grid item xs={12} md={4}>
          <img src={logo} alt="Watergram Logo" style={{ width: 150, marginBottom: 10 }} />
          <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
            Glacia WTR - Purity in Every Drop
          </Typography>
          <Box>
            <IconButton sx={{ backgroundColor: "#222", color: "white", mr: 1 }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#222", color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Center: Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          {["About Us", "Products", "Customization", "Private Labels", "Contact Us"].map((item, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 1, color: "#aaa", "&:hover": { color: "lightgreen" } }}>
              <Link href="#" underline="none" sx={{ color: "inherit" }}>
                › {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Right: Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1, color: "lightgreen" }} />
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            F-32 B Street number 31 Madhu Vihar,Delhi,110092
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ mr: 1, color: "lightgreen" }} />
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            7011597607, 8587012050
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <EmailIcon sx={{ mr: 1, color: "lightgreen" }} />
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              glaciawtr@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box sx={{ textAlign: "center", mt: 5, borderTop: "1px solid #333", pt: 2, color: "#bbb" }}>
        Powered by Glacia WTR All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
