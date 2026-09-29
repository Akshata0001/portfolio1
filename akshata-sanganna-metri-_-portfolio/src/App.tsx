import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { NetworkBackground } from "./components/NetworkBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { CybersecurityJourney } from "./components/CybersecurityJourney";
import { Achievements } from "./components/Achievements";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";
import { ProjectModal } from "./components/ProjectModal";
import { Project } from "./data/portfolioData";
import { Shield } from "lucide-react";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant brief system boot check for cybersecurity aesthetic (resolves in 450ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Brief Subtle Initializer Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#070a12] flex flex-col items-center justify-center font-mono text-xs text-emerald-400">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-6 h-6 animate-pulse" />
            <span className="font-bold tracking-widest text-sm">AKSHATA METRI // SEC_PORTAL</span>
          </div>
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400 animate-pulse w-full" />
          </div>
          <span className="text-[11px] text-slate-400 mt-2">INITIALIZING VERIFIED DOSSIER...</span>
        </div>
      )}

      {/* Dynamic Network Canvas Background */}
      <NetworkBackground />

      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <CybersecurityJourney />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
