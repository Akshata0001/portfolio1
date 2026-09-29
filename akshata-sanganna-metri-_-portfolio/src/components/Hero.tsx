import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileText, Send, ShieldCheck, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { CyberTerminal } from "./CyberTerminal";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    "Cybersecurity Enthusiast",
    "Computer Science Student",
    "Software Developer",
    "Agamya CTF Finalist",
    "Network Security Explorer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          // Pause at complete word
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        // Deleting backward
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center cyber-grid"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Subtle Cyber Status Lead-in (Zero-pill text styling) */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4 tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PORTFOLIO CONSOLE</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-slate-400">{PORTFOLIO_DATA.personal.college}</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-cyan-400 font-semibold">CGPA {PORTFOLIO_DATA.personal.cgpa}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Core Identity & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display text-balance">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>

              {/* Dynamic Animated Role */}
              <div className="mt-3 flex items-center gap-1.5 text-base sm:text-xl font-mono text-emerald-400 h-8">
                <span>{displayText}</span>
                <span className="inline-block w-2 h-5 bg-emerald-400 animate-pulse" />
              </div>

              {/* Static sub-descriptor fallback for accessibility & SEO */}
              <p className="sr-only">
                {PORTFOLIO_DATA.personal.tagline}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl text-pretty">
              {PORTFOLIO_DATA.personal.shortBio}
            </p>

            {/* Unboxed Metadata row (Strict Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400 font-mono">
              <span className="text-slate-200">B.E. Computer Science</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-200">3rd Year</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-emerald-400 font-semibold">CGPA: 8.1</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-300">Karnataka, India</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center gap-2 whitespace-nowrap"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-lg bg-[#0d1424] hover:bg-[#121c32] border border-emerald-500/30 text-emerald-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Connect:
              </span>

              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                aria-label="Akshata Metri LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
                aria-label="Akshata Metri GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
                aria-label="Email Akshata Metri"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Cyber Terminal Widget */}
          <div className="lg:col-span-5 w-full">
            <CyberTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
