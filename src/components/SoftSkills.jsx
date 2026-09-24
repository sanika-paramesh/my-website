import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquareCode, 
  Users, 
  Binary, 
  Sparkles, 
  Palette, 
  Compass, 
  Clock, 
  Monitor, 
  TrendingUp 
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  MessageSquareCode,
  Users,
  Binary,
  Sparkles,
  Palette,
  Compass,
  Clock,
  Monitor,
  TrendingUp
};

export default function SoftSkills() {
  const { softSkills } = portfolioData;

  return (
    <section id="softskills" className="relative py-20 bg-slate-950">
      {/* Background graphic highlights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Professional Strengths</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
            Soft Skills & Attributes
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full w-[60px]" />
        </div>

        {/* Soft Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Sparkles;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col text-left justify-between"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  
                  {/* Text details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-base md:text-lg mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
