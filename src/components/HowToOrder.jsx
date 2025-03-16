import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img from "../assets/Costumization-lebal.png"

const steps = [
    {
        id: 1,
        title: "Submit A Quote",
        description: "Tell us about your brand and specify your needs in our convenient inquiry form.",
        image: img,
    },
    {
        id: 2,
        title: "Approve Designs",
        description: "Get the best design options for your brand and finalize pricing, label, and bottle.",
        image: img,
    },
    {
        id: 3,
        title: "Place Your Order",
        description: "Get your custom bottled water with Watergram delivered at your doorsteps.",
        image: img,
    },
];

const HowToOrder = () => {
    return (
        <Box sx={{ textAlign: "center", py: 8, px: 3 }}>
            <Typography variant="subtitle1" sx={{ color: "green" }}>
                | GET STARTED
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
                How To Order
            </Typography>

            {/* Steps Section */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 4, sm: 4, md: 20 },
                    mt: 5,
                }}
            >
                {steps.map((step, index) => (
                    <Box key={step.id} sx={{ maxWidth: 300, display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
                        {/* Step Image */}
                        <Card
                            sx={{
                                width: 330,
                                height: 330,
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                            }}
                        >
                            <img src={step.image} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Card>

                        {/* Step Number and Arrow */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "green",
                                    color: "white",
                                    fontSize: "18px",
                                    padding: "10px 15px",
                                    borderRadius: "50%",
                                }}
                            >
                                {step.id.toString().padStart(2, "0")}
                            </Box>
                            {/* {index !== steps.length - 1 && <ArrowForwardIosIcon sx={{ color: "gray", fontSize: 20 }} />} */}
                        </Box>

                        {/* Step Content */}
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
                                {step.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                                {step.description}
                            </Typography>
                        </CardContent>
                    </Box>
                ))}
            </Box>
            <Button
                variant="contained"
                sx={{
                    // marginTop:"10px",
                    backgroundColor: "#0077be",
                    borderRadius: "50px",
                    padding: "18px 35px",
                    fontSize: "16px",
                    color: "white",
                    textTransform: "uppercase",
                    "&:hover": {
                        backgroundColor: "#333",
                    },
                }}
            >
                Get A Quote
            </Button>
        </Box>
    );
};

export default HowToOrder;
