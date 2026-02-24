"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// Placeholder placeholder images using unsplash or gradients
const projects = [
    {
        title: "E-Commerce Experience",
        description: "A high-end e-commerce platform built with Next.js, featuring seamless 3D product previews and ultra-fast checkout.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Tailwind", "Three.js", "Stripe"],
        links: { live: "#", github: "#" }
    },
    {
        title: "AI Finance Dashboard",
        description: "An advanced analytics dashboard utilizing machine learning models to predict market trends and optimize portfolios.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Python", "TensorFlow", "D3.js"],
        links: { live: "#", github: "#" }
    },
    {
        title: "SaaS Workspace Tool",
        description: "A collaborative real-time workspace application with live cursors, document editing, and team management.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Supabase", "WebSockets", "Framer Motion"],
        links: { live: "#", github: "#" }
    },
    {
        title: "Global Supply Chain App",
        description: "Mobile-first logistics tracking application ensuring real-time visibility across international shipping routes.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        tags: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
        links: { live: "#", github: "#" }
    },
    {
        title: "Creative Agency Portfolio",
        description: "An award-winning experimental portfolio website featuring custom WebGL shaders and smooth scroll physics.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "WebGL", "GSAP", "Tailwind CSS"],
        links: { live: "#", github: "#" }
    },
    {
        title: "DeFi Exchange Platform",
        description: "Secure, decentralized cryptocurrency exchange with a highly optimized matching engine and seamless UI/UX.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800",
        tags: ["Web3", "Solidity", "React", "Ethers.js"],
        links: { live: "#", github: "#" }
    }
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative z-10 bg-[#0A192F]/50">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Featured <span className="text-cyan-400">Projects</span></h2>
                    <div className="w-20 h-1 bg-cyan-500 rounded-full glow"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group rounded-2xl overflow-hidden glass border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 bg-[#0F294D]/50 flex flex-col h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Image Container with Hover Scale */}
                            <div className="relative h-56 overflow-hidden bg-slate-800">
                                <motion.div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-[#0B1F3B]/40 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 text-sm mb-6 flex-1 font-light leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 text-xs py-0.5">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                    <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                    <a href={project.links.live} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm ml-auto">
                                        Live Preview
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
