import React, { useState } from "react";
import { Shield, ChevronRight, Terminal, Network, Cpu, Lock, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA, JourneyMilestone } from "../data/portfolioData";

export const CybersecurityJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(5); // Default to CTF or Cybersecurity

  const milestones = PORTFOLIO_DATA.journeyMilestones;
  const currentMilestone = milestones.find((m) => m.step === activeStep) || milestones[0];

  return (
    <section id="journey" className="py-24 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Learning Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            My Cybersecurity Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed italic max-w-2xl mx-auto">
            "{PORTFOLIO_DATA.personal.journeyStatement}"
          </p>
        </div>

        {/* Visual Roadmap Stepper Bar */}
        <div className="mb-12">
          {/* Desktop & Tablet Horizontal Roadmap */}
          <div className="hidden md:flex items-center justify-between relative">
            {/* Background connecting line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

            {milestones.map((milestone) => {
              const isSelected = activeStep === milestone.step;
              const isPast = activeStep > milestone.step;

              return (
                <button
                  key={milestone.step}
                  onClick={() => setActiveStep(milestone.step)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20 scale-110 shadow-lg shadow-emerald-500/30"
                        : isPast
                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                        : "bg-[#0b101c] text-slate-400 border border-slate-800 hover:border-slate-600"
                    }`}
                  >
                    0{milestone.step}
                  </div>
                  <span
                    className={`mt-2 text-xs font-mono transition-colors text-center whitespace-nowrap ${
                      isSelected
                        ? "text-emerald-300 font-semibold"
                        : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {milestone.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Horizontal Scrollable Roadmap */}
          <div className="md:hidden flex items-center gap-3 overflow-x-auto pb-4">
            {milestones.map((milestone) => {
              const isSelected = activeStep === milestone.step;
              return (
                <button
                  key={milestone.step}
                  onClick={() => setActiveStep(milestone.step)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap border transition-all flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold"
                      : "bg-[#0b101c] border-slate-800 text-slate-400"
                  }`}
                >
                  <span>0{milestone.step}.</span>
                  <span>{milestone.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Deep-Dive Card */}
        <div className="rounded-2xl bg-[#0c1220] border border-emerald-500/30 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4 mb-6">
            <div>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span>MILESTONE STAGE 0{currentMilestone.step} OF 0{milestones.length}</span>
                <span>·</span>
                <span className="text-cyan-400">{currentMilestone.focus}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                {currentMilestone.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                {currentMilestone.status === "completed" ? "Mastered" : "Active Focus"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                Practical Labs & Applied Context
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {currentMilestone.handsOnDetails}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3 bg-[#080d18] p-5 rounded-xl border border-slate-800/80">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                Key Skills Developed
              </h4>
              <div className="space-y-2">
                {currentMilestone.skillsLearned.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stepper Navigation Controls */}
          <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <button
              disabled={activeStep === 1}
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                activeStep === 1
                  ? "border-slate-800 text-slate-600 cursor-not-allowed"
                  : "border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              ← Previous Step
            </button>

            <span className="text-slate-500">
              Step {activeStep} of {milestones.length}
            </span>

            <button
              disabled={activeStep === milestones.length}
              onClick={() => setActiveStep((prev) => Math.min(milestones.length, prev + 1))}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                activeStep === milestones.length
                  ? "border-slate-800 text-slate-600 cursor-not-allowed"
                  : "border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
