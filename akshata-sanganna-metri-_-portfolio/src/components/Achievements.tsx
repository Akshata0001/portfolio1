import React, { useState } from "react";
import { Trophy, Award, GraduationCap, BookOpen, CheckCircle2, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Achievement } from "../data/portfolioData";

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const getAchievementIcon = (id: string) => {
    switch (id) {
      case "agamya-ctf":
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case "meta-ios":
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case "agile-ebox":
        return <Award className="w-6 h-6 text-emerald-400" />;
      default:
        return <BookOpen className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Key Achievements
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Competitive CTF recognitions and verified credentials demonstrating hands-on security skills and iterative software engineering standards.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.achievements.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
              className="rounded-2xl bg-[#0b101d] border border-slate-800/90 hover:border-emerald-500/40 p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getAchievementIcon(item.id)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-1">
                  {item.issuer}
                </div>
                <h3 className="text-lg font-bold text-white font-display group-hover:text-emerald-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 line-clamp-1">
                  Takeaway: {item.keyTakeaway}
                </span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform ml-2 shrink-0">
                  Inspect ›
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="w-full max-w-lg bg-[#0d1322] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                {getAchievementIcon(selectedAchievement.id)}
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {selectedAchievement.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    {selectedAchievement.issuer}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedAchievement(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <p className="leading-relaxed">{selectedAchievement.description}</p>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-mono text-xs text-emerald-400 font-semibold">
                  Competency Verified
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {selectedAchievement.keyTakeaway}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Official Credential Verified
                </span>
                <span>Type: {selectedAchievement.type}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="px-4 py-2 text-xs font-mono rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
