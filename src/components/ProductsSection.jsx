import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import product1 from "../assets/product1.jpg"; // Replace with actual paths
import product2 from "../assets/product1.jpg";
import product3 from "../assets/freepik__upload__67092.png";

const ProductsSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 8, px: { xs: 2, md: 8 },marginLeft:{md:"150px"},marginRight:{md:"150px"}  }}>
      {/* Header */}
      <Typography variant="subtitle1" sx={{ color: "green" }}>
        | HOW TO ORDER
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
        Glacia WTR Products
      </Typography>

      <Typography variant="body1" sx={{ color: "gray", mt: 2, maxWidth: "800px", mx: "auto" }}>
        Glacia WTR is not just a brand, it's a promise of quality and exceptional service. We take pride in delivering 
        the best quality water in our bottles, ensuring that each bottle meets the highest standards of taste, purity, and elegance.
      </Typography>

      {/* Product 1 */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          <img src={product1} alt="Customized Bottle" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography variant="subtitle2" sx={{ color: "green"}}>
            | Glacia WTR
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
            Customized Bottle
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
            Glacia WTR takes personalization to a whole new level. We offer the option to customize the bottles with 
            your own branding, making them perfect for corporate events, special occasions, or exclusive gifts. With Glacia WTR, 
            you can showcase your brand with a personal touch while providing your guests with a luxurious and memorable experience.
          </Typography>
        </Grid>
      </Grid>

      {/* Product 2 */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography variant="subtitle2" sx={{ color: "green"}}>
            | Glacia WTR
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
            Premium Glass Bottle
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
            Experience the fusion of health and luxury with our premium glass bottles. Each bottle is meticulously 
            crafted with elegance and sophistication while being enriched with essential nutrients. Our vitamin B12-rich 
            water provides an added boost of energy and vitality, keeping you at your best throughout the day.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={product2} alt="Premium Glass Bottle" style={{ width: "100%" }} />
        </Grid>
      </Grid>

      {/* Product 3 */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          <img src={product3} alt="Alkaline Bottles" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography variant="subtitle2" sx={{ color: "green"}}>
            | Glacia WTR
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
            Alkaline Bottles
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
            Our alkaline water bottles provide a refreshing and hydrating experience while helping to balance your body's pH levels. 
            Alkaline water is known for its potential health benefits, including improved hydration, detoxification, and enhanced overall 
            well-being. Enjoy the goodness of a naturally balanced pH in each sip.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsSection;
