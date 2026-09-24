import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Trash2, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  BarChart3, 
  Code, 
  Network, 
  Database,
  ArrowRightLeft,
  Wrench,
  Award
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const projectList = portfolioData.projects;

  // Custom visual generator based on project type
  const renderProjectVisual = (type) => {
    switch (type) {
      case "technical-iot":
        return (
          <div className="relative w-full h-48 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            {/* Microcontroller Schematic Visual */}
            <div className="relative flex items-center gap-6 z-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-16 bg-slate-900 border border-slate-700 rounded-lg flex flex-col justify-between p-1 shadow-md shadow-blue-500/5">
                  <div className="flex justify-between gap-1">
                    <span className="w-1.5 h-1 bg-blue-500 rounded-sm" />
                    <span className="w-1.5 h-1 bg-blue-500 rounded-sm" />
                    <span className="w-1.5 h-1 bg-blue-500 rounded-sm" />
                  </div>
                  <Cpu className="w-6 h-6 text-blue-400 mx-auto" />
                  <span className="text-[6px] text-slate-500 font-mono">ARDUINO</span>
                </div>
              </div>

              {/* Connecting lines */}
              <div className="flex flex-col gap-3 justify-center">
                <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 relative">
                  <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>
                <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 relative">
                  <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: "1s" }} />
                </div>
              </div>

              {/* Wet / Dry Segregator bin */}
              <div className="w-16 h-20 bg-slate-900 border border-slate-700 rounded-xl relative flex flex-col overflow-hidden shadow-lg">
                <div className="h-6 bg-slate-800 border-b border-slate-700 flex items-center justify-center">
                  <Trash2 className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="flex-1 grid grid-cols-2 divide-x divide-slate-800 text-[8px] font-mono text-center">
                  <div className="flex flex-col justify-center bg-blue-500/5 text-blue-400 p-0.5">
                    <span>WET</span>
                    <span className="text-[6px] text-slate-500">Sensor</span>
                  </div>
                  <div className="flex flex-col justify-center bg-amber-500/5 text-amber-400 p-0.5">
                    <span>DRY</span>
                    <span className="text-[6px] text-slate-500">Servo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "entrepreneurship":
        return (
          <div className="relative w-full h-48 bg-slate-950/80 rounded-xl border border-pink-500/10 flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Visual background gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-amber-500/5" />
            
            <div className="text-[10px] font-bold text-pink-400/80 uppercase tracking-widest mb-3 z-10 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Venture Flow
            </div>
            
            {/* Idea -> Create -> Sell -> Profit flowchart */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 z-10 w-full justify-center max-w-sm px-2">
              {/* Step 1: Idea */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 shadow-md">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <span className="text-[8px] text-slate-400 font-semibold uppercase">Idea</span>
              </div>
              <ArrowRight className="w-3 h-3 text-slate-600" />

              {/* Step 2: Create */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 shadow-md">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="text-[8px] text-slate-400 font-semibold uppercase">Create</span>
              </div>
              <ArrowRight className="w-3 h-3 text-slate-600" />

              {/* Step 3: Sell */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400 shadow-md">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
                <span className="text-[8px] text-slate-400 font-semibold uppercase">Sell</span>
              </div>
              <ArrowRight className="w-3 h-3 text-slate-600" />

              {/* Step 4: Profit */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/10">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-[8px] text-emerald-400 font-bold uppercase">Profit</span>
              </div>
            </div>
          </div>
        );

      case "technical-data":
        return (
          <div className="relative w-full h-48 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
            {/* Coding bg snippet */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:12px_12px]" />
            
            {/* Chart lines */}
            <div className="relative w-[180px] h-[90px] z-10 flex flex-col justify-end">
              <div className="absolute left-0 bottom-0 top-0 w-0.5 bg-slate-800" />
              <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-slate-800" />
              
              {/* Visualizing raw data bars */}
              <div className="flex items-end justify-between px-2 h-full gap-2">
                <div className="w-6 bg-indigo-500/20 border-t-2 border-indigo-400 rounded-t-sm h-[30%]" />
                <div className="w-6 bg-blue-500/30 border-t-2 border-blue-400 rounded-t-sm h-[65%]" />
                <div className="w-6 bg-cyan-500/40 border-t-2 border-cyan-400 rounded-t-sm h-[45%]" />
                <div className="w-6 bg-purple-500/50 border-t-2 border-purple-400 rounded-t-sm h-[80%]" />
              </div>
              
              {/* Mini Python Code Bubble */}
              <div className="absolute top-2 left-6 px-2 py-0.5 bg-slate-900 border border-slate-700/60 rounded text-[7px] font-mono text-indigo-400 flex items-center gap-1">
                <Code className="w-2.5 h-2.5" /> plt.plot(data)
              </div>
            </div>
          </div>
        );

      case "business-analysis":
        return (
          <div className="relative w-full h-48 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-center p-4 overflow-hidden">
            {/* Schematic Workflow map */}
            <div className="relative flex items-center justify-between gap-3 w-full max-w-[240px] z-10">
              <div className="flex flex-col items-center gap-1.5 p-2 bg-slate-900/80 border border-slate-700 rounded-lg text-center w-16">
                <Network className="w-4 h-4 text-purple-400" />
                <span className="text-[7px] font-mono text-slate-300 font-bold uppercase leading-none">Process Map</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              
              <div className="flex flex-col items-center gap-1.5 p-2 bg-slate-900/80 border border-slate-700 rounded-lg text-center w-16">
                <Database className="w-4 h-4 text-cyan-400" />
                <span className="text-[7px] font-mono text-slate-300 font-bold uppercase leading-none">LMS DB</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />

              <div className="flex flex-col items-center gap-1.5 p-1.5 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/30 rounded-lg text-center w-16 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-[6px] font-mono text-blue-400 font-bold uppercase leading-none">Certified</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Practical Experience</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3"
          >
            Projects & Practical Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl flex flex-col justify-between group hover:border-slate-700/60 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient mask inside cards */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/0 to-slate-900/40 pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 tracking-wider">PROJECT {project.id}</span>
                  <span className="px-2.5 py-0.5 rounded-full border border-slate-800 bg-slate-900 text-slate-400 text-[10px] font-semibold tracking-wide uppercase">
                    {project.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white text-left mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Category */}
                <p className="text-cyan-400 text-xs font-semibold text-left mb-4 uppercase tracking-widest">
                  {project.category}
                </p>

                {/* Custom Visual Component */}
                <div className="mb-6">
                  {renderProjectVisual(project.type)}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm md:text-base text-left mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Points */}
                <div className="text-left space-y-2 mb-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Accomplishments</span>
                  <ul className="space-y-1.5">
                    {project.keyPoints.map((point, kIdx) => (
                      <li key={kIdx} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies / Skills badges */}
              <div className="border-t border-slate-900 pt-4 flex flex-wrap gap-1.5 items-center">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800/80 text-[10px] font-semibold text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
