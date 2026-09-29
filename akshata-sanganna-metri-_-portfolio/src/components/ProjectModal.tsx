import React, { useState, useEffect } from "react";
import { X, Github, ExternalLink, Code2, Layers, CheckCircle2, Copy, Check } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyCode = () => {
    if (project.codePreview) {
      navigator.clipboard.writeText(project.codePreview.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c121e] border border-emerald-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-[#090e18]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
              <span>PROJECT {project.number}</span>
              <span>·</span>
              <span className="text-cyan-400">{project.technology}</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
              System Overview
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-3">
              Core Architectural Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture bullet points */}
          {project.architecture && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                Technical Implementation Highlights
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Preview */}
          {project.codePreview && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{project.codePreview.filename}</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-emerald-300 transition-colors px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-xl bg-[#070b13] border border-slate-800 p-4 font-mono text-xs text-emerald-300/90 overflow-x-auto leading-relaxed">
                <pre>{project.codePreview.code}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 bg-[#090e18] border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
