import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff", // Ocean Blue
      // main: "#0077be",
    },
    secondary: {
      main: "#ffffff", // White
    },
    background: {
      default: "#ffffff", // Light Water Blue
      // default: "#e0f7fa", // Light Water Blue
      paper: "#b3e5fc",
    },
    text: {
      primary: "#01579b", // Dark Blue for readability
      secondary: "#0288d1",
    },
    success: {
      main: "#ffffff", // Adjusted color for consistency
      // main: "#0077be",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "appointmentButton" },
          style: {
            position: "relative",
            borderRadius: 0,
            backgroundColor: "#0077be",
            color: "white",
            fontWeight: 600,
            marginLeft: 2,
            height: 50,
            width: 160,
            overflow: "hidden",
            // padding: "14px 24px",
            transition: "0.5s ease-in-out",
            "& .btn-text": {
              display: "flex",
              alignItems: "center",
              transition: "transform 0.2s cubic-bezier(0.23, 0.71, 0.55, 0.99), opacity 0.15s",
            },
            "& .btn-cover": {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            },
            "& .btn-cover-text": {
              opacity: 0,
              transform: "translateX(-20px)",
              // transition: "transform 0.4s cubic-bezier(0.28, 1.04, 0.49, 0.9) 0.2s, opacity 0.6s 0.15s",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
            },
            "& .btn-bg": {
              position: "absolute",
              inset: 0,
              transformOrigin: "100% 50%",
              transform: "scaleX(0)",
              background: "#333",
              transition: "transform 0.35s cubic-bezier(0.86, 0, 0.07, 1)",
              zIndex: 1,
            },
            "&:hover .btn-text": {
              opacity: 0,
              transform: "translateX(15px)",
            },
            "&:hover .btn-cover-text": {
              opacity: 1,
              transform: "translateX(0px)",
            },
            "&:hover .btn-bg": {
              transformOrigin: "0px 50%",
              transform: "scaleX(1)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
