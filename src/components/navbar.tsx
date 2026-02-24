"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple active section detection
            const sections = navLinks.map((link) => link.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 200) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B1F3B]/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent py-4"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 max-w-7xl h-16 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter text-white glow hover:text-cyan-400 transition-colors">
                    PORTFOLIO.
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className={`text-sm font-medium transition-colors hover:text-cyan-400 ${activeSection === link.href.substring(1) ? "text-cyan-400" : "text-slate-300"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button onClick={(e: any) => handleScrollTo(e, "#contact")} className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all hover:scale-105">
                        Hire Me
                    </Button>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0F294D] border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className={`text-sm font-medium py-2 transition-colors ${activeSection === link.href.substring(1) ? "text-cyan-400" : "text-slate-300"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
