"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
        link: "#"
    },
    {
        title: "Google Professional Cloud Developer",
        issuer: "Google Cloud",
        year: "2022",
        link: "#"
    },
    {
        title: "Meta Front-End Developer",
        issuer: "Meta",
        year: "2021",
        link: "#"
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        year: "2021",
        link: "#"
    }
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Licenses & <span className="text-cyan-400">Certifications</span></h2>
                    <div className="w-20 h-1 bg-cyan-500 rounded-full glow mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="group p-6 rounded-2xl glass border border-white/10 hover:border-cyan-500/50 bg-[#0F294D]/30 hover:bg-[#0F294D] transition-all duration-300 flex items-start gap-4 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="p-3 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                <Award className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">{cert.title}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-400 text-sm font-light">{cert.issuer}</span>
                                    <span className="text-cyan-500 text-sm font-mono">{cert.year}</span>
                                </div>
                            </div>
                            <a href={cert.link} className="text-slate-500 hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100 p-1">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
