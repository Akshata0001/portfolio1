import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Shield } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-12 relative text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Statement */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white text-sm font-display tracking-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              Designed & Built with passion for technology and cybersecurity.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
              aria-label="Email Akshata Metri"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © 2026 {PORTFOLIO_DATA.personal.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>AIET CSE · 3rd Year</span>
            <span aria-hidden="true">·</span>
            <span>CGPA: 8.1</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Available for Internships</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
