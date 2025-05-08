import React, { useState, useEffect } from "react";
import Gif from '../assets/drop-water.gif' 


const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Hide after 2s
  }, []);

  if (!loading) return null; // Remove preloader when loading is done

  return (
    <div className="preloader">
      <img  src={Gif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Preloader;
