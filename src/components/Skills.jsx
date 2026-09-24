import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Cpu, 
  Wrench, 
  Layers 
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const categoryMeta = {
  programming: {
    title: "Programming",
    icon: Code2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20"
  },
  dataScience: {
    title: "Data Science",
    icon: Database,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/20"
  },
  ai: {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    color: "text-purple-400",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20"
  },
  iot: {
    title: "IoT & Embedded Systems",
    icon: Cpu,
    color: "text-blue-400",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20"
  },
  tools: {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/20"
  },
  other: {
    title: "Other Competencies",
    icon: Layers,
    color: "text-purple-400",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20"
  }
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-20 bg-slate-950/50 overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Expertise</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, list], idx) => {
            const meta = categoryMeta[key] || categoryMeta.programming;
            const Icon = meta.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel p-6 rounded-2xl border ${meta.borderColor} flex flex-col text-left justify-between group hover:border-slate-700 transition-colors duration-300 shadow-md`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 ${meta.bgColor} rounded-xl text-slate-300 border border-white/5`}>
                      <Icon className={`w-5 h-5 ${meta.color}`} />
                    </div>
                    <h3 className="font-bold text-white text-base md:text-lg">
                      {meta.title}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {list.map((skillItem) => (
                      <motion.div
                        key={skillItem}
                        whileHover={{ scale: 1.04 }}
                        className="px-3.5 py-2 bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/60 rounded-xl text-slate-300 hover:text-white text-xs font-medium cursor-default transition-all duration-200"
                      >
                        {skillItem}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative border animation line */}
                <div className="w-full h-0.5 bg-slate-900 group-hover:bg-slate-800 rounded-full mt-6 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
