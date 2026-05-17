"use client";

import { TerminalOverlay } from "./TerminalOverlay";

export const Hero = () => {
  return (
    <header className="min-h-screen flex flex-col md:flex-row pt-16">
      {/* Left Panel (Identity) */}
      <div className="w-full md:w-[55vw] flex flex-col justify-center px-margin-page py-section-gap relative">
        <div className="absolute -z-10 top-20 left-10 opacity-[0.04] text-display-xl text-on-surface select-none">01</div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 border border-secondary-container px-3 py-1 mb-6">
            <span className="w-2 h-2 bg-secondary-container animate-pulse"></span>
            <span className="text-label-caps text-secondary-container">OPEN TO WORK</span>
          </div>
          <h1 className="text-display-lg flex flex-col leading-tight">
            <span className="text-on-background">SOFTWARE</span>
            <span className="text-primary-fixed">ENGINEER.</span>
            <span className="text-on-background">AI & SECURITY</span>
            <span className="text-primary-fixed">RESEARCHER.</span>
          </h1>
        </div>
        <p className="text-body-lg text-on-surface-variant mb-8 max-w-lg">
          <span className="text-primary-fixed">&gt;</span> Building full-stack applications with a focus on Artificial Intelligence and Secure Software Development._
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          {["JAVA", "PYTHON", "REACT.JS", "CTF PLAYER", "AI RESEARCH"].map((tag) => (
            <span key={tag} className="border border-outline-variant px-3 py-1 text-label-caps bg-surface-container-high">{tag}</span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-fixed text-on-primary-fixed px-8 py-4 text-label-caps hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            VIEW PROJECTS
            <span className="material-symbols-outlined text-[18px]">terminal</span>
          </button>
          <button 
            onClick={() => document.getElementById('reports')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-on-surface text-on-surface px-8 py-4 text-label-caps hover:bg-on-surface hover:text-background transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            READ WRITEUPS ↗
          </button>
        </div>
      </div>

      {/* Right Panel (Visual) */}
      <div className="w-full md:w-[45vw] min-h-[75vh] md:h-auto flex flex-col border-l-4 border-primary-fixed group bg-surface-container-low">
        <div className="relative flex-grow min-h-[50vh] overflow-hidden">
          <img
            alt="Profile Portrait"
            className="absolute inset-0 w-full h-full object-contain object-center cyber-image-effect"
            src="/profile-image.png"
          />
          <div className="absolute inset-0 grain-overlay pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
        </div>
        <div className="w-full bg-background border-t-2 border-primary-fixed/20 p-6 flex justify-center items-center">
          <TerminalOverlay />
        </div>
      </div>
    </header>
  );
};
