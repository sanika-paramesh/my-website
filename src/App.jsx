import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Certifications from "./components/Certifications";
import Interests from "./components/Interests";
import CareerObjective from "./components/CareerObjective";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Decorative global ambient glows */}
      <div className="absolute top-[20%] left-0 w-[50vw] h-[50vw] bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[50%] right-0 w-[50vw] h-[50vw] bg-purple-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-[40vw] h-[40vw] bg-cyan-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      {/* Sticky Header Nav */}
      <Navbar />

      {/* Structured Sections */}
      <main className="relative z-10">
        <Hero />
        
        <About />
        
        <Education />
        
        <Projects />
        
        <Skills />
        
        <SoftSkills />
        
        <Certifications />
        
        <Interests />
        
        <CareerObjective />
        
        <Strengths />
        
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
