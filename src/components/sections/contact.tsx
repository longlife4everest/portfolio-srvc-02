"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });
            alert("Message transmitted successfully.");
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 md:py-48 relative z-10 border-t border-white/5 overflow-hidden">

            {/* Massive Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
                <h2 className="text-[20vw] font-bold tracking-tighter leading-none text-white whitespace-nowrap">
                    LET'S TALK
                </h2>
            </div>

            <div className="container mx-auto px-6 max-w-[90rem] relative z-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm tech-mono mb-8 text-white/50">05 // INITIATE_CONTACT</h2>
                        <h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12 uppercase leading-none">
                            Have an <br /> Idea?
                        </h3>

                        <p className="text-white/60 text-xl font-light max-w-md mb-16">
                            Currently accepting new projects, opportunities, and digital challenges globally.
                        </p>

                        <div className="flex gap-4">
                            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5 }}
                                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-12">

                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="WHAT'S YOUR NAME?"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors uppercase tracking-tight"
                                />
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="YOUR EMAIL ADDRESS?"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors uppercase tracking-tight"
                                />
                            </div>

                            <div className="relative group">
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="TELL ME ABOUT YOUR PROJECT"
                                    rows={3}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-xl md:text-2xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors uppercase tracking-tight resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full md:w-auto self-start flex items-center gap-4 text-xl md:text-2xl font-bold uppercase text-white py-4 disabled:opacity-50"
                            >
                                <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    <ArrowUpRight strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300" />
                                </div>
                                {isSubmitting ? "TRANSMITTING..." : "SEND_MESSAGE"}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
