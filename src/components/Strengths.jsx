import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// Visual metadata for strengths cards
const strengthMeta = [
  { text: "Curious", gradient: "from-blue-500/20 to-cyan-500/5", border: "border-blue-500/20", glow: "shadow-blue-500/5", size: "col-span-1" },
  { text: "Creative", gradient: "from-purple-500/20 to-pink-500/5", border: "border-purple-500/20", glow: "shadow-purple-500/5", size: "col-span-1" },
  { text: "Communicative", gradient: "from-cyan-500/20 to-blue-500/5", border: "border-cyan-500/20", glow: "shadow-cyan-500/5", size: "col-span-1 md:col-span-2" },
  { text: "Team-Oriented", gradient: "from-blue-600/25 to-indigo-500/5", border: "border-blue-600/20", glow: "shadow-blue-600/5", size: "col-span-1" },
  { text: "Adaptable", gradient: "from-purple-600/25 to-indigo-500/5", border: "border-purple-600/20", glow: "shadow-purple-600/5", size: "col-span-1" },
  { text: "Problem Solver", gradient: "from-cyan-600/25 to-blue-500/5", border: "border-cyan-600/20", glow: "shadow-cyan-600/5", size: "col-span-1 md:col-span-2" },
  { text: "Eager to Learn", gradient: "from-blue-500/20 to-purple-500/5", border: "border-blue-500/20", glow: "shadow-blue-500/5", size: "col-span-1" },
  { text: "Innovative", gradient: "from-purple-500/20 to-cyan-500/5", border: "border-purple-500/20", glow: "shadow-purple-500/5", size: "col-span-1" }
];

export default function Strengths() {
  const { strengths } = portfolioData;

  return (
    <section id="strengths" className="relative py-20 bg-slate-950">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Attributes</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
            Personal Strengths
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full w-[60px]" />
        </div>

        {/* Strengths Dashboard / Words Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {strengthMeta.map((strength, idx) => (
            <motion.div
              key={strength.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(255, 255, 255, 0.2)"
              }}
              className={`${strength.size} p-5 bg-gradient-to-br ${strength.gradient} border ${strength.border} shadow-md ${strength.glow} rounded-2xl flex items-center gap-3.5 text-left relative overflow-hidden transition-all duration-300 group`}
            >
              {/* Pulsing indicator */}
              <div className="p-2 bg-slate-900 border border-white/5 text-blue-400 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              </div>
              <span className="text-white text-base md:text-lg font-bold tracking-wide">
                {strength.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
