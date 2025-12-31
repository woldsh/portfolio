"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Contact() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formRef = useRef<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        // Get them from https://dashboard.emailjs.com/
        const SERVICE_ID = "service_w0y7bf8";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "Grlx92Ag50RrWUGcQ";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                toast.success("Message sent successfully!");
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e.target as any).reset();
            }, (error) => {
                console.error(error);
                toast.error("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="w-full py-20 px-4 flex justify-center bg-[#030014] relative">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Connect</h2>
                    <p className="text-gray-400 mb-8">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 group">
                            <div className="p-3 rounded-lg bg-[#2A0E61]/30 border border-[#7042f8]/30 group-hover:border-[#7042f8] transition-colors">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Email</h4>
                                <a href="mailto:sonempire12@gmail.com" className="text-gray-400 hover:text-[#7042f8] transition-colors">
                                    sonempire12@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <Phone className="w-6 h-6 text-[#7042f8]" />
                            <a href="https://www.linkedin.com/in/woldemariam-amare-759323392" target="_blank" className="hover:text-white transition-colors underline decoration-[#7042f8]">Connect on LinkedIn</a>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <MapPin className="w-6 h-6 text-[#7042f8]" />
                            <a href="https://github.com/woldsh" target="_blank" className="hover:text-white transition-colors underline decoration-[#7042f8]">github.com/woldsh</a>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400 text-sm">Your Name</label>
                        <input type="text" name="user_name" required className="bg-[#111] border border-[#2A0E61] rounded-lg p-3 text-white focus:border-[#7042f8] outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400 text-sm">Your Email</label>
                        <input type="email" name="user_email" required className="bg-[#111] border border-[#2A0E61] rounded-lg p-3 text-white focus:border-[#7042f8] outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-400 text-sm">Message</label>
                        <textarea name="message" required rows={5} className="bg-[#111] border border-[#2A0E61] rounded-lg p-3 text-white focus:border-[#7042f8] outline-none transition-colors" placeholder="Hello..." />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="bg-[#7042f8] text-white font-bold py-3 rounded-lg hover:bg-[#5c32d6] transition-colors mt-2 disabled:opacity-50">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>

            </div>
        </section>
    );
}
