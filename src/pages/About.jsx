import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.div
      style={{
        // backgroundColor: "#f9f9f9",
        color: "#004AAD",
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
        textAlign: "center",
        // borderRadius: "12px",
        // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        paddingBottom:"100px"
      }}
      initial="initial"
      animate="animate"
      variants={pageTransition}
      
    >
      {/* Page Title */}
      <motion.h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "16px",
          cursor: "pointer",
          transition: "color 0.3s ease",
        }}
        whileHover={{ scale: 1.05, color: "#002a5c" }}
      >
        About Glacia WTR
      </motion.h1>

      {/* Introduction */}
      <motion.p
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "auto",
          color: "#333",
          lineHeight: "1.6",
        }}
        whileHover={{ scale: 1.02, color: "#0056b3" }}
      >
        Established in 2025, Glacia WTR is a leading provider of premium bottled drinking water in Delhi NCR.
        We are committed to delivering fresh, pure, and safe drinking water using advanced filtration and purification processes.
      </motion.p>

      {/* Our Commitment Section */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <motion.h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05, color: "#002a5c" }}
        >
          Our Commitment
        </motion.h2>

        <List sx={{ maxWidth: "600px", margin: "auto", textAlign: "left", fontSize: "1.1rem", color: "#333" }}>
          {[
            "100% Natural Mineral Water",
            "Advanced Filtration & Purification",
            "Sustainable & Eco-Friendly Packaging",
            "Trusted by Homes & Businesses",
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02, color: "#0056b3" }}>
              <ListItem sx={{ transition: "color 0.3s ease", cursor: "pointer" }}>• {item}</ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      {/* Our Mission Section */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <motion.h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05, color: "#002a5c" }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "auto",
            color: "#333",
            lineHeight: "1.6",
          }}
          whileHover={{ scale: 1.02, color: "#0056b3" }}
        >
          To provide affordable, premium, and healthy drinking water while maintaining sustainability and ensuring customer satisfaction.
        </motion.p>
      </Box>
    </motion.div>
  );
};

export default About;
