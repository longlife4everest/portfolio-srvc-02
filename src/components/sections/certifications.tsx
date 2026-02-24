"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
        url: "#"
    },
    {
        title: "Meta Front-End Developer",
        issuer: "Meta / Coursera",
        year: "2022",
        url: "#"
    },
    {
        title: "Google Cloud Professional",
        issuer: "Google",
        year: "2022",
    }
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-[90rem]">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                    <div className="md:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="sticky top-32"
                        >
                            <h2 className="text-sm tech-mono mb-4 text-white/50">04 // CREDENTIALS</h2>
                        </motion.div>
                    </div>

                    <div className="md:col-span-9">
                        <div className="border-t border-white/10">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-white/10 hover:border-white transition-colors duration-300"
                                >
                                    <div className="flex flex-col mb-4 md:mb-0">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:px-4 transition-all duration-300">{cert.title}</h3>
                                        <p className="text-white/40 tech-mono group-hover:px-4 transition-all duration-300 delay-75">{cert.issuer}</p>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <span className="text-white/30 tech-mono">{cert.year}</span>
                                        {cert.url && (
                                            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all">
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
