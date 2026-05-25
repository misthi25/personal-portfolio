"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Award, Code, BookOpen } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './components/Icons';

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-fidelity SVG icons with documentation links matching image_a45279.png style
  const languages = [
    { 
      name: "Java", 
      url: "https://docs.oracle.com/en/java/",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#E76F00] transition-transform group-hover:scale-110 duration-200">
          <path d="M9.024 18.318l-.018.042c-.228.438-.348.834-.348 1.158 0 .804.57 1.302 1.632 1.302 1.488 0 3.018-.762 4.14-2.052l.06-.072c-.93.312-1.92.468-2.904.468-1.02 0-1.968-.156-2.562-.846zm1.182-4.146c-1.356 0-2.328-.54-2.328-1.458 0-.948 1.152-1.554 2.892-1.554 1.764 0 2.76.54 2.76 1.446 0 .978-1.2 1.566-3.324 1.566zm6.816 5.862c-.756.918-2.076 1.512-3.6 1.512-1.116 0-2.016-.276-2.544-.696 1.146-.03 2.37-.36 3.486-.948l.042-.024c.942-.498 1.746-1.146 2.316-1.878.228.696.426 1.41.3 2.034zm-3.036-9.102c2.814 0 4.602 1.092 4.602 2.652 0 1.572-1.938 2.628-4.992 2.628-3.36 0-5.382-1.062-5.382-2.652 0-1.542 1.956-2.628 5.772-2.628zm-3.792-7.392c.048.336.042.756-.03 1.2a14.73 14.73 0 0 1-.414 1.638 12.01 12.01 0 0 1 1.764-.534 5.34 5.34 0 0 1 1.092-.12c1.026 0 1.59.342 1.59.948 0 .762-.9 1.482-2.484 2.058l-.444.156c-1.614.54-2.736 1.122-3.234 1.662-.312.33-.45.696-.45 1.098 0 .864.714 1.524 2.112 1.944a10.89 10.89 0 0 0 3.168.42c1.386 0 2.67-.18 3.612-.492l.06-.024c1.68-.588 2.67-1.392 2.67-2.214 0-.306-.114-.624-.348-.96-.492-.708-1.536-1.284-2.91-1.602l.606-.702c1.176-1.38 1.758-2.688 1.758-3.966 0-1.506-.948-2.526-2.706-2.91-1.2-.264-2.718-.114-4.224.426-.504.18-.942.408-1.308.666l.324-.324c.48-.48.828-1.002.99-1.512l.012-.036c.156-.558.114-1.08-.132-1.464-.222-.348-.618-.546-1.128-.546-.384 0-.822.114-1.266.336zm-2.16 8.358c-.378-.342-.564-.738-.564-1.164 0-.858.78-1.65 2.16-2.244l.246-.102c.576-.234 1.026-.438 1.314-.606-.522.69-1.23 1.518-1.95 2.298l-.054.06c-.414.45-.798.87-1.152 1.758z"/>
        </svg>
      )
    },
    { 
      name: "Python", 
      url: "https://docs.python.org/3/",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#3776AB] transition-transform group-hover:scale-110 duration-200">
          <path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.89h3.69c.93 0 1.66.73 1.66 1.65v3.13c0 .93-.73 1.66-1.66 1.66h-.57c-.63 0-1.14-.51-1.14-1.14V7.53c0-.93-.74-1.66-1.66-1.66h-5.32c-.92 0-1.66-.73-1.66-1.66V2.32c0-.92.74-1.65 1.66-1.65h3.33zM7.5 5.25c.63 0 1.14.51 1.14 1.14v2.49c0 .93.74 1.66 1.66 1.66h5.32c.92 0 1.66.73 1.66 1.66v2.49c0 .63-.51 1.14-1.14 1.14H11.1c-.93 0-1.66-.73-1.66-1.66V11.1c0-.93-.74-1.66-1.66-1.66H4.66c-.63 0-1.14-.51-1.14-1.14V5.25h4zM4.66 12.82c.92 0 1.66.73 1.66 1.65v3.14c0 .92.74 1.65 1.66 1.65h5.32c.92 0 1.66.74 1.66 1.66v1.94c0 .92-.74 1.66-1.66 1.66H6.48c-.93 0-1.66-.74-1.66-1.66v-2.89H1.13c-.93 0-1.66-.74-1.66-1.66v-3.13c0-.92.73-1.66 1.66-1.66h3.53z"/>
        </svg>
      )
    },
    { 
      name: "C++", 
      url: "https://learn.microsoft.com/en-us/cpp/",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#00599C] transition-transform group-hover:scale-110 duration-200">
          <path d="M22.18 10.32H20.3v-1.8h-1.35v1.8h-1.88v1.35h1.88v1.88H20.3v-1.88h1.88v-1.35zm-4.32-4.33H16v-1.8h-1.35v1.8h-1.88v1.35h1.88v1.88H16V7.34h1.86V5.99zM10.22 3.44c-4.44 0-8.05 3.61-8.05 8.06s3.61 8.06 8.05 8.06c2.58 0 4.88-1.22 6.36-3.11l-2.31-1.34c-.95 1.14-2.39 1.87-4.05 1.87-2.85 0-5.17-2.31-5.17-5.17s2.32-5.17 5.17-5.17c1.72 0 3.23.84 4.16 2.13l2.33-1.35C15.22 4.7 12.87 3.44 10.22 3.44z"/>
        </svg>
      )
    },
    { 
      name: "JavaScript", 
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#F7DF1E] transition-transform group-hover:scale-110 duration-200">
          <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-.847-.952-1.464-1.804-1.483-.872-.047-1.534.423-1.823 1.104-.141.34-.177.74-.177 1.157 0 1.53.141 2.282 2.17 2.282 1.233 0 1.841-.411 2.05-.835.152-.305.141-.74.129-1.32-.012-.622-.047-1.022-.545-2.095zm-12.213.165c-.129-.294-.435-.518-.776-.518-.54 0-.823.4-.823.952 0 .647.341.988.858.988.318 0 .612-.153.765-.447.118-.235.118-.553 0-.975zm-.552-3.15c1.47 0 2.458.741 2.928 2.01.212.577.212 1.412.212 2.188 0 1.706-.823 2.518-2.67 2.518-1.564 0-2.481-.706-2.94-1.929-.247-.647-.223-1.517-.223-2.317 0-1.74.87-2.47 2.693-2.47zm11.237-3.15c1.176 0 2.105.506 2.517 1.458.176.4.176.976.176 1.564 0 1.635-.858 2.376-2.458 2.376-1.482 0-2.317-.67-2.611-1.706-.106-.353-.118-.8-.118-1.223 0-1.53.764-2.469 2.494-2.469z"/>
        </svg>
      )
    }
  ];

  const frameworksAndTools = [
    { 
      name: "Next.js", 
      url: "https://nextjs.org/docs",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#ffffff] transition-transform group-hover:scale-110 duration-200">
          <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.4 17.5l-4.75-6.075V17.5h-1.45V9.45h1.45l4.3 5.5V9.45H18v8.05h-.6zM10.75 9.45v8.05h-1.45V9.45h1.45z"/>
        </svg>
      )
    },
    { 
      name: "React", 
      url: "https://react.dev",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#61DAFB] transition-transform group-hover:scale-110 duration-200">
          <path d="M24 12c0-1.18-.81-2.29-2.22-3.17 1.41-.88 2.22-1.99 2.22-3.17 0-2.41-3.38-4.37-7.55-4.37-1.11 0-2.17.14-3.15.39C12.32.62 11.23 0 10.05 0 6.67 0 3.93 2.74 3.93 6.12c0 .49.06.96.17 1.42C1.63 8.3.01 9.77.01 11.4c0 2.41 3.38 4.37 7.55 4.37 1.11 0 2.17-.14 3.15-.39.98 1.06 2.07 1.68 3.25 1.68 3.38 0 6.12-2.74 6.12-6.12 0-.49-.06-.96-.17-1.42 2.48-.76 4.1-2.23 4.1-3.86zm-13.95 2.12c-2.92 0-5.3-1.25-5.3-2.78 0-1.29 1.7-2.4 4.12-2.71a10.96 10.96 0 0 0-.12 1.61c0 1.5.41 2.92 1.13 4.11-.47.22-.96.38-1.45.38zm3.95-6.24c0-2.22 1.8-4.02 4.02-4.02s4.02 1.8 4.02 4.02-1.8 4.02-4.02 4.02-4.02-1.8-4.02-4.02z"/>
        </svg>
      )
    },
    { 
      name: "MongoDB", 
      url: "https://www.mongodb.com/docs/",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#47A248] transition-transform group-hover:scale-110 duration-200">
          <path d="M12 .018c-.12 0-.24.018-.342.06C10.458.558 4.47 5.37 4.47 11.754c0 4.656 3.168 8.448 7.188 9.876V24h.684v-2.37c4.02-1.428 7.188-5.22 7.188-9.876 0-6.384-5.988-11.196-7.188-11.676a.91.91 0 0 0-.342-.06zM12 2.19c.126.108 5.316 4.608 5.316 9.564 0 3.84-2.31 7.026-5.316 8.286V2.19z"/>
        </svg>
      )
    },
    { 
      name: "PyTorch", 
      url: "https://pytorch.org/docs/",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-[#EE4C2C] transition-transform group-hover:scale-110 duration-200">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.116 4.92c1.787 0 3.245 1.458 3.245 3.245 0 1.787-1.458 3.244-3.245 3.244-1.787 0-3.244-1.457-3.244-3.244 0-1.787 1.457-3.245 3.244-3.245zm0 8.013c2.793 0 5.291 1.545 6.467 3.864H5.65c1.176-2.32 3.673-3.864 6.466-3.864z"/>
        </svg>
      )
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#140b13] text-[#f7f3f6] font-serif selection:bg-pink-200 selection:text-neutral-900 overflow-x-hidden relative pb-24">
      
      {/* Cinematic Deep Atmosphere Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-pink-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-125 h-125 bg-purple-950/20 rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER / NAV */}
      <header className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center relative z-10 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base font-mono uppercase tracking-widest text-pink-400 font-semibold"
        >
          misthi.dev
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-8 text-sm text-pink-200/60 font-medium"
        >
          <a href="#about" className="hover:text-pink-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-pink-300 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-pink-300 transition-colors">Skills</a>
        </motion.nav>
      </header>

      {/* MAIN HERO PROFILE SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-6 pt-12 text-center relative z-10 flex flex-col items-center">
        
        {/* Presentable Top-Centered Portrait Card */}
        <div className="relative w-64 h-80 bg-neutral-900/50 border border-purple-900/30 rounded-2xl p-3 shadow-2xl overflow-hidden mb-8">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img 
              src="/image.png" 
              alt="Misthi Pandey" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Elevated Editorial Typography Layout */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-normal tracking-tight text-white mb-4"
        >
          Misthi Pandey
        </motion.h1>

        {/* B.Tech Placement Line */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-pink-400 font-sans text-xs uppercase tracking-widest max-w-lg mb-5 font-semibold"
        >
          B.Tech Computer Science & Engineering @ VIT Chennai
        </motion.p>

        {/* Introduction Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-pink-100/70 text-lg max-w-xl font-light italic leading-relaxed mb-8"
        >
          "Bridging the gap between robust software systems and machine learning to build secure, fluid, and scalable interactive applications."
        </motion.p>

        {/* Social Links Panel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center justify-center font-sans"
        >
          <a href="mailto:misthikpandey@gmail.com" className="bg-white text-neutral-950 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-pink-50 transition-all shadow-md hover:-translate-y-0.5">
            <Mail size={16} /> Contact Me[cite: 1]
          </a>
          <a href="https://linkedin.com/in/misthi25" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900/40 border border-purple-900/30 rounded-full text-pink-100/80 hover:bg-purple-950/40 hover:text-white transition-all shadow-sm">
            <LinkedInIcon size={18} />
          </a>
          <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900/40 border border-purple-900/30 rounded-full text-pink-100/80 hover:bg-purple-950/40 hover:text-white transition-all shadow-sm">
            <GitHubIcon size={18} />
          </a>
        </motion.div>
      </section>

      {/* CURATED PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pt-32">
        <div className="border-t border-purple-900/20 pt-12 mb-12 flex justify-between items-end">
          <div>
            <span className="text-xs font-sans text-pink-400/60 uppercase tracking-widest block mb-2">Selected Work</span>
            <h2 className="text-3xl font-normal tracking-tight text-white">Featured Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* VERITY Multi-Agent System */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop" 
                  alt="Multi-Agent AI Network Grid" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Multi-Agent AI / NLP</span>
                <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">VERITY Detection System</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Designed a multi-agent AI framework for misinformation validation through coordinated model interactions, emphasizing a highly scalable architecture[cite: 1].
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#3776AB]"><path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.89h3.69c.93 0 1.66.73 1.66 1.65v3.13c0 .93-.73 1.66-1.66 1.66h-.57c-.63 0-1.14-.51-1.14-1.14V7.53c0-.93-.74-1.66-1.66-1.66h-5.32c-.92 0-1.66-.73-1.66-1.66V2.32c0-.92.74-1.65 1.66-1.65h3.33zM7.5 5.25c.63 0 1.14.51 1.14 1.14v2.49c0 .93.74 1.66 1.66 1.66h5.32c.92 0 1.66.73 1.66 1.66v2.49c0 .63-.51 1.14-1.14 1.14H11.1c-.93 0-1.66-.73-1.66-1.66V11.1c0-.93-.74-1.66-1.66-1.66H4.66c-.63 0-1.14-.51-1.14-1.14V5.25h4zM4.66 12.82c.92 0 1.66.73 1.66 1.65v3.14c0 .92.74 1.65 1.66 1.65h5.32c.92 0 1.66.74 1.66 1.66v1.94c0 .92-.74 1.66-1.66 1.66H6.48c-.93 0-1.66-.74-1.66-1.66v-2.89H1.13c-.93 0-1.66-.74-1.66-1.66v-3.13c0-.92.73-1.66 1.66-1.66h3.53z"/></svg>
                <span>Python</span>
              </span>
            </div>
          </motion.div>

          {/* E-Commerce Web Application */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop" 
                  alt="Modern Digital Shopping Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Full Stack / Commerce</span>
                <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">E-Commerce Architecture</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Full-stack marketplace platform developed using React, Node.js, and MongoDB[cite: 1]. Integrates backend database structures with fully responsive client APIs[cite: 1].
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center font-semibold">
              <span className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#61DAFB]"><path d="M24 12c0-1.18-.81-2.29-2.22-3.17 1.41-.88 2.22-1.99 2.22-3.17 0-2.41-3.38-4.37-7.55-4.37-1.11 0-2.17.14-3.15.39C12.32.62 11.23 0 10.05 0 6.67 0 3.93 2.74 3.93 6.12c0 .49.06.96.17 1.42C1.63 8.3.01 9.77.01 11.4c0 2.41 3.38 4.37 7.55 4.37 1.11 0 2.17-.14 3.15-.39.98 1.06 2.07 1.68 3.25 1.68 3.38 0 6.12-2.74 6.12-6.12 0-.49-.06-.96-.17-1.42 2.48-.76 4.1-2.23 4.1-3.86zm-13.95 2.12c-2.92 0-5.3-1.25-5.3-2.78 0-1.29 1.7-2.4 4.12-2.71a10.96 10.96 0 0 0-.12 1.61c0 1.5.41 2.92 1.13 4.11-.47.22-.96.38-1.45.38zm3.95-6.24c0-2.22 1.8-4.02 4.02-4.02s4.02 1.8 4.02 4.02-1.8 4.02-4.02 4.02-4.02-1.8-4.02-4.02z"/></svg>React</span>
              <span>—</span>
              <span className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#47A248]"><path d="M12 .018c-.12 0-.24.018-.342.06C10.458.558 4.47 5.37 4.47 11.754c0 4.656 3.168 8.448 7.188 9.876V24h.684v-2.37c4.02-1.428 7.188-5.22 7.188-9.876 0-6.384-5.988-11.196-7.188-11.676a.91.91 0 0 0-.342-.06zM12 2.19c.126.108 5.316 4.608 5.316 9.564 0 3.84-2.31 7.026-5.316 8.286V2.19z"/></svg>MongoDB</span>
            </div>
          </motion.div>

          {/* AI-Based Dropout Prediction System */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" 
                  alt="Predictive Analytics Charts" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Predictive Analytics</span>
                <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">Dropout Prediction Engine</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Developed a custom ML classification model utilizing student academic benchmarks and behavioral variables to intercept dropouts early[cite: 1].
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#3776AB]"><path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.89h3.69c.93 0 1.66.73 1.66 1.65v3.13c0 .93-.73 1.66-1.66 1.66h-.57c-.63 0-1.14-.51-1.14-1.14V7.53c0-.93-.74-1.66-1.66-1.66h-5.32c-.92 0-1.66-.73-1.66-1.66V2.32c0-.92.74-1.65 1.66-1.65h3.33zM7.5 5.25c.63 0 1.14.51 1.14 1.14v2.49c0 .93.74 1.66 1.66 1.66h5.32c.92 0 1.66.73 1.66 1.66v2.49c0 .63-.51 1.14-1.14 1.14H11.1c-.93 0-1.66-.73-1.66-1.66V11.1c0-.93-.74-1.66-1.66-1.66H4.66c-.63 0-1.14-.51-1.14-1.14V5.25h4zM4.66 12.82c.92 0 1.66.73 1.66 1.65v3.14c0 .92.74 1.65 1.66 1.65h5.32c.92 0 1.66.74 1.66 1.66v1.94c0 .92-.74 1.66-1.66 1.66H6.48c-.93 0-1.66-.74-1.66-1.66v-2.89H1.13c-.93 0-1.66-.74-1.66-1.66v-3.13c0-.92.73-1.66 1.66-1.66h3.53z"/></svg>
                <span>Python</span>
              </span>
            </div>
          </motion.div>

          {/* Bank Management System */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&auto=format&fit=crop" 
                  alt="Secure Banking Abstract Grid" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Desktop Systems</span>
                <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">Bank Management Core</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Built a secure desktop app supporting account generation, tracking routines, and safe PIN authentication frameworks using highly modular code styling[cite: 1].
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center font-semibold">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#E76F00]"><path d="M9.024 18.318l-.018.042c-.228.438-.348.834-.348 1.158 0 .804.57 1.302 1.632 1.302 1.488 0 3.018-.762 4.14-2.052l.06-.072c-.93.312-1.92.468-2.904.468-1.02 0-1.968-.156-2.562-.846zm1.182-4.146c-1.356 0-2.328-.54-2.328-1.458 0-.948 1.152-1.554 2.892-1.554 1.764 0 2.76.54 2.76 1.446 0 .978-1.2 1.566-3.324 1.566zm6.816 5.862c-.756.918-2.076 1.512-3.6 1.512-1.116 0-2.016-.276-2.544-.696 1.146-.03 2.37-.36 3.486-.948l.042-.024c.942-.498 1.746-1.146 2.316-1.878.228.696.426 1.41.3 2.034zm-3.036-9.102c2.814 0 4.602 1.092 4.602 2.652 0 1.572-1.938 2.628-4.992 2.628-3.36 0-5.382-1.062-5.382-2.652 0-1.542 1.956-2.628 5.772-2.628zm-3.792-7.392c.048.336.042.756-.03 1.2a14.73 14.73 0 0 1-.414 1.638 12.01 12.01 0 0 1 1.764-.534 5.34 5.34 0 0 1 1.092-.12c1.026 0 1.59.342 1.59.948 0 .762-.9 1.482-2.484 2.058l-.444.156c-1.614.54-2.736 1.122-3.234 1.662-.312.33-.45.696-.45 1.098 0 .864.714 1.524 2.112 1.944a10.89 10.89 0 0 0 3.168.42c1.386 0 2.67-.18 3.612-.492l.06-.024c1.68-.588 2.67-1.392 2.67-2.214 0-.306-.114-.624-.348-.96-.492-.708-1.536-1.284-2.91-1.602l.606-.702c1.176-1.38 1.758-2.688 1.758-3.966 0-1.506-.948-2.526-2.706-2.91-1.2-.264-2.718-.114-4.224.426-.504.18-.942.408-1.308.666l.324-.324c.48-.48.828-1.002.99-1.512l.012-.036c.156-.558.114-1.08-.132-1.464-.222-.348-.618-.546-1.128-.546-.384 0-.822.114-1.266.336zm-2.16 8.358c-.378-.342-.564-.738-.564-1.164 0-.858.78-1.65 2.16-2.244l.246-.102c.576-.234 1.026-.438 1.314-.606-.522.69-1.23 1.518-1.95 2.298l-.054.06c-.414.45-.798.87-1.152 1.758z"/></svg>
                <span>Java Core</span>
              </span>
            </div>
          </motion.div>

          {/* EcoRoute Project */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
                  alt="EcoRoute System Architecture" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Web App / Sustainability</span>
                <a href="https://github.com/misthi25/Ecoroute" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/Ecoroute" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">EcoRoute Architecture</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                An eco-conscious routing and navigation solution designed to calculate and analyze resource optimization paths.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans">
              <span>TypeScript</span> — <span>Mapping API</span>
            </div>
          </motion.div>

          {/* TCP Throughput Analysis */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" 
                  alt="TCP Data Flow Visualization" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Networking / Blog</span>
                <a href="https://github.com/misthi25/TCP-Throughput-Analysis" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/TCP-Throughput-Analysis" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">TCP Throughput Analysis</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Comprehensive parameters simulation exploring system network thresholds, published as an in-depth technical analysis piece on Blogger.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans">
              <span>Network Simulation</span> — <span>Research</span>
            </div>
          </motion.div>

          {/* Microsoft Club Website */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
                  alt="Modern Minimalist User Interface" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Production UI</span>
                <a href="https://github.com/misthi25/mic-official-website-25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/mic-official-website-25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">MIC Official Club Platform</h3>
              </a>
              <p className="text-pink-100/60 text-base font-medium leading-relaxed">
                Contributed structural frontend layout components and interaction spaces for the official Microsoft Innovation Club platform at VIT Chennai[cite: 1].
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans font-semibold items-center">
              <span className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.4 17.5l-4.75-6.075V17.5h-1.45V9.45h1.45l4.3 5.5V9.45H18v8.05h-.6zM10.75 9.45v8.05h-1.45V9.45h1.45z"/></svg>Next.js</span>
              <span>—</span>
              <span className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#06B6D4]"><path d="M24 12c0-1.18-.81-2.29-2.22-3.17 1.41-.88 2.22-1.99 2.22-3.17 0-2.41-3.38-4.37-7.55-4.37-1.11 0-2.17.14-3.15.39C12.32.62 11.23 0 10.05 0 6.67 0 3.93 2.74 3.93 6.12c0 .49.06.96.17 1.42C1.63 8.3.01 9.77.01 11.4c0 2.41 3.38 4.37 7.55 4.37 1.11 0 2.17-.14 3.15-.39.98 1.06 2.07 1.68 3.25 1.68 3.38 0 6.12-2.74 6.12-6.12 0-.49-.06-.96-.17-1.42 2.48-.76 4.1-2.23 4.1-3.86zm-13.95 2.12c-2.92 0-5.3-1.25-5.3-2.78 0-1.29 1.7-2.4 4.12-2.71a10.96 10.96 0 0 0-.12 1.61c0 1.5.41 2.92 1.13 4.11-.47.22-.96.38-1.45.38zm3.95-6.24c0-2.22 1.8-4.02 4.02-4.02s4.02 1.8 4.02 4.02-1.8 4.02-4.02 4.02-4.02-1.8-4.02-4.02z"/></svg>Tailwind CSS</span>
            </div>
          </motion.div>

          {/* CIFAR-10 Image Classifier */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" 
                  alt="Neural Network Architecture Visualization" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Computer Vision</span>
                <a href="https://github.com/misthi25/cifar10-image-classifier" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/cifar10-image-classifier" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">CIFAR-10 Classifier</h3>
              </a>
              <p className="text-pink-100/60 text-base font-medium leading-relaxed">
                Machine learning model designed to pre-process, categorize, and identify accurate image arrays across complex item classes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#3776AB]"><path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.89h3.69c.93 0 1.66.73 1.66 1.65v3.13c0 .93-.73 1.66-1.66 1.66h-.57c-.63 0-1.14-.51-1.14-1.14V7.53c0-.93-.74-1.66-1.66-1.66h-5.32c-.92 0-1.66-.73-1.66-1.66V2.32c0-.92.74-1.65 1.66-1.65h3.33zM7.5 5.25c.63 0 1.14.51 1.14 1.14v2.49c0 .93.74 1.66 1.66 1.66h5.32c.92 0 1.66.73 1.66 1.66v2.49c0 .63-.51 1.14-1.14 1.14H11.1c-.93 0-1.66-.73-1.66-1.66V11.1c0-.93-.74-1.66-1.66-1.66H4.66c-.63 0-1.14-.51-1.14-1.14V5.25h4zM4.66 12.82c.92 0 1.66.73 1.66 1.65v3.14c0 .92.74 1.65 1.66 1.65h5.32c.92 0 1.66.74 1.66 1.66v1.94c0 .92-.74 1.66-1.66 1.66H6.48c-.93 0-1.66-.74-1.66-1.66v-2.89H1.13c-.93 0-1.66-.74-1.66-1.66v-3.13c0-.92.73-1.66 1.66-1.66h3.53z"/></svg>
                <span>Python</span>
              </span>
              <span>—</span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#EE4C2C]"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.116 4.92c1.787 0 3.245 1.458 3.245 3.245 0 1.787-1.458 3.244-3.245 3.244-1.787 0-3.244-1.457-3.244-3.244 0-1.787 1.457-3.245 3.244-3.245zm0 8.013c2.793 0 5.291 1.545 6.467 3.864H5.65c1.176-2.32 3.673-3.864 6.466-3.864z"/></svg>
                <span>PyTorch</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH INTERACTIVE SECTION */}
      <section id="skills" className="max-w-5xl mx-auto px-6 pt-32">
        <div className="border-t border-purple-900/20 pt-12 flex flex-col items-center">
          
          <div className="max-w-2xl w-full mx-auto space-y-16">
            {/* Languages Layout Row */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-10">Languages</h2>
              <div className="flex flex-wrap gap-12 justify-center items-center">
                {languages.map((lang, idx) => (
                  <a 
                    key={idx} 
                    href={lang.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center gap-3 group transition-all duration-200"
                  >
                    {lang.icon}
                    <span className="text-sm font-sans font-medium text-pink-200/50 group-hover:text-pink-300 transition-colors mt-2">{lang.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools Layout Row */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-10">Frameworks & Tools</h2>
              <div className="flex flex-wrap gap-12 justify-center items-center">
                {frameworksAndTools.map((tool, idx) => (
                  <a 
                    key={idx} 
                    href={tool.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center gap-3 group transition-all duration-200"
                  >
                    {tool.icon}
                    <span className="text-sm font-sans font-medium text-pink-200/50 group-hover:text-pink-300 transition-colors mt-2">{tool.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Clean Certification Row */}
            <div className="text-center pt-8">
              <h3 className="text-sm font-sans uppercase tracking-wider text-pink-400/50 mb-6">Industry Credentials</h3>
              <div className="flex gap-4 justify-center flex-wrap text-sm font-medium font-sans">
                <span className="px-4 py-2 bg-neutral-900/40 text-white font-semibold rounded-xl border border-purple-900/20 shadow-lg backdrop-blur-sm">
                  Deloitte Australia — Data Analytics
                </span>
                <span className="px-4 py-2 bg-neutral-900/40 text-white font-semibold rounded-xl border border-purple-900/20 shadow-lg backdrop-blur-sm">
                  IBM — AI Fundamentals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 mt-32 pt-8 border-t border-purple-900/20 text-center text-sm text-pink-200/30 font-sans">
        © {new Date().getFullYear()} Misthi Pandey.
      </footer>
    </div>
  );
}