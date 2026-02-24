"use client";

import { useEffect, useState } from "react";

export function ParticleBackground() {
    const [particles, setParticles] = useState<{ x: number; y: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate random particles
        const generateParticles = () => {
            const p = Array.from({ length: 40 }).map(() => ({
                x: Math.random() * 100, // percentage
                y: Math.random() * 100, // percentage
                size: Math.random() * 3 + 1, // 1px to 4px
                duration: Math.random() * 10 + 10, // 10s to 20s
                delay: Math.random() * 5, // 0s to 5s
            }));
            setParticles(p);
        };

        generateParticles();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#0B1F3B]">
            {/* Subtle Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1)_0%,rgba(11,31,59,0)_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(30,58,138,0.15)_0%,rgba(11,31,59,0)_50%)]" />

            {/* Particles */}
            {particles.map((particle, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-cyan-400/20 glow"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animation: `float ${particle.duration}s infinite linear`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}} />
        </div>
    );
}
