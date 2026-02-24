"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const terminalLines = [
    "> INITIALIZING_SYSTEM...",
    "> LOADING_MODULES: [REACT, NEXT.JS, TYPESCRIPT]",
    "> ESTABLISHING_CONNECTION...",
    "> SYSTEM_READY_PORTFOLIO_V2.0_LOADED",
    "> STATUS: ONLINE"
];

export function HeroSection() {
    const [typedLines, setTypedLines] = useState<string[]>([]);

    useEffect(() => {
        let currentLine = 0;

        const interval = setInterval(() => {
            if (currentLine < terminalLines.length) {
                setTypedLines(prev => [...prev, terminalLines[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
            }
        }, 400);

        return () => clearInterval(interval);
    }, []);

    const titleVariants: Variants = {
        hidden: { y: "100%", opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
                delay: i * 0.15,
            }
        })
    };

    return (
        <section id="hero" className="min-h-screen pt-32 pb-12 relative flex flex-col justify-center">
            <div className="container mx-auto px-6 max-w-[90rem]">

                {/* Top Meta Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-32 tech-mono text-[10px] md:text-xs">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        <p className="text-white/40 mb-1">ROLE</p>
                        <p className="text-white">FULL-STACK ENGINEER</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                        <p className="text-white/40 mb-1">LOCATION</p>
                        <p className="text-white">GLOBAL / REMOTE</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                        <p className="text-white/40 mb-1">STATUS</p>
                        <p className="text-green-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            AVAILABLE FOR WORK
                        </p>
                    </motion.div>
                    <motion.div className="hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
                        <p className="text-white/40 mb-1">SCROLL</p>
                        <ArrowDownRight className="w-4 h-4 text-white" />
                    </motion.div>
                </div>

                {/* Massive Typography */}
                <div className="mb-16 uppercase relative z-10 w-full">
                    <div className="overflow-hidden leading-[0.85] tracking-tighter w-full">
                        <motion.h1
                            custom={0}
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-[12vw] sm:text-[10vw] font-bold text-white whitespace-nowrap"
                        >
                            CREATIVE
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden leading-[0.85] tracking-tighter w-full flex sm:justify-end">
                        <motion.h1
                            custom={1}
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-[12vw] sm:text-[10vw] font-bold text-white/50 italic whitespace-nowrap"
                        >
                            DEVELOPER
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden leading-[0.85] tracking-tighter w-full flex items-center gap-4 sm:gap-12 mt-4 sm:mt-0">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.5, duration: 1, ease: 'easeInOut' }}
                            className="h-[2px] bg-white flex-1 origin-left hidden sm:block"
                        />
                        <motion.h1
                            custom={2}
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-[12vw] sm:text-[10vw] font-bold text-white whitespace-nowrap"
                        >
                            ENGINEER
                        </motion.h1>
                    </div>
                </div>

                {/* Terminal / Bio Area */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:mt-24">
                    <div className="md:col-span-5 md:col-start-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.8 }}
                            className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg"
                        >
                            <div className="flex gap-2 mb-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            </div>
                            <div className="font-mono text-xs sm:text-sm text-white/60 min-h-[120px]">
                                {typedLines.map((line, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={idx === typedLines.length - 1 ? "text-white" : ""}
                                    >
                                        {line}
                                    </motion.div>
                                ))}
                                {typedLines.length === terminalLines.length && (
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        className="inline-block w-2 h-4 bg-white align-middle ml-1 mt-1"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
