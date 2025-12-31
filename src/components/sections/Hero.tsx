"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section id="hero" className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden bg-slate-950 py-20">

            {/* Background Gradients & Grid */}
            <div className="absolute inset-0 w-full h-full bg-[#030014]">
                <div className="absolute top-0 w-full h-full z-[1] bg-[url('https://ui.aceternity.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-grid.a6442654.svg&w=3840&q=75')] bg-cover opacity-20"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="absolute top-0 w-full h-full z-[5] bg-gradient-to-t from-[#030014] via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative z-[10] flex flex-col items-center justify-center max-w-[1200px] gap-6 px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-2 border border-[#7042f8]/50 rounded-full glass"
                >
                    <span className="text-gray-300 text-sm font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for Freelance & Full-time
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Digital Experiences</span>
                    <br /> That Matters
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-400 max-w-[600px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Hi, I&apos;m Woldemariam Amare. A Full Stack Web & Mobile Developer specializing in the MERN stack, Next.js, and React Native. I turn ideas into high-performance applications.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        href="#projects"
                        className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                        Contact Me
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
