import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Code2, LineChart, Network, Users, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// Icon mapping helper for interests
const interestIconMap = {
  "Artificial Intelligence": Brain,
  "Data Science": LineChart,
  "Python Programming": Code2,
  "Data Visualization": LineChart,
  "Business Analysis": Network,
  "Entrepreneurship": Users,
  "Innovative Project Development": Wrench
};

export default function Interests() {
  const { interests } = portfolioData;

  return (
    <section id="interests" className="relative py-20 bg-slate-950">
      {/* Background graphic highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Focus Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
            Areas I'm Interested In
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full w-[60px]" />
        </div>

        {/* Tag layout */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {interests.map((interest, idx) => {
            const Icon = interestIconMap[interest] || Sparkles;
            return (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  delay: idx * 0.07 
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px -10px rgba(59, 130, 246, 0.3)"
                }}
                className="glass-panel px-5 py-3 rounded-2xl border border-white/5 flex items-center gap-3 cursor-default hover:border-blue-500/30 transition-all duration-300 shadow-md"
              >
                <div className="p-1.5 bg-blue-500/10 text-blue-400 rounded-lg">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-sm font-semibold text-slate-200 hover:text-white transition-colors">
                  {interest}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
