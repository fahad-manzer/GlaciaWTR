import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
    const { scene } = useGLTF("/LittlestTokyo.glb"); // Model path (public/models/)
    return <primitive object={scene} scale={1.5} />;
};

const ModelViewer = () => {
    return (
        <div style={{ height: "100vh", width: "100vw", backgroundColor: "#111" }}>
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls />
            </Canvas>


        </div>
    );
};

export default ModelViewer;
