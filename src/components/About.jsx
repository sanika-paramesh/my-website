import React from "react";
import { motion } from "framer-motion";
import { Brain, Terminal, Users, Lightbulb } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  Brain: Brain,
  Terminal: Terminal,
  Users: Users,
  Lightbulb: Lightbulb,
};

export default function About() {
  const { heading, bio, highlights } = portfolioData.about;

  return (
    <section id="about" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3"
          >
            {heading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Bio Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl mb-12 text-slate-300 leading-relaxed text-base md:text-lg text-left"
        >
          {bio}
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => {
            const IconComponent = iconMap[highlight.icon] || Brain;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl text-left flex flex-col items-start"
              >
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {highlight.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
