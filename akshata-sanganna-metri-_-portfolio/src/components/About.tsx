import React from "react";
import { Shield, GraduationCap, Award, Compass, Sparkles, CheckCircle2, Terminal as TerminalIcon, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const highlights = [
    { label: "Academic Standing", value: "3rd-Year B.E. at AIET" },
    { label: "Cumulative CGPA", value: "8.1 / 10.0" },
    { label: "Core Passion", value: "Cybersecurity & Defenses" },
    { label: "Systems Focus", value: "Networking & Ethical Hacking" },
    { label: "Engineering Stack", value: "Java, Python & SQL" },
    { label: "Competition Record", value: "Agamya CTF Finalist" },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Profile Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            About Me
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Computer Science & Engineering student at Alvas Institute of Engineering and Technology, bridging software systems and digital security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                I am a motivated <strong className="text-white">3rd-year Computer Science and Engineering student</strong> at <strong className="text-emerald-300">Alvas Institute of Engineering and Technology (AIET)</strong> with a strong academic foundation reflected in my <strong className="text-emerald-400 font-mono">CGPA of 8.1</strong>.
              </p>
              <p>
                My passion lies at the intersection of <strong className="text-white">cybersecurity</strong>, <strong className="text-white">computer networking</strong>, and <strong className="text-white">software development</strong>. From dissecting packet headers in Wireshark and mapping network topologies with Nmap to writing object-oriented Java solutions and architecting normalized relational databases, I strive to understand how systems operate under the hood—and how to make them resilient against threats.
              </p>
              <p>
                As an active <strong className="text-emerald-300">CTF competitor</strong> and <strong className="text-white">Agamya Cybertech CTF Finalist</strong>, I thrive on hands-on problem solving, discovering attack surfaces, and developing defensive countermeasures. I believe the most effective software developers are those who build with a security-first mindset.
              </p>
            </div>

            {/* Core Traits List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#0c1220] border border-slate-800">
                <div className="text-emerald-400 font-mono font-semibold flex items-center gap-1.5 mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Cybersecurity Enthusiast</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Exploring defensive architectures, threat modeling, and vulnerability remediation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1220] border border-slate-800">
                <div className="text-cyan-400 font-mono font-semibold flex items-center gap-1.5 mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Networking Learner</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Hands-on analysis of OSI/TCP layers, subnets, packet flow, and service protocols.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1220] border border-slate-800">
                <div className="text-amber-400 font-mono font-semibold flex items-center gap-1.5 mb-1">
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>Ethical Hacking Fundamentals</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Understanding attack methodologies, reconnaissance techniques, and OWASP Top 10 vulnerabilities.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1220] border border-slate-800">
                <div className="text-purple-400 font-mono font-semibold flex items-center gap-1.5 mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Continuous Learner</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Consistently upskilling through Coursera coursework, Ebox practical challenges, and CTFs.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Complete Verified Academic Record</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-[#0b101c] border border-slate-800 p-6 sm:p-7 shadow-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-5 border-b border-slate-800/80">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  CANDIDATE DOSSIER
                </span>
                <span>ID: AIET-CSE-2026</span>
              </div>

              {/* Candidate Credentials Header (No Photo) */}
              <div className="pt-6">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-base shadow-inner shrink-0">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      Akshata Sanganna Metri
                    </h3>
                    <div className="text-xs text-emerald-400 font-mono mt-0.5">
                      AIET CSE · 3rd Year · CGPA 8.1
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 pl-1 font-mono">
                  Alvas Institute of Engineering and Technology · Karnataka, India
                </div>
              </div>

              {/* Prominent Profile Card Quote */}
              <div className="my-6 p-4 rounded-xl bg-[#0f172a]/90 border-l-2 border-emerald-400 border-r border-t border-b border-slate-800/80">
                <p className="text-xs sm:text-sm italic font-medium text-emerald-200/90 leading-relaxed">
                  "{PORTFOLIO_DATA.personal.quote}"
                </p>
                <span className="block mt-1 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  — Core Engineering Philosophy
                </span>
              </div>

              {/* Fact Table */}
              <div className="space-y-2.5 text-xs">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-1.5 border-b border-slate-800/60 last:border-0"
                  >
                    <span className="text-slate-400">{item.label}</span>
                    <span className="font-mono font-medium text-slate-200">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
