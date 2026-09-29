import React from "react";
import { Github, ExternalLink, Code2, ArrowUpRight, CheckCircle2, Terminal as TerminalIcon } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80 bg-[#080c17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Practical software engineering projects spanning object-oriented Java applications, Python data validation utilities, and relational database systems.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>github.com/Akshata0001</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Projects 3-in-a-row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0b101c] border border-slate-800/90 hover:border-emerald-500/40 p-6 sm:p-7 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Editorial Index & Technology Kicker */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <span className="text-3xl font-extrabold font-mono text-slate-600 group-hover:text-emerald-400/80 transition-colors">
                    {project.number}
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-mono font-medium text-emerald-400 block">
                      {project.technology}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Production Prototype
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white font-display group-hover:text-emerald-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Features:
                  </div>
                  {project.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
