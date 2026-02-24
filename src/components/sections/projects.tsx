"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
    {
        title: "Eco-Track Analytics",
        description: "A comprehensive dashboard for tracking and visualizing environmental sustainability metrics. Built for a university hackathon.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
        tags: ["React", "Python", "Data Viz", "HACKATHON WINNER"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Distributed File System",
        description: "A custom distributed file system built from scratch implementing Raft consensus for fault tolerance and high availability.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
        tags: ["Go", "Distributed Systems", "Academic Research"],
        githubUrl: "#"
    },
    {
        title: "Smart Dorm Automation",
        description: "IoT system integrating Raspberry Pi, sensors, and a React Native app to automate lighting and temperature in student dorms.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2940&auto=format&fit=crop",
        tags: ["React Native", "IoT", "Node.js", "Personal Project"],
        liveUrl: "#",
        githubUrl: "#"
    }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: "1000px" }}
            className="h-full"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                className="group rounded-2xl overflow-hidden glass-card flex flex-col h-full bg-[#0B192C]/80 relative preserve-3d"
            >
                {/* Project Image Box */}
                <div className="h-56 w-full overflow-hidden relative" style={{ transform: "translateZ(20px)" }}>
                    <div className="absolute inset-0 bg-[#0B192C]/50 saturate-50 group-hover:saturate-100 group-hover:bg-transparent transition-all duration-500 z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0B192C] to-transparent z-10" />
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-1 relative z-20 -mt-8" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className={`text-[10px] tech-mono px-2 py-1 rounded border border-white/10 ${tag.includes('WINNER') ? 'bg-[var(--primary)]/20 text-[var(--primary)] border-[var(--primary)]/50' : 'bg-white/5 text-white/60'}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-white/60 font-light mb-8 flex-1 text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                className="text-white hover:text-[var(--primary)] transition-colors flex items-center gap-2 text-sm font-medium"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <ExternalLink size={18} /> Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <Github size={18} /> Source Code
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">

                <motion.div
                    className="mb-16 md:mb-24 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                        <FolderGit2 className="text-[var(--primary)] w-4 h-4" />
                        <span className="text-sm tech-mono text-white/70">ARCHIVE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">Projects</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl font-light text-lg">
                        A selection of academic research, hackathon builds, and independent side projects showcasing my technical growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
