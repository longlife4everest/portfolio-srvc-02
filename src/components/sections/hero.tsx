"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";

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

    // 3D Tilt physics
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="hero" className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & Bio */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                                Available for Fall 2025 Internships
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Computer Science <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500 relative inline-block">
                                    Student & Developer.
                                    <div className="absolute -inset-1 blur-2xl opacity-20 bg-[var(--primary)] mix-blend-screen pointer-events-none"></div>
                                </span>
                            </h1>

                            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 font-light max-w-2xl">
                                I'm a passionate software engineering student focused on building scalable web applications and learning cutting-edge technologies. Bridging the gap between academic theory and production-grade engineering.
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <a
                                    href="#projects"
                                    className="px-8 py-4 bg-[var(--primary)] text-[#0B192C] font-bold rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                                >
                                    View My Work
                                </a>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                                >
                                    <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                                    Resume
                                </a>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6">
                                <span className="text-sm font-medium text-slate-400">CONNECT</span>
                                <div className="h-px w-12 bg-white/20"></div>
                                <div className="flex gap-4">
                                    {[Github, Linkedin, Mail].map((Icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="text-slate-400 hover:text-[var(--primary)] transition-colors hover:scale-110 transform"
                                        >
                                            <Icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: 3D Image & Decorative Elements */}
                    <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end" style={{ perspective: "1200px" }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ rotateX, rotateY }}
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl cursor-pointer preserve-3d group"
                        >
                            {/* Decorative background glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[var(--primary)]/10 blur-[80px] rounded-full z-0 pointer-events-none group-hover:bg-[var(--primary)]/20 transition-all duration-500"></div>

                            {/* Image Container */}
                            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass-card border border-white/20 p-2 shadow-2xl">
                                <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A1128] relative">
                                    {/* Placeholder for User Picture */}
                                    <img
                                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop"
                                        alt="Student Portrait"
                                        className="w-full h-full object-cover scale-105"
                                    />
                                    <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>

                                    {/* 3D Glare effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ left: glareX, top: glareY, transform: 'translate(-50%, -50%) scale(2)' }}
                                    />
                                </div>

                                {/* Floating Badge in 3D Space */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ transform: "translateZ(50px)" }} // Pop out in 3D
                                    className="absolute -bottom-6 -left-6 bg-[#0B192C] border border-[var(--primary)]/30 p-4 rounded-2xl glass-card shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20"
                                >
                                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center text-[var(--primary)] font-bold text-xl ring-1 ring-[var(--primary)]/50">
                                        4.0
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Target GPA</p>
                                        <p className="text-slate-400 text-xs text-nowrap">Class of 2026</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
