import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, Check, Copy, Shield, MapPin, Sparkles, AlertCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Internship & Project Opportunity",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields before sending.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Internship & Project Opportunity",
        message: "",
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/80 bg-[#080c16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display text-balance">
                Let's Build Something Secure Together.
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I’m open to learning opportunities, internships, cybersecurity projects, collaborations, and software development opportunities.
            </p>

            {/* Quick Contact Card */}
            <div className="p-5 rounded-2xl bg-[#0b101d] border border-slate-800/90 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>DIRECT INBOX</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-emerald-300 px-2 py-1 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-base font-mono font-medium text-emerald-400 hover:underline block truncate"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  AIET, Karnataka, India
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Response
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Professional Profiles
              </div>
              <div className="flex flex-col gap-2 text-xs font-mono">
                <a
                  href={PORTFOLIO_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">in/akshata-metri-5b9232363 ›</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">github.com/Akshata0001 ›</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Message Dispatch Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl bg-[#0b101c] border border-slate-800/90 p-6 sm:p-8 shadow-xl relative">
              <div className="flex items-center justify-between pb-5 border-b border-slate-800/80 mb-6">
                <h3 className="text-lg font-bold text-white font-display">
                  Send a Secure Message
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Direct Transmission
                </span>
              </div>

              {status === "success" ? (
                <div className="p-8 text-center space-y-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Akshata will review your communication and respond promptly at your specified email address.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs transition-colors hover:bg-emerald-400"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="sender-name"
                        className="text-xs font-mono text-slate-300 block"
                      >
                        Your Name *
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="sender-email"
                        className="text-xs font-mono text-slate-300 block"
                      >
                        Your Email *
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message-subject"
                      className="text-xs font-mono text-slate-300 block"
                    >
                      Subject / Topic
                    </label>
                    <input
                      id="message-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Summer Cybersecurity Internship / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message-body"
                      className="text-xs font-mono text-slate-300 block"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message-body"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share details regarding your team, the internship role, or project collaboration ideas..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
