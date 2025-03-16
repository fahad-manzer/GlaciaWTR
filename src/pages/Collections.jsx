import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Grid } from "@mui/material";
import image1 from "../assets/galary/IMG_2868.jpg"
import image2 from "../assets/galary/IMG_2869.jpg"
import image3 from "../assets/galary/IMG_2870.jpg"
import image4 from "../assets/galary/IMG_2871.jpg"
import image5 from "../assets/galary/IMG_2872.jpg"
import image6 from "../assets/galary/IMG_2873.jpg"
import image7 from "../assets/galary/IMG_2874.jpg"
import image8 from "../assets/galary/IMG_2875.jpg"
import image9 from "../assets/galary/IMG_2877.jpg"
import image10 from "../assets/galary/IMG_2878.jpg"
import image11 from "../assets/galary/IMG_2879.jpg"
import image12 from "../assets/galary/IMG_2881.jpg"

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
];

const Collections = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Box
                  component="img"
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  sx={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: 2 }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Collections;
