import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import bottle from "../assets/bottle for websiteP.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const NutritionRichWater = () => {
  return (
    <Box sx={{ textAlign: "center", py: 8, px: { xs: 2, md: 8 } }}>
      {/* Header */}
      <Typography variant="subtitle1" sx={{ color: "green", fontWeight: "bold" }}>
        WHAT WE OFFER
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
        NUTRITION RICH WATER
      </Typography>

      {/* Content Grid */}
      <Grid container spacing={2} alignItems="center" sx={{ mt: 5 }}>
        {/* Left Side Features */}
        <Grid item xs={12} md={5} sx={{width:"500px"}}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", mb: 4, paddingBottom:{md:"150px"},paddingRight:{md:"150px"} }}>
            <img src={icon1} alt="Vitamin B12" style={{ width: 70, height: 70, marginRight: 20 }} />
            <Box sx={{ textAlign: "left", mr: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
                Vitamin B12
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", textAlign: "left" }}>
                Infusion and other minerals to make sure your health is taken care of.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", mb: 4 ,paddingRight:{md:"150px"} }}>
            <img src={icon3} alt="Ozonised" style={{ width: 70, height: 70, marginRight: 20 }} />
            <Box sx={{ textAlign: "left", mr: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
                Ozonised
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", textAlign: "left" }}>
                To keep everything natural and healthy for you.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Center Bottle Image */}
        <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
          <img
            src={bottle}
            alt="Water Bottle"
            style={{
              // width: "100%",
              maxWidth: "300px",
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* Right Side Features */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mb: 4,paddingBottom:{md:"150px"},paddingLeft:{md:"150px"}  }}>
            <Box sx={{ textAlign: "right", mr: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
                EMF
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", textAlign: "right" }}>
                EMF to keep the product fresh and safe from germs and bacteria.
              </Typography>
            </Box>
            <img src={icon2} alt="EMF" style={{ width: 70, height: 70 }} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mb: 4,paddingLeft:{md:"150px"}  }}>
            <Box sx={{ textAlign: "right", mr: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
                GAC
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", textAlign: "right" }}>
                To ensure that all harmful substances are removed from the product.
              </Typography>
            </Box>
            <img src={icon4} alt="GAC" style={{ width: 70, height: 70 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NutritionRichWater;



// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import bottle from "../assets/DSC16882.png";
// import icon1 from "../assets/icon1.png";
// import icon2 from "../assets/icon2.png";
// import icon3 from "../assets/icon3.png";
// import icon4 from "../assets/icon4.png";


// // Data for Nutrition Features
// const nutritionData = [
//   {
//     title: "Vitamin B12",
//     description: "Infusion and other minerals to make sure your health is taken care of.",
//     icon: icon1, // Replace with actual icons
//     align: "left",
//   },
//   {
//     title: "EMF",
//     description: "EMF to keep the product fresh and safe from germs and bacteria.",
//     icon: icon2,
//     align: "right",
//   },
//   {
//     title: "Ozonised",
//     description: "To keep everything natural and healthy for you.",
//     icon: icon3,
//     align: "left",
//   },
//   {
//     title: "GAC",
//     description: "To ensure that all harmful substances are removed from the product.",
//     icon: icon4,
//     align: "right",
//   },
// ];

// const NutritionRichWater = () => {
//   return (
//     <Box sx={{ textAlign: "center", py: 8, px: 3 }}>
//       {/* Header */}
//       <Typography variant="subtitle1" sx={{ color: "green" }}>
//         | WHAT WE OFFER
//       </Typography>
//       <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", mt: 1 }}>
//         NUTRITION RICH WATER
//       </Typography>

//       {/* Content Grid */}
//       <Grid container spacing={4} alignItems="center" sx={{ mt: 5, paddingLeft: "60px",paddingRight:"60px" }}>
//         {/* Left Side Text */}
//         <Grid item xs={12} md={5} sx={{}} >
//           {nutritionData
//             .filter((item) => item.align === "left")
//             .map((item, index) => (
//               <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 4,paddingBottom:{md:"100px"} }}>
//                 <img src={item.icon} alt={item.title} style={{ width: 60, height: 60, marginRight: 15 }} />
//                 <Box sx={{ textAlign: "left", mr: 2, width: "250px" }}>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "gray" }}>
//                     {item.description}
//                   </Typography>
//                 </Box>
//               </Box>
//             ))}
//         </Grid>

//         {/* Center Image */}
//         <Grid item xs={12} md={2} sx={{ textAlign: "center" }}>
//           <img
//             src={bottle}
//             alt="Water Bottle"
//             style={{
//               width: "100%",
//               maxWidth: "400px", /* Increase the max width */
//               height: "auto", /* Ensures proportion is maintained */
//             }}
//           />
//         </Grid>

//         {/* Right Side Text */}
//         <Grid item xs={12} md={5}>
//           {nutritionData
//             .filter((item) => item.align === "right")
//             .map((item, index) => (
//               <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 4, justifyContent: "flex-end",paddingBottom:{md:"100px"} }}>
//                 <Box sx={{ textAlign: "right", mr: 2, width: "250px" }}>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "gray" }}>
//                     {item.description}
//                   </Typography>
//                 </Box>
//                 <img src={item.icon} alt={item.title} style={{ width: 60, height: 60 }} />
//               </Box>
//             ))}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default NutritionRichWater;
