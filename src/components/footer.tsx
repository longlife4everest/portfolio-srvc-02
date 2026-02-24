"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0A192F] border-t border-white/5 py-8 mt-20 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm border-white/10 text-center md:text-left">
                    © {new Date().getFullYear()} Portfolio. Built with Next.js, Tailwind & Framer Motion.
                </p>
                <Button
                    onClick={scrollToTop}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-white transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                >
                    <ArrowUp className="w-4 h-4" />
                </Button>
            </div>
        </footer>
    );
}
