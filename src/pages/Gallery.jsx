import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ScrollTriggered from "./scroll";

const images = [
  "https://via.placeholder.com/300", "https://via.placeholder.com/300",
  "https://via.placeholder.com/300", "https://via.placeholder.com/300",
  "https://via.placeholder.com/300", "https://via.placeholder.com/300"
];

const galleryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Gallery = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={galleryVariants}>
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>Gallery</Typography>
        <Grid container spacing={2} justifyContent="center">
          {images.map((src, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div whileHover="hover" variants={imageVariants}>
                <Card>
                  <CardMedia component="img" height="200" image={src} alt={`Gallery image ${index + 1}`} />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
          {/* <ScrollTriggered/> */}

    </motion.div>


  );
};


export default Gallery;
