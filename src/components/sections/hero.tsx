"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-4 inline-block">
                            <span className="px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium tracking-wide">
                                Available for new opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight"
                        >
                            Building digital <br className="hidden md:block" />
                            <span className="clip-text">experiences</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light"
                        >
                            Creative Full-Stack Developer specializing in Next.js, Framer Motion, and building premium, award-winning user interfaces.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button
                                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                                size="lg"
                                className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all hover:scale-105 h-12 w-full sm:w-auto"
                            >
                                View Projects
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full px-8 glass border-white/20 hover:bg-white/10 hover:text-white transition-all h-12 w-full sm:w-auto text-white dark:text-white"
                            >
                                Download Resume
                                <Download className="ml-2 w-4 h-4" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="flex-1 flex justify-center lg:justify-end relative z-10 w-full max-w-md lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <motion.div
                            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 glow"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        >
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#0A192F] items-center justify-center flex border-4 border-[#0A192F]">
                                {/* Fallback image if user doesn't provide one, using a generic gradient avatar */}
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-[#0A192F] flex items-center justify-center">
                                    <span className="text-6xl text-slate-600 font-light mix-blend-overlay">PHOTO</span>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center backdrop-blur-md"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            >
                                ✨
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-8 left-8 w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center backdrop-blur-md"
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            >
                                🚀
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
