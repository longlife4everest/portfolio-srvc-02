"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative z-10 border-t border-white/5 overflow-hidden">

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Info & Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 mb-8 w-max">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm tech-mono text-[var(--primary)]">OPEN TO OPPORTUNITIES</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Let's Build <br /> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">Amazing.</span>
                        </h2>

                        <p className="text-white/60 text-lg mb-12 font-light max-w-md">
                            Whether you're looking for an intern, a freelance developer, or just want to connect, my inbox is always open.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                    <Mail className="w-5 h-5 text-[var(--primary)]" />
                                </div>
                                <div>
                                    <p className="text-xs tech-mono text-white/40 mb-1">EMAIL DIRECT</p>
                                    <a href="mailto:rumbewas.isabella@gmail.com" className="font-medium text-lg">rumbewas.isabella@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                    <MapPin className="w-5 h-5 text-[var(--primary)]" />
                                </div>
                                <div>
                                    <p className="text-xs tech-mono text-white/40 mb-1">LOCATION</p>
                                    <p className="font-medium text-lg">Global / Remote</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-[var(--primary)] hover:border-[var(--primary)]/50 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-[var(--primary)] hover:border-[var(--primary)]/50 transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="glass-card p-8 md:p-12 rounded-3xl bg-[#0B192C]/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs tech-mono text-white/50 pl-2">YOUR NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all font-light"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs tech-mono text-white/50 pl-2">EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all font-light"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs tech-mono text-white/50 pl-2">MESSAGE</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all font-light resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all ${isSubmitted
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                            : 'bg-[var(--primary)] text-[#0B192C] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-white'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-[#0B192C] border-t-transparent rounded-full animate-spin"></span>
                                    ) : isSubmitted ? (
                                        "Message Sent Successfully"
                                    ) : (
                                        <>
                                            Send Message <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
