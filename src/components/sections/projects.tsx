"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "NEXUS FINTECH",
        category: "WEB3 / BLOCKCHAIN",
        year: "2024",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f4tc431?q=80&w=2832&auto=format&fit=crop",
    },
    {
        title: "ELEVATE E-COMMERCE",
        category: "FULL-STACK PLATFORM",
        year: "2023",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
    {
        title: "AURA AI",
        category: "MACHINE LEARNING GUI",
        year: "2023",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    },
    {
        title: "VANGUARD DASHBOARD",
        category: "DATA VISUALIZATION",
        year: "2022",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    }
];

export function ProjectsSection() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section id="projects" className="py-32 relative z-10 border-t border-white/5 bg-black">
            <div className="container mx-auto px-6 max-w-[90rem]">

                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-sm tech-mono mb-4 text-white/50">03 // SELECTED_WORK</h2>
                        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
                            Featured <br /> Archives
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 max-w-sm font-light text-lg"
                    >
                        A curated selection of production-grade applications built with precision and modern tools.
                    </motion.p>
                </div>

                {/* Interactive List Layout */}
                <div className="relative border-t border-white/10 group/list">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className="list-item-hover group py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                                <span className="tech-mono text-white/30 transition-colors group-hover:text-white/60">
                                    0{idx + 1}
                                </span>
                                <h4 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/50 transition-colors duration-500 group-hover:text-white uppercase origin-left group-hover:scale-105">
                                    {project.title}
                                </h4>
                            </div>

                            <div className="flex items-center gap-8 md:gap-16">
                                <div className="flex flex-col items-start md:items-end gap-1">
                                    <span className="text-sm font-light text-white/80">{project.category}</span>
                                    <span className="tech-mono text-white/40">{project.year}</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Floating Image Preview (Desktop Only) */}
                    <div className="pointer-events-none hidden lg:block absolute inset-0 z-0 overflow-hidden">
                        <AnimatePresence>
                            {hoveredIdx !== null && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden will-change-transform z-0 border border-white/20"
                                >
                                    <img
                                        src={projects[hoveredIdx].image}
                                        alt="Project Preview"
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
