import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Terminal, Brain, Cpu, Database } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { name, title, university, status, tagline } = portfolioData.personalInfo;

  // Configuration for neural nodes SVG animation
  const nodes = [
    { id: 1, x: 100, y: 150, delay: 0, icon: Brain, color: "text-blue-400" },
    { id: 2, x: 250, y: 80, delay: 1, icon: Database, color: "text-cyan-400" },
    { id: 3, x: 380, y: 160, delay: 0.5, icon: Cpu, color: "text-purple-400" },
    { id: 4, x: 200, y: 280, delay: 1.5, icon: Terminal, color: "text-blue-500" },
    { id: 5, x: 350, y: 320, delay: 0.8, icon: Terminal, color: "text-cyan-400" },
    { id: 6, x: 80, y: 340, delay: 1.2, icon: Database, color: "text-purple-500" },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 3 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 0, to: 5 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 z-0" />

      {/* Floating Particle Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            {status} @ {university}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white"
          >
            Hi, I'm{" "}
            <span className="text-gradient-cyan-purple">
              {name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            {tagline}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.55)] cursor-pointer"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-700 hover:border-blue-500/50 bg-slate-900/50 hover:bg-slate-900 text-slate-200 hover:text-white font-medium rounded-xl transition-all duration-300 cursor-pointer"
            >
              Let's Connect
              <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>
          </motion.div>
        </div>

        {/* Right column AI visualizer */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[420px] glass-panel rounded-3xl p-6 shadow-2xl border border-white/5 flex items-center justify-center overflow-hidden"
          >
            {/* Ambient visual background glow inside card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-3xl pointer-events-none" />

            <svg viewBox="0 0 450 400" className="w-full h-full relative z-10 overflow-visible">
              {/* Lines */}
              {connections.map((c, i) => {
                const nodeFrom = nodes[c.from];
                const nodeTo = nodes[c.to];
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={nodeFrom.x}
                    y1={nodeFrom.y}
                    x2={nodeTo.x}
                    y2={nodeTo.y}
                    stroke="rgba(59, 130, 246, 0.15)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                  />
                );
              })}

              {/* Glowing signal pulses travel across lines */}
              {connections.map((c, i) => {
                const nodeFrom = nodes[c.from];
                const nodeTo = nodes[c.to];
                return (
                  <motion.circle
                    key={`pulse-${i}`}
                    r="3"
                    fill="#22d3ee"
                    style={{ filter: "drop-shadow(0 0 4px #22d3ee)" }}
                    animate={{
                      cx: [nodeFrom.x, nodeTo.x],
                      cy: [nodeFrom.y, nodeTo.y],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4
                    }}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const IconComponent = node.icon;
                return (
                  <g key={node.id}>
                    {/* Ring glow animation */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="22"
                      fill="rgba(30, 41, 59, 0.6)"
                      stroke="rgba(59, 130, 246, 0.25)"
                      strokeWidth="1.5"
                      animate={{
                        r: [22, 26, 22],
                        stroke: [
                          "rgba(59, 130, 246, 0.25)",
                          "rgba(139, 92, 246, 0.45)",
                          "rgba(59, 130, 246, 0.25)"
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: node.delay
                      }}
                    />

                    {/* Node Core */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="16"
                      fill="#0f172a"
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="1"
                    />

                    {/* Icon container */}
                    <foreignObject
                      x={node.x - 8}
                      y={node.y - 8}
                      width="16"
                      height="16"
                      className="pointer-events-none"
                    >
                      <div className={`w-full h-full flex items-center justify-center ${node.color}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>

            {/* Glowing Center Badge */}
            <div className="absolute p-4 rounded-2xl glass-panel border border-blue-500/20 bg-slate-950/80 shadow-lg text-center flex flex-col gap-1 items-center max-w-[130px] animate-float-medium pointer-events-none">
              <span className="text-[10px] uppercase text-cyan-400 font-bold tracking-widest">System Status</span>
              <span className="text-white text-xs font-semibold">Active & Online</span>
              <span className="text-[9px] text-slate-400 font-mono">REVA Univ / B.Tech</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
