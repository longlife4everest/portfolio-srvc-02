"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "01. Home", href: "#hero" },
    { name: "02. Profile", href: "#about" },
    { name: "03. Work", href: "#projects" },
    { name: "04. Connect", href: "#contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((link) => link.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 300) {
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
        elem?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
            <nav className="flex items-center gap-2 p-2 rounded-full glass bg-black/40 border-white/10 shadow-2xl backdrop-blur-2xl">
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className={`relative px-5 py-2.5 rounded-full text-xs tech-mono transition-all duration-300 ${isActive ? "text-black" : "text-white/50 hover:text-white"
                                }`}
                        >
                            <span className="relative z-10">{link.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 bg-white rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </a>
                    );
                })}
            </nav>
        </motion.div>
    );
}
