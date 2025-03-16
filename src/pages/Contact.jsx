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

const pageTransition = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Contact = () => {
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
          <Grid container spacing={4} sx={{justifyContent:"center"}}>
            <Grid item xs={12} md={3} >
              <Paper elevation={3} sx={{ p: 3, textAlign: "center",height:"150px", backgroundColor:"#ffffff" }}>
                <LocationOn sx={{ fontSize: 40, color: "#555" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Our Office</Typography>
                <Typography variant="body2">F-32 B Street, Madhu Vihar, Delhi, 110092</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center",height:"150px", backgroundColor:"#ffffff" }}>
                <Phone sx={{ fontSize: 40, color: "#555" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Phone</Typography>
                <Typography variant="body2">7011597607, 8587012050</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" ,height:"150px", backgroundColor:"#ffffff"}}>
                <Email sx={{ fontSize: 40, color: "#555" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Email</Typography>
                <Typography variant="body2">glaciawtr@gmail.com</Typography>
              </Paper>
            </Grid>
          </Grid>

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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.654869160219!2d77.2787742755011!3d28.64010427566062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzI0LjQiTiA3N8KwMTYnNTIuOSJF!5e0!3m2!1sen!2sin!4v1741536044899!5m2!1sen!2sin"
                width="100%"
                height="580"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Contact;