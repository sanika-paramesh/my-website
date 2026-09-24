import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="relative py-20 bg-slate-950/50 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.degree + index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot / icon */}
              <div className="absolute -left-[49px] md:-left-[65px] top-1.5 w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                {index === 0 ? <GraduationCap className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-lg text-left relative overflow-hidden group hover:border-blue-500/25 transition-colors duration-300">
                {/* Subtle top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-300 font-medium text-sm md:text-base">
                      {edu.field}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-cyan-400 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {edu.description}
                </p>

                {/* Subtext info */}
                <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  <span>Institution:</span>
                  <span className="text-slate-300">{edu.institution}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
