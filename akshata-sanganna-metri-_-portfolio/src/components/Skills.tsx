import React, { useState } from "react";
import { Shield, Network, Code, Cpu, Terminal as TerminalIcon, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { PORTFOLIO_DATA, SkillCategory } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case "Network":
        return <Network className="w-5 h-5 text-cyan-400" />;
      case "Code":
        return <Code className="w-5 h-5 text-amber-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  const categoriesToDisplay =
    selectedCategoryIndex !== null
      ? [PORTFOLIO_DATA.skillsCategories[selectedCategoryIndex]]
      : PORTFOLIO_DATA.skillsCategories;

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Skills & Expertise
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Categorized competencies across defensive security, active networking, core programming languages, and industry developer tools.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono">
            <button
              onClick={() => setSelectedCategoryIndex(null)}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedCategoryIndex === null
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All Categories
            </button>
            {PORTFOLIO_DATA.skillsCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategoryIndex === idx
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoriesToDisplay.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-[#0a0f1d] border border-slate-800/90 p-6 sm:p-7 shadow-lg hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">{category.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {category.skills.length} modules
                  </span>
                </div>

                {/* Skills List within Category */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3.5 rounded-xl bg-[#070b14]/70 hover:bg-[#0d1424] border border-slate-800/60 hover:border-emerald-500/30 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover:scale-125 transition-transform" />
                          <h4 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed pl-3.5 mb-2.5">
                        {skill.description}
                      </p>

                      {/* Clean Unboxed Metadata Tags (Zero-Pill rule) */}
                      <div className="pl-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-500">
                        {skill.tags.map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span className="text-slate-400 hover:text-slate-300 transition-colors">
                              {tag}
                            </span>
                            {tIdx < skill.tags.length - 1 && (
                              <span className="text-slate-700" aria-hidden="true">
                                /
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
