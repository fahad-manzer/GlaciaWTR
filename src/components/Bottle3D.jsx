import React, { useState } from "react";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { TextureLoader, MeshStandardMaterial } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import helvetikerFont from "../assets/helvetiker_bold.typeface.json";

import { Box, TextField, Typography } from "@mui/material";

// Extend TextGeometry so React Three Fiber can use it
extend({ TextGeometry });

const Bottle = ({ logoTexture, text }) => {
  const { scene, materials } = useGLTF("/models/bottle.glb"); // Ensure this path is correct

  // Apply default material if missing
  scene.traverse((child) => {
    if (child.isMesh && !child.material) {
      child.material = new MeshStandardMaterial({ color: "white" });
    }
  });

  const font = new FontLoader().parse(helvetikerFont); // Load font file

  return (
    <group>
      {/* 3D Bottle with Materials Fixed */}
      <primitive object={scene} scale={3} position={[0, -1.5, 0]} />

      {/* Apply the Logo as a Texture */}
      {logoTexture && (
        <mesh position={[0, 0.8, 1]}>
          <planeGeometry args={[0.6, 0.6]} />
          <meshBasicMaterial map={logoTexture} transparent />
        </mesh>
      )}

      {/* Display Brand Name as 3D Text */}
      {text && (
        <mesh position={[0, 1.5, 1]} rotation={[0, 0, 0]}>
          <textGeometry args={[text, { font, size: 0.3, height: 0.05 }]} />
          <meshStandardMaterial color="black" />
        </mesh>
      )}
    </group>
  );
};

const Bottle3D = () => {
  const [logo, setLogo] = useState(null);
  const [text, setText] = useState("");
  const logoTexture = logo ? useLoader(TextureLoader, logo) : null;

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setLogo(objectURL);
    }
  };

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
        Customize Your 3D Bottle
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Upload your logo or enter your brand name to see it in 3D.
      </Typography>

      {/* Upload Logo */}
      <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ marginBottom: "10px" }} />

      {/* Enter Brand Name */}
      <TextField
        label="Brand Name"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mt: 2, mb: 2 }}
      />

      {/* 3D Canvas with Lights and Environment */}
      <Canvas style={{ height: "500px", background: "#e0e0e0" }} camera={{ position: [0, 0, 3] }}>
        {/* Add Proper Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={2} />

        {/* Add Environment for Better Reflection */}
        <Environment preset="city" />

        {/* Orbit Controls for Rotation and Zoom */}
        <OrbitControls enableZoom={true} minDistance={2} maxDistance={5} />

        <Bottle logoTexture={logoTexture} text={text} />
      </Canvas>
    </Box>
  );
};

export default Bottle3D;
