"use client";

import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, ExternalLink, Award, Code, BookOpen } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './components/Icons';

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden relative pb-24">
      
      {/* Soft Pink Atmosphere Glows for Light Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-pink-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-50/50 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER / NAV */}
      <header className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base font-mono uppercase tracking-widest text-pink-600 font-semibold"
        >
          misthi.dev
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-8 text-sm text-neutral-500 font-medium"
        >
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-pink-600 transition-colors">Skills</a>
        </motion.nav>
      </header>

      {/* MAIN HERO PROFILE SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-6 pt-12 text-center relative z-10 flex flex-col items-center">
        
        {/* Presentable Top-Centered Portrait Card */}
        <div className="relative w-64 h-80 bg-neutral-50 border border-neutral-200 rounded-2xl p-3 shadow-xl overflow-hidden mb-8">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img 
              src="/WhatsApp Image 2026-05-23 at 10.51.13 AM.jpeg" 
              alt="Misthi Pandey" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Elevated Presentable Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-light tracking-tight text-neutral-900 mb-4"
        >
          Misthi Pandey
        </motion.h1>

        {/* B.Tech Placement Line */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-pink-600 font-mono text-sm uppercase tracking-widest max-w-lg mb-4 font-medium"
        >
          B.Tech Computer Science & Engineering @ VIT Chennai
        </motion.p>

        {/* Introduction Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-600 text-base md:text-lg max-w-xl font-light leading-relaxed mb-8"
        >
          Bridging the gap between robust software systems and machine learning to build secure, fluid, and scalable interactive applications.
        </motion.p>

        {/* Social Links Panel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center justify-center"
        >
          <a href="mailto:misthikpandey@gmail.com" className="bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-lg hover:-translate-y-0.5">
            <Mail size={16} /> Contact Me
          </a>
          <a href="https://linkedin.com/in/misthi25" target="_blank" rel="noreferrer" className="p-3 bg-neutral-50 border border-neutral-200 rounded-full text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all">
            <LinkedInIcon size={18} />
          </a>
          <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="p-3 bg-neutral-50 border border-neutral-200 rounded-full text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all">
            <GitHubIcon size={18} />
          </a>
        </motion.div>
      </section>

      {/* CURATED PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pt-32">
        <div className="border-t border-neutral-200 pt-12 mb-12 flex justify-between items-end">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2">Selected Work</span>
            <h2 className="text-3xl font-light tracking-tight text-neutral-900">Featured Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* EcoRoute Project */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-50/50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-neutral-50 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Catchy Project Image Banner */}
              <div className="w-full h-48 rounded-xl bg-neutral-200 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
                  alt="EcoRoute System Architecture" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full">Web App / Sustainability</span>
                <a href="https://github.com/misthi25/Ecoroute" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/Ecoroute" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-600 transition-colors">
                <h3 className="text-2xl font-light mb-3 text-neutral-900">EcoRoute Architecture</h3>
              </a>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                An eco-conscious routing and navigation solution designed to calculate and analyze resource optimization paths.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-3 text-xs text-neutral-400 font-mono">
              <span>TypeScript</span> — <span>Mapping API</span>
            </div>
          </motion.div>

          {/* TCP Throughput Analysis */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-50/50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-neutral-50 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Catchy Project Image Banner */}
              <div className="w-full h-48 rounded-xl bg-neutral-200 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" 
                  alt="TCP Data Flow Visualization" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full">Networking / Blog</span>
                <a href="https://github.com/misthi25/TCP-Throughput-Analysis" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/TCP-Throughput-Analysis" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-600 transition-colors">
                <h3 className="text-2xl font-light mb-3 text-neutral-900">TCP Throughput Analysis</h3>
              </a>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Comprehensive parameters simulation exploring system network thresholds, published as an in-depth technical analysis piece on Blogger.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-3 text-xs text-neutral-400 font-mono">
              <span>Network Simulation</span> — <span>Research</span>
            </div>
          </motion.div>

          {/* Microsoft Club Website */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-50/50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-neutral-50 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Catchy Project Image Banner */}
              <div className="w-full h-48 rounded-xl bg-neutral-200 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
                  alt="Modern Minimalist User Interface" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full">Production UI</span>
                <a href="https://github.com/misthi25/mic-official-website-25" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/mic-official-website-25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-600 transition-colors">
                <h3 className="text-2xl font-light mb-3 text-neutral-900">MIC Official Club Platform</h3>
              </a>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Contributed structural frontend layout components and interaction spaces for the official Microsoft Innovation Club platform at VIT Chennai.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-3 text-xs text-neutral-400 font-mono">
              <span>Next.js</span> — <span>Tailwind CSS</span>
            </div>
          </motion.div>

          {/* CIFAR-10 Image Classifier */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-50/50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-neutral-50 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Catchy Project Image Banner */}
              <div className="w-full h-48 rounded-xl bg-neutral-200 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" 
                  alt="Neural Network Architecture Visualization" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full">Computer Vision</span>
                <a href="https://github.com/misthi25/cifar10-image-classifier" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/cifar10-image-classifier" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-600 transition-colors">
                <h3 className="text-2xl font-light mb-3 text-neutral-900">CIFAR-10 Classifier</h3>
              </a>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Machine learning model designed to pre-process, categorize, and identify accurate image arrays across complex item classes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-3 text-xs text-neutral-400 font-mono">
              <span>Python</span> — <span>PyTorch</span>
            </div>
          </motion.div>

          {/* VERITY Multi-Agent Framework */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-50/50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-neutral-50 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-200 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop" 
                  alt="Data Integrity System" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full">Next.js / Framework</span>
                <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><ExternalLink size={18} /></a>
              </div>
              <h3 className="text-2xl font-light mb-3 text-neutral-900 group-hover:text-pink-600 transition-colors">VERITY Multi-Agent Framework</h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Designed a coordinated multi-agent AI framework crafted specifically for scalable, high-accuracy misinformation detection and validation workflows.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-3 text-xs text-neutral-400 font-mono">
              <span>Python</span> — <span>AI Ecosystem</span>
            </div>
          </motion.div>

          {/* Dropout Prediction System */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-50/50 border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 hover:bg-neutral-50 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-200 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" 
                  alt="Predictive Analytics Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-full">Machine Learning</span>
                <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><ExternalLink size={18} /></a>
              </div>
              <h3 className="text-2xl font-light mb-3 text-neutral-900 group-hover:text-pink-600 transition-colors">Dropout Prediction System</h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                An advanced predictive model leveraging student academic markers and behavioral datasets to intercept and minimize educational dropouts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex gap-3 text-xs text-neutral-400 font-mono">
              <span>PyTorch</span> — <span>Data Science</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS & STACK */}
      <section id="skills" className="max-w-5xl mx-auto px-6 pt-32">
        <div className="border-t border-neutral-200 pt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4 text-pink-600">
              <Code size={18} />
              <h3 className="text-lg font-medium text-neutral-900">Languages & Web</h3>
            </div>
            <ul className="space-y-2 text-neutral-600 font-light text-sm">
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>Java / C++</span> <span className="text-neutral-400">Core</span></li>
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>Python</span> <span className="text-neutral-400">Advanced</span></li>
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>Next.js / React</span> <span className="text-neutral-400">Frontend</span></li>
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>JavaScript</span> <span className="text-neutral-400">ES6+</span></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4 text-pink-600">
              <BookOpen size={18} />
              <h3 className="text-lg font-medium text-neutral-900">Databases & Tools</h3>
            </div>
            <ul className="space-y-2 text-neutral-600 font-light text-sm">
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>MongoDB</span> <span className="text-neutral-400">NoSQL</span></li>
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>PyTorch</span> <span className="text-neutral-400">Deep Learning</span></li>
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>Git & GitHub</span> <span className="text-neutral-400">Version Control</span></li>
              <li className="flex justify-between border-b border-neutral-100 pb-1"><span>Data Structures</span> <span className="text-neutral-400">Algorithms</span></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4 text-pink-600">
              <Award size={18} />
              <h3 className="text-lg font-medium text-neutral-900">Certifications</h3>
            </div>
            <ul className="space-y-3 text-neutral-600 font-light text-sm">
              <li>
                <p className="text-neutral-900 text-xs font-mono font-semibold">Deloitte Australia</p>
                <p className="text-neutral-400 text-xs">Data Analytics Simulation</p>
              </li>
              <li>
                <p className="text-neutral-900 text-xs font-mono font-semibold">IBM Certificate</p>
                <p className="text-neutral-400 text-xs">AI Fundamentals</p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CLEAN FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 mt-32 pt-8 border-t border-neutral-200 text-center text-xs text-neutral-400 font-mono">
        © {new Date().getFullYear()} Misthi Pandey.
      </footer>
    </div>
  );
}