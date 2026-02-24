"use client";

import { useEffect, useState } from "react";

export function NoiseBackground() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-black">
            {/* Base Dark Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#111_0%,#000_70%)] opacity-80" />

            {/* Raw Noise Texture */}
            <div className="absolute inset-0 opacity-[0.04] noise-bg" />

            {/* Subtle bottom glow to anchor the design */}
            <div className="absolute bottom-[-10%] sm:bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-white/[0.02] blur-[120px] rounded-full" />
        </div>
    );
}
