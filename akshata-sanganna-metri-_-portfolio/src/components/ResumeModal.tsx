import React, { useEffect } from "react";
import { X, Printer, Download, FileText, CheckCircle2, Shield, Mail, Linkedin, Github, MapPin, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `=====================================================
${PORTFOLIO_DATA.personal.fullName}
Cybersecurity Enthusiast | Computer Science Student | Software Developer
=====================================================
Email: ${PORTFOLIO_DATA.personal.email}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedinUrl}
GitHub: ${PORTFOLIO_DATA.personal.githubUrl}
Location: ${PORTFOLIO_DATA.personal.location}

OBJECTIVE
-----------------------------------------------------
${PORTFOLIO_DATA.personal.shortBio}
Core Philosophy: "${PORTFOLIO_DATA.personal.quote}"

EDUCATION
-----------------------------------------------------
${PORTFOLIO_DATA.education.degree} (${PORTFOLIO_DATA.education.currentYear})
${PORTFOLIO_DATA.education.institution}
Period: ${PORTFOLIO_DATA.education.period}
Cumulative CGPA: ${PORTFOLIO_DATA.education.cgpa}

TECHNICAL SKILLS
-----------------------------------------------------
• Cybersecurity: Fundamentals, Network Security, Ethical Hacking Fundamentals, CTF / Security Challenges
• Networking: Computer Networking (OSI, TCP/IP, Subnetting, Protocols), Nmap
• Programming: Java (Core, OOP, Collections), Python, SQL (Relational DB Design)
• Tools & Platforms: Linux (CLI, Shell scripting, Permissions), Git & GitHub, Ebox

KEY PROJECTS
-----------------------------------------------------
1. Hostel Management System (Java)
   - Developed a Java-based system to manage hostel room allocation, student records, and fee tracking.
   - Features: Room allocation, Student management, Fee tracking, Record management, Object-oriented design.

2. Py.Medio (Python)
   - Built a Python application for managing and processing medical-related data with a simple user workflow.
   - Features: Data management, Data validation, Modular Python functions, Reliable record handling.

3. Cyber Crime Reporting and Tracking System (DBMS / SQL)
   - Designed a database-driven system to report, store, and track cyber crime complaints end to end.
   - Features: Complaint registration, Case tracking, Normalized SQL database, Status management, Report generation.

HONORS & ACHIEVEMENTS
-----------------------------------------------------
• 🏆 Agamya Cybertech CTF Finalist
• 🎓 Meta iOS Developer Certificate — Coursera
• 📜 Agile Project Management — Ebox
• 📚 Additional Coursera Coursework in Systems & Security
=====================================================`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Akshata_Sanganna_Metri_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c121e] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e18]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-base font-semibold text-white tracking-wide">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-slate-400">
                Akshata Sanganna Metri · B.E. Computer Science (CGPA: 8.1)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .TXT</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090d17]">
          <div
            id="printable-resume"
            className="max-w-3xl mx-auto bg-[#0d1322] border border-slate-800 rounded-xl p-8 sm:p-10 shadow-lg space-y-6 text-slate-200"
          >
            {/* Header Lockup */}
            <div className="border-b border-slate-800 pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                  {PORTFOLIO_DATA.personal.fullName}
                </h1>
                <p className="text-emerald-400 text-sm font-medium mt-1">
                  Cybersecurity Enthusiast · Computer Science Student · Software Developer
                </p>
                <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">
                  {PORTFOLIO_DATA.personal.shortBio}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-emerald-400" />
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3 h-3 text-cyan-400" />
                  linkedin.com/in/akshata-metri-5b9232363
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3 h-3 text-slate-300" />
                  github.com/Akshata0001
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  AIET, Karnataka, India
                </span>
              </div>
            </div>

            {/* Education */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-emerald-400 font-mono border-b border-slate-800/80 pb-1">
                Education
              </h2>
              <div className="flex justify-between items-start text-sm">
                <div>
                  <div className="font-semibold text-white">
                    {PORTFOLIO_DATA.education.degree}
                  </div>
                  <div className="text-xs text-slate-300">
                    {PORTFOLIO_DATA.education.institution}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {PORTFOLIO_DATA.education.currentYear} · Focus on Systems & Security
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded">
                    CGPA: {PORTFOLIO_DATA.personal.cgpa}
                  </span>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    {PORTFOLIO_DATA.education.period}
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-emerald-400 font-mono border-b border-slate-800/80 pb-1">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-semibold text-slate-200">Cybersecurity:</span>{" "}
                  <span className="text-slate-400">
                    Fundamentals, Network Security, Ethical Hacking Fundamentals, CTF / Security Challenges
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Networking:</span>{" "}
                  <span className="text-slate-400">
                    Computer Networking (OSI & TCP/IP), Subnetting, Protocols, Nmap
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Programming:</span>{" "}
                  <span className="text-slate-400">
                    Java (OOP, Collections, Architecture), Python (Data Pipelines), SQL (DBMS)
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Tools & Platforms:</span>{" "}
                  <span className="text-slate-400">
                    Linux (Bash, Process & Permissions), Git & GitHub, Ebox
                  </span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-4">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-emerald-400 font-mono border-b border-slate-800/80 pb-1">
                Selected Projects
              </h2>
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-white text-sm">
                      {proj.title}
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px]">
                      {proj.technology}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                    {proj.features.map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <span className="text-emerald-500">✓</span>
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Achievements & Certifications */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-emerald-400 font-mono border-b border-slate-800/80 pb-1">
                Achievements & Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PORTFOLIO_DATA.achievements.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 rounded bg-slate-800/40 border border-slate-800 flex items-start gap-2"
                  >
                    <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">{item.title}</div>
                      <div className="text-[11px] text-slate-400">{item.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#090e18] border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Official candidate CV preview for Akshata Sanganna Metri</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
