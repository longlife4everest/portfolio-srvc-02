"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "#projects" }
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
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-max"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
            <nav className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-[#0B192C]/80 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "text-[#0B192C]" : "text-slate-300 hover:text-white"
                                }`}
                        >
                            <span className="relative z-10">{link.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 bg-[#00e5ff] rounded-full shadow-[0_0_15px_rgba(0,229,255,0.4)]"
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
