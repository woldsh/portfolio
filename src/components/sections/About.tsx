"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

import Image from "next/image";

export function About() {
    return (
        <section id="about" className="w-full py-20 px-4 flex justify-center bg-slate-950 relative">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* Left: Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                    <div className="relative h-[400px] w-full rounded-2xl bg-[#1A1A2E] overflow-hidden border border-[#2A0E61] flex items-center justify-center">
                        <Image src="/wol8.png" alt="Woldemariam Amare" fill className="object-cover" />
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
                        About Me
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        I am Woldemariam Amare, a passionate Full Stack Developer with experience in building scalable web and mobile applications using the MERN stack.
                    </p>
                    <p className="text-gray-400 mb-8">
                        I have completed my certification from Udacity and specialize in Creating seamless user experiences. I built a comprehensive Property Management System using Next.js, Firebase, and Node.js.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#2A0E61]/20 border border-[#2A0E61]">
                            <Briefcase className="w-8 h-8 text-[#7042f8]" />
                            <div>
                                <h4 className="font-bold text-white">Experience</h4>
                                <p className="text-sm text-gray-400">Full Stack & Mobile</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#2A0E61]/20 border border-[#2A0E61]">
                            <GraduationCap className="w-8 h-8 text-cyan-500" />
                            <div>
                                <h4 className="font-bold text-white">Education</h4>
                                <p className="text-sm text-gray-400">Udacity Certified</p>
                                <a
                                    href="/udacity-certificate.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-[#7042f8] hover:underline mt-1 inline-block"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
