"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
];

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-cyan-400">Touch</span></h2>
                    <div className="w-20 h-1 bg-cyan-500 rounded-full glow mx-auto mb-8"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
                        Have a project in mind or just want to say hi? Feel free to drop a message. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Let's talk about your project</h3>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 p-4 rounded-2xl glass border-white/5 hover:border-cyan-500/30 transition-colors w-max pr-8">
                                <div className="p-3 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 glow">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Email me at</p>
                                    <a href="mailto:hello@example.com" className="text-white font-medium hover:text-cyan-400 transition-colors">hello@example.com</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-white font-medium mb-4">Connect with me</p>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                                            aria-label={link.label}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass border border-white/10 shadow-2xl bg-[#0F294D]/60 flex flex-col gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    required
                                    className="bg-[#0A192F]/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400 h-12 rounded-xl transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    className="bg-[#0A192F]/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400 h-12 rounded-xl transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Your Message</label>
                                <Textarea
                                    id="message"
                                    placeholder="How can I help you?"
                                    required
                                    className="bg-[#0A192F]/50 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400 min-h-[150px] rounded-xl transition-all resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl h-14 text-base font-semibold shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all hover:scale-[1.02] mt-2 group disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
