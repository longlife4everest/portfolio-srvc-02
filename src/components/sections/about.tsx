"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
    {
        type: "education",
        date: "2022 - Present",
        title: "Bachelor of Science in Computer Science",
        subtitle: "University of Technology",
        description: "Specializing in Software Engineering and Artificial Intelligence. Relevant coursework: Data Structures, Algorithms, Distributed Systems, Web Development.",
    },
    {
        type: "work",
        date: "Summer 2024",
        title: "Software Engineering Intern",
        subtitle: "Tech Solutions Inc.",
        description: "Developed and deployed a full-stack internal dashboard using React and Node.js. Reduced data retrieval times by 30% through database query optimization.",
    },
    {
        type: "work",
        date: "Aug 2023 - May 2024",
        title: "Undergraduate Teaching Assistant",
        subtitle: "Department of Computer Science",
        description: "Mentored 40+ students in 'Intro to Web Development'. Held weekly office hours and graded coding assignments for React and JavaScript.",
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-32 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                        Academic & <span className="text-[var(--primary)]">Professional</span> Journey
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent mx-auto opacity-50"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >

                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0B192C] border-2 border-[var(--primary)] rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(0,229,255,0.3)] hidden md:flex">
                                    {item.type === "education" ? (
                                        <GraduationCap className="text-[var(--primary)] w-5 h-5" />
                                    ) : (
                                        <Briefcase className="text-[var(--primary)] w-5 h-5" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="flex items-center gap-4 mb-4 md:hidden">
                                            {item.type === "education" ? (
                                                <GraduationCap className="text-[var(--primary)] w-6 h-6" />
                                            ) : (
                                                <Briefcase className="text-[var(--primary)] w-6 h-6" />
                                            )}
                                            <span className="tech-mono text-sm text-[var(--primary)]">{item.date}</span>
                                        </div>

                                        <span className="hidden md:block tech-mono text-sm text-[var(--primary)] mb-4">{item.date}</span>

                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <h4 className="text-lg font-medium text-white/70 mb-6">{item.subtitle}</h4>
                                        <p className="text-white/50 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
