"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "Dec 2023",
        link: "#",
        icon: "☁️"
    },
    {
        title: "Meta Front-End Developer",
        issuer: "Coursera / Meta",
        date: "Aug 2023",
        link: "#",
        icon: "🌐"
    },
    {
        title: "Google Data Analytics",
        issuer: "Coursera / Google",
        date: "Jan 2023",
        link: "#",
        icon: "📊"
    }
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">

                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                        <Award className="text-[var(--primary)] w-4 h-4" />
                        <span className="text-sm tech-mono text-white/70">CREDENTIALS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Licenses & Certifications</h2>
                    <p className="text-white/50">Continuous learning beyond the university curriculum.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl relative overflow-hidden group bg-[#0B192C]/80"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    {cert.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                                <p className="text-[var(--primary)] text-sm mb-4 font-medium">{cert.issuer}</p>

                                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/10">
                                    <span className="tech-mono text-xs text-white/40">{cert.date}</span>
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white/50 hover:text-[var(--primary)] transition-colors p-2 -mr-2"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
