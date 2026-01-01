"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Property Management System",
        category: "Web",
        description: "A comprehensive Next.js application (Admin, Employee, Team Leader dashboards, Amharic translations).",
        tags: ["Next.js", "Node.js", "Firebase", "MongoDB", "MERN"],
        image: "/woldsh.png", // Placeholder
        github: "https://github.com/woldsh",
        demo: "https://property-management-system-t4rq.vercel.app/",
    },
    {
        id: 2,
        title: "Fitness Tracker App",
        category: "Mobile",
        description: "Mobile application for tracking workouts and nutrition with real-time stats.",
        tags: ["React Native", "Expo", "Firebase", "Redux"],
        image: "/fitness-tracker.png",
        github: "https://github.com/woldsh",
        demo: "#",
    },
    {
        id: 3,
        title: "Social Media Platform",
        category: "Web",
        description: "Real-time social network with chat, posts, and notifications.",
        tags: ["MERN Stack", "Socket.io", "Redux Toolkit"],
        image: "/social-media.png",
        github: "https://github.com/woldsh",
        demo: "#",
    },
    {
        id: 4,
        title: "Food Delivery App",
        category: "Mobile",
        description: "User-friendly app for ordering food with live tracking and payments.",
        tags: ["React Native", "Google Maps API", "Stripe"],
        image: "/food-delivery.png",
        github: "https://github.com/woldsh",
        demo: "#",
    },
];

const categories = ["All", "Web", "Mobile"];

import { Tilt } from "react-tilt";

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section id="projects" className="w-full py-20 px-4 flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[#030014]">
                <div className="absolute top-0 w-full h-full z-[1] bg-[url('https://ui.aceternity.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-grid.a6442654.svg&w=3840&q=75')] bg-cover opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-text from-purple-500 to-cyan-500 mb-4 drop-shadow-lg shadow-purple-500/50">Featured Projects</h2>
                    <p className="text-gray-400">Comparing Web and Mobile Excellences.</p>
                </motion.div>

                {/* Filters */}
                <div className="flex gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full border transition-all ${activeCategory === category
                                ? "bg-[#7042f8] border-[#7042f8] text-white shadow-lg shadow-[#7042f8]/40"
                                : "bg-transparent border-[#2A0E61] text-gray-400 hover:text-white hover:border-[#7042f8]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Tilt options={defaultOptions} className="h-full">
                                    <div className="group relative rounded-2xl border border-[#2A0E61] bg-[#111] overflow-hidden hover:border-[#7042f8] transition-colors h-full flex flex-col items-start justify-start cursor-pointer shadow-lg shadow-[#2A0E61]/20 hover:shadow-[#7042f8]/50">
                                        {/* Image Placeholder */}
                                        <div className="relative h-48 w-full bg-[#1A1A2E] overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60 z-10" />
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="p-6 relative z-20 w-full">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-[#7042f8] text-sm font-medium border border-[#7042f8]/30 px-3 py-1 rounded-full">
                                                    {project.category}
                                                </span>
                                                <div className="flex gap-3">
                                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                                                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7042f8] transition-colors">{project.title}</h3>
                                            <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-xs text-gray-500 bg-[#030014] px-2 py-1 rounded border border-[#2A0E61]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
