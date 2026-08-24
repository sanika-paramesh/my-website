import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const certs = portfolioData.certifications;

  return (
    <section id="certifications" className="relative py-20 bg-slate-950/50 overflow-hidden">
      {/* Background glowing highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Achievements</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3"
          >
            Certifications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between items-start text-left relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-300 shadow-lg"
            >
              {/* Decorative accent light inside the certificate card */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-500/10 transition-colors" />

              <div className="w-full">
                {/* Header Icon badge */}
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl mb-6 w-fit">
                  <Award className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-lg mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Provider */}
                <p className="text-slate-400 text-sm font-semibold mb-6">
                  {cert.provider}
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-slate-500 text-[10px] font-bold uppercase tracking-wider group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Completion
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
