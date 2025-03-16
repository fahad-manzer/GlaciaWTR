import React from "react";
import { Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img from "../assets/apna.png"

// Icons for ratings
const StarIcon = () => (
  <span style={{ color: "#FFA500", fontSize: "18px", margin: "0 2px" }}>⭐</span>
);

// Testimonial Data
const testimonials = [
  {
    logo: img, // Replace with actual paths
    name: "Abika Elite",
    role: "HOTEL",
    feedback: "The personalized touch brings smiles to our customers’ faces, making them feel truly special. The water is refreshingly clean, and the added vitamin B12 infusion.",
    rating: 5,
  },
  {
    logo: img,
    name: "Adam's Ale",
    role: "BAR AND RESTAURANT",
    feedback: "Watergram’s team is fantastic to work with, ensuring perfection in every detail. Highly recommended for café owners looking to make a lasting impression.",
    rating: 5,
  },
  {
    logo: img,
    name: "Apna Sweets",
    role: "RESTAURANT",
    feedback: "We’re beyond satisfied with the overall experience!",
    rating: 5,
  },
  {
    logo: img,
    name: "Apna Sweets",
    role: "RESTAURANT",
    feedback: "We’re beyond satisfied with the overall experience!",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <Box sx={{ textAlign: "center", py: 6, px: 2 }}>
      {/* Header */}
      <Typography variant="subtitle1" sx={{ color: "green" }}>
        | TESTIMONIALS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
        WHAT OUR CUSTOMERS SAY
      </Typography>

      {/* Swiper Testimonial Section */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Desktop
        }}
        style={{ marginTop: "30px", paddingBottom: "30px" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                maxWidth: 350,
                margin: "auto",
                textAlign: "center",
                // background: "#fff",
                // boxShadow: 3,
                padding: "20px",
                // borderRadius: "8px",
              }}
            >
              {/* Logo */}
              <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                <img src={testimonial.logo} alt={testimonial.name} style={{ height: "50px" }} />
              </Box>

              {/* Name & Role */}
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
                {testimonial.name}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "green", fontWeight: "bold" }}>
                {testimonial.role}
              </Typography>

              {/* Feedback */}
              <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                {testimonial.feedback}
              </Typography>

              {/* Rating */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TestimonialSlider;
