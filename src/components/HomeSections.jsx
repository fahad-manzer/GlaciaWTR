import React from "react";
import { Box, Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import Hero from '../assets/Hero1.jpg'

export const HeroSection = () => (
  <Box sx={{ display:"flex", textAlign: "center", py: 6, justifyContent: "space-between", marginLeft:"20px", marginRight:"20px"}}>
    <Box><Typography style={{width:"500px"}}><img src={Hero} alt="" /></Typography></Box>
    <Box><Typography variant="h3" gutterBottom>Welcome to H₂O Bliss Water</Typography>
      <Typography variant="h6" gutterBottom>Pure, refreshing, and sustainable bottled water for your everyday needs.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Explore Products</Button></Box>

  </Box>
);

export const Services = () => (
  <Container sx={{ py: 6 }}>
    <Typography variant="h4" textAlign="center" gutterBottom>Our Services</Typography>
    <Grid container spacing={4} justifyContent="center">
      {['Home Delivery', 'Custom Branding', 'Wholesale Supply'].map((service, index) => (
        <Grid item key={index} xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 3 }}>
            <CardContent>
              <Typography variant="h6">{service}</Typography>
              <Typography variant="body2">High-quality service for all your hydration needs.</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export const Partners = () => (
  <Box sx={{ textAlign: "center", py: 6, backgroundColor: "#f5f5f5" }}>
    <Typography variant="h4" gutterBottom>Our Partners</Typography>
    <Typography variant="body1">Trusted by top businesses and communities.</Typography>
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
      {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map((partner, index) => (
        <Grid item key={index} xs={6} sm={3}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="body1" textAlign="center">{partner}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export const Reviews = () => (
  <Container sx={{ py: 6 }}>
    <Typography variant="h4" textAlign="center" gutterBottom>What Our Customers Say</Typography>
    <Grid container spacing={4} justifyContent="center">
      {["Excellent service!", "Refreshing taste!", "Fast delivery!"].map((review, index) => (
        <Grid item key={index} xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 3 }}>
            <CardContent>
              <Typography variant="body1">{review}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);
