import React from "react";
import { Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bottle from "../assets/DSC16882.png"

// Replace these with actual image paths
const bottleImages = [
  bottle,
  bottle,
  bottle,
  bottle,
  bottle,
];

const BottleCarousel = () => {
  return (
    <Box sx={{ textAlign: "center", py: 6, px: 2 }}>
      {/* Header */}
      <Typography variant="subtitle1" sx={{ color: "green" }}>
        | EXPLORE OUR PRODUCTS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
        Our Collection Of Water Bottles
      </Typography>

      {/* Swiper Container */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3} // Adjust for different screen sizes
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2 },  // Mobile
          640: { slidesPerView: 3 },  // Tablets
          1024: { slidesPerView: 4 }, // Desktop
        }}
        style={{ marginTop: "30px", paddingBottom: "30px" }}
      >
        {bottleImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
              }}
            >
              <img src={image} alt={`Bottle ${index + 1}`} style={{ maxHeight: "100%", width: "auto" }} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BottleCarousel;
