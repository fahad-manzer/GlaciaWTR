import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import { Link } from "react-router-dom";

// Slide Data
const slides = [
  {
    title: "Alkaline Water Bottles",
    description: "Our alkaline water bottles not only provide a great taste to quench your thirst, but they also offer numerous health benefits.",
    label: "PH BALANCED",
    image: slide1,
  },
  {
    title: "Stay Hydrated, Stay Healthy",
    description: "Experience premium quality water that refreshes and revitalizes your body throughout the day.",
    label: "PURE & NATURAL",
    image: slide2,
  },
  {
    title: "Eco-Friendly Bottles",
    description: "Our bottles are designed with eco-friendly materials to ensure sustainability and reduce plastic waste.",
    label: "SUSTAINABLE",
    image: slide3,
  },
];

// Feature Data
const features = [
  {
    icon: "💧",
    title: "Best Quality Water",
    description: "Providing water infused with vitamin B12 and other minerals.",
  },
  {
    icon: "✏️",
    title: "Custom Designs",
    description: "Get the best design options for your brand that cater to your style.",
  },
  {
    icon: "🍾",
    title: "Premium Bottles",
    description: "Our water bottles are made from high-quality, durable and safe to use.",
  },
];


// Animation Variants
const slideIn = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay } },
});

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box >
      <Box>
        <Grid container sx={{ height: { xs: "60vh", sm: "85vh", md: "100vh" }, width: "100%" }}>
          {/* Swiper Background */}
          <Swiper
            className="mySwiper"
            modules={[Pagination, Navigation, Autoplay, Mousewheel, Keyboard]}
            navigation={{ enabled: window.innerWidth > 768 }} // Hide navigation on mobile
            pagination={{ clickable: true }}
            // mousewheel={true}
            keyboard={true}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            style={{ width: "100%", height: { xs: "60vh", sm: "85vh", md: "100vh" }, position: "absolute" }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "60vh", sm: "85vh", md: "100vh" },
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Content (Text & Buttons) */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: { xs: "60vh", sm: "85vh", md: "100vh" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "flex-start", md: "flex-start" },
              textAlign: { xs: "left", md: "left" },
              // px: { xs: 2, sm: 6, md: 12 },
              marginLeft: { xs: 2, sm: 6, md: 12 },
              position: "relative",
              zIndex: 2,
              padding: { xs: 2, md: 3 },
            }}
          >
            {/* Label */}
            <motion.div key={`label-${activeIndex}`} initial="hidden" animate="visible" variants={slideIn(0.1)}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#68a357",
                  textTransform: "uppercase",
                  fontSize: { xs: "10px", sm: "14px", md: "18px" },
                }}
              >
                | {slides[activeIndex].label}
              </Typography>
            </motion.div>

            {/* Title */}
            <motion.div key={`title-${activeIndex}`} initial="hidden" animate="visible" variants={slideIn(0.2)}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mt: 1,
                  color: "black",
                  fontSize: { xs: "24px", sm: "32px", md: "48px" },
                }}
              >
                {slides[activeIndex].title}
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div key={`desc-${activeIndex}`} initial="hidden" animate="visible" variants={slideIn(0.3)}>
              <Typography
                variant="body1"
                sx={{
                  color: "gray",
                  mt: 2,
                  lineHeight: 1.5,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  maxWidth: "90%",
                }}
              >
                {slides[activeIndex].description}
              </Typography>
            </motion.div>

            {/* Buttons */}
            <Box sx={{ mt: 3, display: "flex", flexDirection: { xs: "row", sm: "row" }, gap: 2 }}>
              <motion.div key={`readme-${activeIndex}`} initial="hidden" animate="visible" variants={slideIn(0.4)}>
                <Link to="/about">
                <Button
                  variant="appointmentButton"
                  sx={{
                    color: "white",
                    padding: "12px 34px",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <span className="btn-text">READ ME</span>
                  <div className="btn-cover">
                    <span className="btn-text btn-cover-text">READ ME</span>
                    <div className="btn-bg"></div>
                  </div>
                </Button>
                </Link>
              </motion.div>

              <motion.div key={`quote-${activeIndex}`} initial="hidden" animate="visible" variants={slideIn(0.5)}>
                <Link to="/contact" >
                <Button
                  variant="appointmentButton"
                  sx={{
                    color: "white",
                    padding: "12px 24px",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <span className="btn-text">GET A QUOTE</span>
                  <div className="btn-cover">
                    <span className="btn-text btn-cover-text">GET A QUOTE</span>
                    <div className="btn-bg"></div>
                  </div>
                </Button>
                </Link>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Box>



      {/* Feature Section */}
      <Box sx={{ flexGrow: 1, bgcolor:"#F1F1F1" }}>
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 6 }}
          // columns={3}
          sx={{
            position: "relative",
            zIndex: 2,
            // gap: { xs: 9, md: 1 },
            // padding: { xs: 3, sm: 4, md: 5 },
            // paddingLeft: { xs: 6, sm: 4, md: 9 },
            // paddingRight: { xs: 3, sm: 4, md: 3 },
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "center",
            // alignItems: "center",
            alignItems: "center",
            gap: { xs: 3, sm: 10, md: 6 },
            px: { xs: 2, sm: 10, md: 12 },
          }}
        >
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3.5}
              size={{ xs: 2, sm: 4, md: 4 }}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "white",
                padding: { xs: 3, sm: 4, md: 5 },
                paddingTop: { md: "50px" },
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                width: { xs: "100%", sm: "300px", md: "320px" },
                height: { xs: "300px", sm: "300px", md: "320px" }, // Perfect Square
              }}
            >
              <Typography variant="h3" sx={{ fontSize: "40px", mb: 2 }}>
                {feature.icon}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "gray", mb: 1 }}>
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ alignItems: "center", padding:"20px"  }}>
          <Typography sx={{
            display: "flex",
            textAlign: "center",
            justifyContent:"center",
            fontSize: {xs:"15",sm:"25px",md:"30px"},
            fontFamily:"Poppins, sans-serif",
            color:"black"
          }}
          >
            Refresh your style with custom-labeled water.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
