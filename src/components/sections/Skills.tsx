"use client";

import { motion } from "framer-motion";
import { AppWindow, Smartphone, Server } from "lucide-react";

const skillsData = [
    {
        category: "Frontend",
        icon: <AppWindow className="w-8 h-8 text-cyan-500" />,
        skills: ["Next.js", "React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "TypeScript"],
    },
    {
        category: "Backend",
        icon: <Server className="w-8 h-8 text-purple-500" />,
        skills: ["Node.js", "Express", "MongoDB", "Firebase", "PostgreSQL"],
    },
    {
        category: "Mobile",
        icon: <Smartphone className="w-8 h-8 text-pink-500" />,
        skills: ["React Native", "Expo", "iOS", "Android"],
    },
];

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

export function Skills() {
    return (
        <section id="skills" className="w-full py-20 px-4 flex flex-col items-center justify-center relative bg-slate-950">
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-3xl z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center mb-12"
            >
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 drop-shadow-lg shadow-[#7042f8]/50">
                    Technical Proficiency
                </h2>
                <p className="text-gray-400 max-w-[600px]">
                    Crafting robust applications with modern technologies.
                </p>
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Tilt options={defaultOptions} className="h-full">
                            <div className="flex flex-col items-start p-6 rounded-2xl glass border border-[#2A0E61]/30 hover:bg-[#2A0E61]/10 transition-colors h-full cursor-pointer shadow-lg shadow-[#2A0E61]/20 hover:shadow-[#7042f8]/50">
                                <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm rounded-full border border-gray-700 bg-gray-900/50 text-gray-300 hover:text-white hover:border-[#7042f8] transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
