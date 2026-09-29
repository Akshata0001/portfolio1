import React from "react";
import { GraduationCap, Calendar, Award, CheckCircle2, BookOpen, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Education
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Formal technical education building foundational principles in computation, network protocols, systems architecture, and security.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl rounded-2xl bg-[#0b101c] border border-slate-800/90 p-6 sm:p-9 shadow-xl relative overflow-hidden">
          {/* Subtle accent border */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-emerald-600" />

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80 pl-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>UNDERGRADUATE PROGRAMME</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                {PORTFOLIO_DATA.education.degree}
              </h3>
              <div className="text-sm font-medium text-slate-300 mt-1">
                {PORTFOLIO_DATA.education.institution}
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {PORTFOLIO_DATA.education.period}
                </span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  Karnataka, India
                </span>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="inline-block px-3 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-mono text-sm font-bold shadow-lg">
                CGPA: {PORTFOLIO_DATA.personal.cgpa} / 10.0
              </div>
              <div className="text-xs font-mono text-cyan-400 mt-1.5">
                {PORTFOLIO_DATA.personal.currentYear}
              </div>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="pt-6 pl-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-3">
              Key Academic Pillars & Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PORTFOLIO_DATA.education.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
