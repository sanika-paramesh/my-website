import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function CareerObjective() {
  const { heading, content } = portfolioData.careerObjective;

  return (
    <section id="careerobjective" className="relative py-20 bg-slate-950/50 overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/3 w-[30vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Future Vision</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
            {heading}
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full w-[60px]" />
        </div>

        {/* High-impact Visual Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden text-left"
        >
          {/* Top glowing bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Big icon & statement highlights */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl w-fit shadow-lg shadow-blue-500/5">
                <Target className="w-8 h-8 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mission Statement</span>
                <h3 className="text-xl font-bold text-white mt-1">Building Practical Innovation</h3>
              </div>
            </div>

            {/* Right Column: Paragraph and key bullets */}
            <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-8 flex flex-col gap-6">
              {/* Quote text */}
              <div className="relative">
                <span className="absolute -top-6 -left-3 text-7xl font-serif text-slate-800 pointer-events-none select-none">“</span>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed relative z-10">
                  {content}
                </p>
                <span className="absolute -bottom-10 right-4 text-7xl font-serif text-slate-800 pointer-events-none select-none">”</span>
              </div>

              {/* Action Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 rounded-lg shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-400">Emerging Tech Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-purple-500/10 border border-purple-500/25 text-purple-400 rounded-lg shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-400">Creative Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
