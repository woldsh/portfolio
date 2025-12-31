import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full glass-strong mt-20 py-8 text-center text-gray-300">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://github.com/woldsh" target="_blank" rel="noopener noreferrer" className="hover:text-[#7042f8] transition-colors">
                    <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#7042f8] transition-colors">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:sonempire12@gmail.com" className="hover:text-[#7042f8] transition-colors">
                    <Mail className="w-6 h-6" />
                </a>
            </div>
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Woldemariam Amare. All rights reserved.
            </p>
        </footer>
    );
}
