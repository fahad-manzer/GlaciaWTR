import React from "react";
import { motion } from "framer-motion";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
  Grid,
} from "@mui/material";
import { Send, LocationOn, Phone, Email } from "@mui/icons-material";
import bg from "../assets/Contactbgimage.jpg"
import adimage from "../assets/place your ad.png"

const pageTransition = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const BulkOrder = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={pageTransition}>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // justifyContent: "center",
          // alignItems:"center",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={6} sx={{ p: 4, backgroundColor: "#222", color: "#fff" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>Contact Us</Typography>
                <form>
                  <TextField fullWidth label="Full Name" variant="filled" margin="normal" sx={{ bgcolor: "#333", input: { color: "#fff" } }} />
                  <TextField fullWidth label="Contact Number" variant="filled" margin="normal" sx={{ bgcolor: "#333", input: { color: "#fff" } }} />
                  <TextField fullWidth label="Email Address" variant="filled" margin="normal" sx={{ bgcolor: "#333", input: { color: "#fff" } }} />
                  <TextField fullWidth label="Message" variant="filled" margin="normal" multiline rows={4} sx={{ bgcolor: "#333", input: { color: "#fff" } }} />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<Send />}
                      sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1rem", fontWeight: "bold", textTransform: "none", borderRadius: "8px" }}
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <img style={{height:"580px",width:"550px"}} src={adimage} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default BulkOrder;