import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const WaterPouringScene = () => {
  const mountRef = useRef(null);
  const [pouring, setPouring] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7);
    scene.add(light);

    // Bottle (Cylinder)
    const bottleGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    const bottleMaterial = new THREE.MeshStandardMaterial({ color: 0x6a5acd });
    const bottle = new THREE.Mesh(bottleGeometry, bottleMaterial);
    bottle.position.set(0, 1, 0);
    scene.add(bottle);

    // Glass (Smaller Cylinder)
    const glassGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.5,
    });
    const glass = new THREE.Mesh(glassGeometry, glassMaterial);
    glass.position.set(1.5, 0.5, 0);
    scene.add(glass);

    // Water Drop
    const waterDropGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const waterDropMaterial = new THREE.MeshStandardMaterial({ color: 0x1e90ff });
    const waterDrop = new THREE.Mesh(waterDropGeometry, waterDropMaterial);
    waterDrop.position.set(0, 0.9, 0);
    scene.add(waterDrop);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 5;

    let waterDropY = 0.9;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (pouring && waterDropY > 0.5) {
        waterDropY -= 0.01;
        waterDrop.position.y = waterDropY;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [pouring]);

  return (
    <div ref={mountRef} onClick={() => setPouring(true)} style={{ width: "100vw", height: "100vh" }} />
  );
};

export default WaterPouringScene;
