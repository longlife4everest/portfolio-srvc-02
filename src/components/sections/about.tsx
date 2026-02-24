"use client";

import { motion } from "framer-motion";

const skills = [
    "NEXT_JS", "REACT", "TYPESCRIPT", "TAILWIND_CSS", "FRAMER_MOTION", "NODE_JS",
    "POSTGRESQL", "PRISMA", "GRAPHQL", "DOCKER", "AWS", "FIGMA"
];

export function AboutSection() {
    return (
        <section id="about" className="py-32 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-[90rem]">

                {/* Editorial Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

                    {/* Section Heading (Left Column) */}
                    <div className="md:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <h2 className="text-sm tech-mono mb-4 text-white/50">02 // PROFILE</h2>
                        </motion.div>
                    </div>

                    {/* Main Content (Middle/Right Columns) */}
                    <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                                Architecting systems at the intersection of design and engineering.
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-6 font-light">
                                I build digital experiences that are not only blazingly fast but deeply engaging. Moving beyond standard templates to create bespoke, award-winning interfaces.
                            </p>

                            <div className="mt-16 border-t border-white/10 pt-8">
                                <p className="tech-mono mb-4 text-white">CORE_STACK /</p>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="text-xs font-mono text-white/40 hover:text-white transition-colors cursor-default"
                                        >
                                            {skill} {index < skills.length - 1 && "—"}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Giant Stat Block */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col justify-center lg:items-end"
                        >
                            <div className="relative">
                                <span className="text-[15rem] leading-none font-bold text-white/5 select-none absolute -top-20 -left-10 z-0">
                                    5+
                                </span>
                                <div className="relative z-10 glass p-8 border border-white/10 bg-black/50 backdrop-blur-xl max-w-sm">
                                    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                            <span className="tech-mono text-white">YR</span>
                                        </div>
                                        <div>
                                            <h4 className="text-4xl font-bold text-white">05</h4>
                                            <p className="tech-mono text-[10px]">YEARS_EXPERIENCE</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
                                        <h4 className="text-4xl font-bold text-white">20+</h4>
                                        <p className="tech-mono text-[10px]">PROJECTS_DEPLOYED</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h4 className="text-4xl font-bold text-white">100%</h4>
                                        <p className="tech-mono text-[10px]">CLIENT_SATISFACTION</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
