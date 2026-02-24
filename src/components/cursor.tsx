"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setIsMounted(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - (isHovering ? 32 : 6));
            cursorY.set(e.clientY - (isHovering ? 32 : 6));
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isHovering]);

    if (!isMounted) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center rounded-full"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    width: isHovering ? 64 : 12,
                    height: isHovering ? 64 : 12,
                    backgroundColor: isHovering ? "transparent" : "white",
                    border: isHovering ? "1px solid rgba(255,255,255,0.5)" : "none",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ duration: 0.2 }}
            >
                {isHovering && (
                    <span className="text-[10px] font-mono tracking-widest text-white absolute opacity-70">
                        CLICK
                    </span>
                )}
            </motion.div>
        </>
    );
}
