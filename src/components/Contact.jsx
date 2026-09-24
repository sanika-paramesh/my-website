import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquareCode } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const { name, title, university, email, phone, github, linkedin } = portfolioData.personalInfo;
  
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end only submission simulation
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950/50 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
            Let's Build Something Meaningful
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">
            I'm always interested in learning, collaborating, exploring new technologies, and building practical solutions.
          </p>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full w-[60px] mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Direct Info & Quick CTAs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col gap-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-2">{title}</p>
                <p className="text-slate-400 text-xs font-medium">{university}</p>
              </div>

              {/* Info Details */}
              <div className="flex flex-col gap-4 border-t border-slate-900 pt-6 text-slate-300">
                <div className="flex items-center gap-3.5 text-sm">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-blue-400 rounded-xl">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${email}`} className="hover:text-blue-400 transition-colors">
                    {email}
                  </a>
                </div>

                <div className="flex items-center gap-3.5 text-sm">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-cyan-400 rounded-xl">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href={`tel:${phone}`} className="hover:text-cyan-400 transition-colors">
                    {phone}
                  </a>
                </div>

                <div className="flex items-center gap-3.5 text-sm">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-purple-400 rounded-xl">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Bangalore, India</span>
                </div>
              </div>

              {/* Quick Actions Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(59,130,246,0.2)]"
                >
                  <Mail className="w-4 h-4" /> Send Email
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-slate-700 hover:border-cyan-500/30 bg-slate-900/50 hover:bg-slate-900 text-slate-200 text-sm font-medium rounded-xl transition-all duration-300"
                >
                  <Phone className="w-4 h-4" /> Call Me
                </a>
              </div>

              {/* Social Channels (Using Commented Placeholders as requested) */}
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect:</span>
                {/* 
                  DEVELOPER NOTICE: 
                  To connect your real social links, change the href below from "#" to your actual URLs.
                  Example: href="https://github.com/sanikahp"
                */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 hover:bg-blue-500/10 border border-slate-800 hover:border-blue-500/30 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
                  aria-label="GitHub Profile Link"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {/* 
                  DEVELOPER NOTICE: 
                  To connect your real LinkedIn profile, change the href below from "#" to your actual URL.
                  Example: href="https://linkedin.com/in/sanikahp"
                */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 hover:bg-blue-500/10 border border-slate-800 hover:border-blue-500/30 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
                  aria-label="LinkedIn Profile Link"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Feedback Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquareCode className="w-5 h-5 text-blue-400" /> Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm text-white placeholder-slate-600 transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm text-white placeholder-slate-600 transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="form-message"
                    rows="4"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="What would you like to discuss?"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm text-white placeholder-slate-600 transition-all duration-300 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/10 ${
                    submitted ? "opacity-75 cursor-default" : ""
                  }`}
                >
                  {submitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
