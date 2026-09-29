import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Shield, CheckCircle2, ChevronRight, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system" | "success" | "error";
  text: string;
}

export const CyberTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [copiedFlag, setCopiedFlag] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "AIET SECURE TERMINAL v2.6 [Authorized Access Session]",
    },
    {
      id: "init-2",
      type: "system",
      text: "Type 'help' or click presets below to inspect cybersecurity audit records.",
    },
    {
      id: "init-3",
      type: "output",
      text: "Akshata Sanganna Metri — 3rd Year B.E. CSE | AIET | CGPA: 8.1",
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [history, isOpen]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: "input", text: rawCmd },
    ];

    if (!cmd) {
      setHistory(newLines);
      return;
    }

    if (cmd === "clear") {
      setHistory([
        {
          id: Date.now().toString(),
          type: "system",
          text: "Terminal cleared. Type 'help' for available commands.",
        },
      ]);
      setInputVal("");
      return;
    }

    if (cmd === "help") {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: `AVAILABLE COMMANDS:
  whoami         -> Student profile, institution & verified CGPA
  skills         -> Cybersecurity, networking, and programming competencies
  projects       -> Summary of portfolio repositories
  nmap           -> Run simulated vulnerability port audit on localhost
  cat quote.txt  -> Output student core philosophy
  ctf-flag       -> Inspect Agamya CTF Finalist challenge token
  education      -> Academic milestones at AIET
  clear          -> Reset terminal screen`,
      });
    } else if (cmd === "whoami") {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: `IDENTIFICATION RECORD:
  Name       : ${PORTFOLIO_DATA.personal.fullName}
  Affiliation: ${PORTFOLIO_DATA.personal.college}
  Degree     : ${PORTFOLIO_DATA.personal.degree} (${PORTFOLIO_DATA.personal.currentYear})
  Academic   : CGPA ${PORTFOLIO_DATA.personal.cgpa} / 10.0
  Roles      : ${PORTFOLIO_DATA.personal.tagline}
  Status     : ${PORTFOLIO_DATA.personal.status}`,
      });
    } else if (cmd === "skills") {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: `KEY COMPETENCIES:
  • Cybersecurity : Fundamentals, Network Security, Ethical Hacking, CTF Competitions
  • Networking    : OSI 7-Layer, TCP/IP, Nmap Port Auditing, Wireshark, Subnetting
  • Programming   : Java (OOP & Collections), Python (Data Pipelines), SQL (3NF DBMS)
  • Tools/OS      : Linux CLI & Permissions, Git & GitHub, Ebox Agile Practice`,
      });
    } else if (cmd === "projects") {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: `VERIFIED REPOSITORIES:
  [01] Hostel Management System               (Java · OOP · State Storage)
  [02] Py.Medio                               (Python · Data Parsing · Health Records)
  [03] Cyber Crime Reporting & Tracking       (DBMS · SQL · 3NF Schema & Audit Trails)`,
      });
    } else if (cmd.startsWith("nmap")) {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "system",
        text: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-29 01:25 UTC
Nmap scan report for portfolio.akshata-metri.dev (127.0.0.1)
Host is up (0.00012s latency).
Not shown: 995 closed tcp ports (reset)

PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 9.3p1 (Key Authentication Only)
80/tcp   open  http        Nginx (Portfolio Interface v2.6)
443/tcp  open  ssl/https   Cloudflare TLSv1.3 AES-GCM
3306/tcp open  mysql       MySQL 8.0.35 (Cybercrime Incident DB)
8080/tcp open  http-proxy  Java JVM Service (Hostel Allocator Daemon)

Nmap done: 1 IP address (1 host up) scanned in 0.42 seconds. Status: SECURE.`,
      });
    } else if (cmd === "cat quote.txt" || cmd === "quote") {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "success",
        text: `"${PORTFOLIO_DATA.personal.quote}"`,
      });
    } else if (cmd === "ctf-flag" || cmd === "ctf" || cmd === "flag") {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "success",
        text: `[+] AGAMYA CYBERTECH CTF FINALIST TOKEN UNLOCKED:
    FLAG{4ksh4t4_cyber_curiosity_to_code_2026}
    Awarded for competitive problem solving in web exploitation, forensics & crypto!`,
      });
    } else if (cmd === "education") {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "output",
        text: `ACADEMIC PROFILE:
  Institution : ${PORTFOLIO_DATA.education.institution}
  Degree      : ${PORTFOLIO_DATA.education.degree}
  Period      : ${PORTFOLIO_DATA.education.period}
  Standing    : ${PORTFOLIO_DATA.education.currentYear}
  CGPA        : ${PORTFOLIO_DATA.education.cgpa}`,
      });
    } else {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: "error",
        text: `Command not recognized: '${rawCmd}'. Type 'help' to view the manual or try 'whoami' or 'nmap'.`,
      });
    }

    setHistory(newLines);
    setInputVal("");
  };

  const handlePreset = (preset: string) => {
    handleCommand(preset);
  };

  const copyFlag = () => {
    navigator.clipboard.writeText("FLAG{4ksh4t4_cyber_curiosity_to_code_2026}");
    setCopiedFlag(true);
    setTimeout(() => setCopiedFlag(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-emerald-500/20 bg-[#090d16]/90 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-300">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1422] border-b border-emerald-500/15">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-emerald-400">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>akshata@aiet-sec-lab:~</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE AUDIT CLI
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs font-mono px-2 py-0.5 rounded border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-colors"
          >
            {isOpen ? "Collapse" : "Expand CLI"}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[380px]" : "max-h-[160px]"
        } overflow-y-auto p-4 font-mono text-xs space-y-2`}
      >
        {history.map((line) => (
          <div key={line.id} className="leading-relaxed">
            {line.type === "input" && (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="text-slate-500">guest@portfolio:~$</span>
                <span>{line.text}</span>
              </div>
            )}
            {line.type === "system" && (
              <div className="text-cyan-400/90 whitespace-pre-wrap">{line.text}</div>
            )}
            {line.type === "output" && (
              <div className="text-slate-300 whitespace-pre-wrap">{line.text}</div>
            )}
            {line.type === "success" && (
              <div className="text-emerald-300 bg-emerald-950/30 border border-emerald-500/20 p-2 rounded whitespace-pre-wrap">
                {line.text}
              </div>
            )}
            {line.type === "error" && (
              <div className="text-rose-400 whitespace-pre-wrap">{line.text}</div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="flex items-center gap-2 px-4 py-2 bg-[#0c111c] border-t border-slate-800"
      >
        <span className="text-emerald-400 font-mono text-xs flex items-center gap-1 shrink-0">
          <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-400 hidden sm:inline">guest@portfolio:~$</span>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command ('help', 'nmap', 'whoami', 'skills', 'ctf-flag')..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-xs font-mono outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="px-2.5 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded transition-colors flex items-center gap-1"
        >
          <span>Run</span>
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </form>

      {/* Quick Action Presets (Zero dead clicks, instant feedback) */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-[#090d16] border-t border-slate-800/80 text-[11px] font-mono overflow-x-auto whitespace-nowrap">
        <span className="text-slate-500 text-[10px] uppercase tracking-wider mr-1">Presets:</span>
        {["whoami", "skills", "projects", "nmap -sV", "ctf-flag", "cat quote.txt"].map(
          (preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setIsOpen(true);
                handlePreset(preset);
              }}
              className="px-2 py-0.5 rounded bg-slate-800/70 hover:bg-emerald-950/60 border border-slate-700/60 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-colors"
            >
              ${preset}
            </button>
          )
        )}
      </div>
    </div>
  );
};
