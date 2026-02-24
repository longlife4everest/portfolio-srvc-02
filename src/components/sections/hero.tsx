"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
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
        <section id="hero" className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & Bio */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium tracking-wide">
                                Available for Fall 2025 Internships
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Computer Science <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">
                                    Student & Developer.
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

                    {/* Right Column: Image & Decorative Elements */}
                    <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative background glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--primary)]/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

                            {/* Image Container */}
                            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-card border border-white/20 p-2">
                                <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A1128] relative">
                                    {/* Placeholder for User Picture */}
                                    <img
                                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop"
                                        alt="Student Portrait"
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 border-2 border-white/10 rounded-xl pointer-events-none"></div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -left-6 bg-[#0B192C] border border-white/20 p-4 rounded-2xl glass-card shadow-2xl flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[var(--primary)] font-bold text-xl">
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
