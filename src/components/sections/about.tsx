"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js",
    "PostgreSQL", "Prisma", "GraphQL", "Docker", "AWS", "Figma"
];

const timeline = [
    {
        year: "2023 - Present",
        role: "Senior Frontend Engineer",
        company: "Tech Innovators Inc.",
        description: "Leading the development of a modern SaaS platform using Next.js and Tailwind CSS. Mentoring junior developers and establishing best practices."
    },
    {
        year: "2020 - 2023",
        role: "Full Stack Developer",
        company: "Digital Solutions Agency",
        description: "Built and delivered 20+ custom web applications for clients across various industries. Specialized in React and Node.js ecosystems."
    }
];

export function AboutSection() {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">About <span className="text-cyan-400">Me</span></h2>
                    <div className="w-20 h-1 bg-cyan-500 rounded-full glow"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Hello! Welcome to my digital space.</h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                            I am a passionate developer who focuses on writing clean, elegant, and efficient code. With a strong eye for design, I specialize in bridging the gap between design and engineering.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                            When I'm not coding, you'll find me exploring the latest tech trends, experimenting with new frameworks, or contributing to open-source projects.
                        </p>

                        <h4 className="text-xl font-medium text-white mb-4">Tech Arsenal</h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Badge variant="outline" className="glass text-slate-200 border-white/10 py-1.5 px-4 text-sm font-normal tracking-wide hover:border-cyan-400/50 hover:text-cyan-400 transition-colors">
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8">Experience</h3>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0F294D] group-hover:bg-cyan-950 group-hover:border-cyan-500/50 text-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10 glow">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M12 5.093l-4.524-.658L5.432 0 3.39 4.435.539 6.273A.256.256 0 00.58 6.74l3.524 1.761L3.05 12a.256.256 0 00.384.264l4.032-2.392 4.032 2.392a.256.256 0 00.384-.264l-1.054-3.499 3.524-1.761a.256.256 0 00-.041-.467z" /></svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass border-white/5 group-hover:border-cyan-500/30 transition-colors duration-300">
                                        <div className="flex flex-col mb-2">
                                            <span className="text-cyan-400 font-mono text-sm mb-1">{item.year}</span>
                                            <h4 className="text-xl font-bold text-white">{item.role}</h4>
                                            <span className="text-slate-400 text-sm">{item.company}</span>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed font-light">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
