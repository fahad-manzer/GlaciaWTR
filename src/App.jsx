import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Theme"; // Import theme
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import BulkOrder from "./pages/BulkOrder";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import "./index.css";
// import ModelViewer from "./components/ModelViewer";
import WaterPouringScene from "./components/WaterPouringScene";
import Collections from "./pages/Collections";
import ScrollToTop from "./components/ScrollToTop"
// import Bottle3D from "./components/Bottle3D";

function App() {
  const rippleContainer = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!rippleContainer.current) return;
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      rippleContainer.current.appendChild(ripple);

      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      ripple.style.animation = "ripple-effect 0.6s linear";

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div ref={rippleContainer} className="ripple-container"> */}
        <Router>
          <Preloader />
          <Navbar />
          <ScrollToTop />
          <motion.div
            // className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/bulk-order" element={<BulkOrder />} />
              <Route path="/collection" element={<Collections />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/customization" element={<Bottle3D />} /> */}
              <Route path="/abc" element={<WaterPouringScene />} />
            </Routes>
          </motion.div>
          <Footer />
        </Router>
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
