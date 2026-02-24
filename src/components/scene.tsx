"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// A floating particle field that looks like a subtle data stream/mesh
function ParticleField({ count = 5000 }) {
    const points = useRef<THREE.Points>(null);

    // Generate random positions and colors for particles
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Choose colors from our palette: Primary Cyan and Secondary Blue
        const colorA = new THREE.Color("#00e5ff"); // Cyan
        const colorB = new THREE.Color("#1e3a8a"); // Deep Blue
        const colorC = new THREE.Color("#0B192C"); // Dark background (for fade effect)

        for (let i = 0; i < count; i++) {
            // Create a large spherical volume scattered randomly
            const radius = 25;
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            positions.set([x, y, z], i * 3);

            // Mix colors for variety
            const mixedColor = colorA.clone().lerp(colorB, Math.random());

            // Add some very dark particles to create depth
            if (Math.random() > 0.8) {
                mixedColor.lerp(colorC, 0.8);
            }

            colors.set([mixedColor.r, mixedColor.g, mixedColor.b], i * 3);
        }
        return [positions, colors];
    }, [count]);

    // Animate the entire field slowly and add a slight interactive wave
    useFrame((state, delta) => {
        if (!points.current) return;

        // Slow, ambient rotation
        points.current.rotation.x -= delta / 20;
        points.current.rotation.y -= delta / 30;

        // Optional: Add subtle mouse interaction if needed
        // points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, (state.mouse.x * 2), 0.05);
        // points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, (state.mouse.y * 2), 0.05);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={points} positions={positions} colors={colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

// Global Camera Controller for slight parallax based on mouse movement
function CameraController() {
    const { camera } = useThree();

    useFrame((state) => {
        // Very subtle mouse parallax
        const targetX = state.mouse.x * 2;
        const targetY = state.mouse.y * 2;

        camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.02);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.02);
        // Move camera to look slightly at the center but mainly offset
        camera.lookAt(0, 0, 0);
    });

    return null;
}

export function BackgroundScene() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#0B192C]">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                {/* Subtle ambient light */}
                <ambientLight intensity={0.5} />
                {/* The primary visual element */}
                <ParticleField count={4000} />
                {/* Add mouse reactivity */}
                <CameraController />
            </Canvas>
        </div>
    );
}
