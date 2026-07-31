"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Briefcase, 
  Code2, 
  Database, 
  Network, 
  MessagesSquare
} from 'lucide-react';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiScikitlearn,
  SiOpencv,
  SiSqlite,
  SiMongodb,
  SiPytorch,
  SiLinux
} from 'react-icons/si';
import { GitHubIcon, LinkedInIcon } from './components/Icons';

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      icon: <SiPython size={36} color="#3776AB" className="transition-transform group-hover:scale-110 duration-200" />
    },
    { 
      name: "C++", 
      url: "https://learn.microsoft.com/en-us/cpp/",
      icon: <SiCplusplus size={36} color="#00599C" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "C",
      url: "https://en.cppreference.com/w/c",
      icon: <SiC size={36} color="#A8B9CC" className="transition-transform group-hover:scale-110 duration-200" />
    },
    { 
      name: "JavaScript", 
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <SiJavascript size={36} color="#F7DF1E" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/docs/",
      icon: <SiTypescript size={36} color="#3178C6" className="transition-transform group-hover:scale-110 duration-200" />
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
      name: "Node.js",
      url: "https://nodejs.org/en/docs",
      icon: <SiNodedotjs size={36} color="#339933" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "Express",
      url: "https://expressjs.com/",
      icon: <SiExpress size={36} color="#ffffff" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "Flask",
      url: "https://flask.palletsprojects.com/",
      icon: <SiFlask size={36} color="#ffffff" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "FastAPI",
      url: "https://fastapi.tiangolo.com/",
      icon: <SiFastapi size={36} color="#009688" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "HTML5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: <SiHtml5 size={36} color="#E34F26" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "CSS3",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: <SiCss size={36} color="#1572B6" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/docs",
      icon: <SiTailwindcss size={36} color="#06B6D4" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "Git",
      url: "https://git-scm.com/doc",
      icon: <SiGit size={36} color="#F05032" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "GitHub",
      url: "https://github.com/misthi25",
      icon: <GitHubIcon size={36} className="text-white transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "Postman",
      url: "https://www.postman.com/",
      icon: <SiPostman size={36} color="#FF6C37" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "Linux/Unix",
      url: "https://www.kernel.org/",
      icon: <SiLinux size={36} color="#FCC624" className="transition-transform group-hover:scale-110 duration-200" />
    }
  ];

  const aiMlAndData = [
    { 
      name: "PyTorch", 
      url: "https://pytorch.org/docs/",
      icon: <SiPytorch size={36} color="#EE4C2C" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "scikit-learn",
      url: "https://scikit-learn.org/stable/",
      icon: <SiScikitlearn size={36} color="#F7931E" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "OpenCV",
      url: "https://opencv.org/",
      icon: <SiOpencv size={36} color="#5C3EE8" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "NLP",
      url: "https://en.wikipedia.org/wiki/Natural_language_processing",
      icon: <MessagesSquare size={36} className="text-pink-300 transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "RAG",
      url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
      icon: <Network size={36} className="text-pink-300 transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "LLMs",
      url: "https://openai.com/",
      icon: (
        <svg role="img" viewBox="0 0 24 24" className="w-9 h-9 fill-white transition-transform group-hover:scale-110 duration-200">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7712-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.746-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.535-3.0137l.142.0852 4.783 2.7582a.7796.7796 0 0 0 .7855 0l5.8333-3.3693v2.332a.0805.0805 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3423 8.587a4.4613 4.4613 0 0 1 2.3366-1.9733V12.26a.7843.7843 0 0 0 .3928.6813l5.8333 3.3693-2.02 1.1686a.0758.0758 0 0 1-.0711 0l-4.8303-2.7913A4.4944 4.4944 0 0 1 2.3423 8.587zm16.5963 3.8558L13.1053 9.0735l2.02-1.1686a.0758.0758 0 0 1 .0711 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6726a.7938.7938 0 0 0-.3916-.685zm2.0107-3.0231l-.1419-.0852-4.7736-2.7582a.7796.7796 0 0 0-.7855 0L9.415 9.9457V7.6137a.0805.0805 0 0 1 .0332-.0615l4.8303-2.7913a4.4992 4.4992 0 0 1 6.6802 4.6613zM8.3061 12.863l-2.02-1.1638a.0805.0805 0 0 1-.038-.052V6.0645a4.504 4.504 0 0 1 7.3757-3.4537l-.1419.0804-4.7783 2.7582a.7938.7938 0 0 0-.3927.6813v6.7323zm1.1458-2.6186l2.547-1.47 2.547 1.47v2.94l-2.547 1.47-2.547-1.47z"/>
        </svg>
      )
    },
    {
      name: "Vector DBs",
      url: "https://en.wikipedia.org/wiki/Vector_database",
      icon: <Database size={36} className="text-pink-300 transition-transform group-hover:scale-110 duration-200" />
    }
  ];

  const databases = [
    { 
      name: "MongoDB", 
      url: "https://www.mongodb.com/docs/",
      icon: <SiMongodb size={36} color="#47A248" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "SQLite",
      url: "https://www.sqlite.org/docs.html",
      icon: <SiSqlite size={36} color="#003B57" className="transition-transform group-hover:scale-110 duration-200" />
    },
    {
      name: "SQL",
      url: "https://en.wikipedia.org/wiki/SQL",
      icon: <Database size={36} className="text-blue-300 transition-transform group-hover:scale-110 duration-200" />
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#140b13] text-[#f7f3f6] font-serif selection:bg-pink-200 selection:text-neutral-900 overflow-x-hidden relative pb-24">
      
      {/* Atmosphere Glows */}
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
          <a href="#experience" className="hover:text-pink-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-pink-300 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-pink-300 transition-colors">Skills</a>
        </motion.nav>
      </header>

      {/* MAIN HERO PROFILE SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-6 pt-12 text-center relative z-10 flex flex-col items-center">
        
        {/* Top Portrait Card */}
        <div className="relative w-64 h-80 bg-neutral-900/50 border border-purple-900/30 rounded-2xl p-3 shadow-2xl overflow-hidden mb-8">
          <div className="w-full h-full rounded-xl overflow-hidden relative">
            <img 
              src="/image.png" 
              alt="Misthi Pandey" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-normal tracking-tight text-white mb-4"
        >
          Misthi Pandey
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-pink-400 font-sans text-xs uppercase tracking-widest max-w-lg mb-5 font-semibold"
        >
          B.Tech Computer Science & Engineering @ VIT Chennai • CGPA 9.08
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-pink-100/70 text-lg max-w-xl font-light italic leading-relaxed mb-8"
        >
          "Bridging the gap between robust software systems and machine learning to build secure, fluid, and scalable interactive applications."
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center justify-center font-sans"
        >
          <a href="mailto:misthikpandey@gmail.com" className="bg-white text-neutral-950 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-pink-50 transition-all shadow-md hover:-translate-y-0.5">
            <Mail size={16} /> Contact Me
          </a>
          <a href="https://linkedin.com/in/misthi25" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900/40 border border-purple-900/30 rounded-full text-pink-100/80 hover:bg-purple-950/40 hover:text-white transition-all shadow-sm">
            <LinkedInIcon size={18} />
          </a>
          <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900/40 border border-purple-900/30 rounded-full text-pink-100/80 hover:bg-purple-950/40 hover:text-white transition-all shadow-sm">
            <GitHubIcon size={18} />
          </a>
        </motion.div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="max-w-4xl mx-auto px-6 pt-24">
        <div className="border-t border-purple-900/20 pt-12 mb-8">
          <span className="text-xs font-sans text-pink-400/60 uppercase tracking-widest block mb-2">Industry Experience</span>
          <h2 className="text-3xl font-normal tracking-tight text-white flex items-center gap-3">
            <Briefcase size={28} className="text-pink-400" /> Work Experience
          </h2>
        </div>

        <div className="bg-neutral-900/20 border border-purple-900/20 rounded-2xl p-8 hover:border-purple-900/40 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 font-sans">
            <div>
              <h3 className="text-2xl text-white font-normal">Web Developer Intern</h3>
              <p className="text-pink-400 font-medium text-sm">Labdox</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-purple-950/50 border border-purple-900/30 text-pink-300 rounded-full w-fit">
              June 2026 – July 2026
            </span>
          </div>

          <ul className="space-y-3 text-pink-100/70 font-sans text-sm font-light leading-relaxed list-disc list-inside">
            <li>Owned end-to-end debugging of critical defects across authentication, dashboard, and transaction modules of Swarajya (fintech platform), applying systematic root-cause analysis.</li>
            <li>Conducted structured QA audits across eight modules, documenting findings with a prioritized remediation roadmap to drive backlog reduction.</li>
            <li>Built and tested RESTful API integrations in Node.js/Express with robust error handling and resilience at scale.</li>
          </ul>

          <div className="mt-6 pt-4 border-t border-purple-900/10 flex flex-wrap gap-2 text-xs font-mono text-pink-300/60">
            <span className="px-3 py-1 bg-neutral-900/60 rounded-md border border-purple-900/20">JavaScript</span>
            <span className="px-3 py-1 bg-neutral-900/60 rounded-md border border-purple-900/20">React</span>
            <span className="px-3 py-1 bg-neutral-900/60 rounded-md border border-purple-900/20">Node.js</span>
            <span className="px-3 py-1 bg-neutral-900/60 rounded-md border border-purple-900/20">REST APIs</span>
          </div>
        </div>
      </section>

      {/* CURATED PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pt-24">
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
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Multi-Agent AI / RAG</span>
                <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">VERITY Detection System</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Multi-agent architecture validating claims against a RAG knowledge base via vector similarity search; engineered agent interaction protocols for optimal factual accuracy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center">
              <span>Python</span> — <span>LLMs</span> — <span>RAG</span> — <span>NLP</span>
            </div>
          </motion.div>

          {/* Multilingual Customer Support Chatbot */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop" 
                  alt="Chatbot Neural Interface" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">FastAPI / Voice AI</span>
                <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">Multilingual Voice Chatbot</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Built a multilingual chatbot featuring RAG context retrieval, Speech-to-Text input, and TTS output backed by session-based state management.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center">
              <span>FastAPI</span> — <span>Python</span> — <span>Speech-to-Text</span> — <span>TTS</span>
            </div>
          </motion.div>

          {/* EmotiSense */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=600&auto=format&fit=crop" 
                  alt="Behavioral Monitoring Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Behavioral AI / Computer Vision</span>
                <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">EmotiSense Framework</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Real-time interaction telemetry pipeline fusing a Random Forest classifier with rule-based heuristics to infer cognitive state from telemetry and visual cues.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans items-center">
              <span>Python</span> — <span>OpenCV</span> — <span>Flask</span> — <span>SQLite</span>
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
                Full-stack platform designed with JWT-based authentication, dynamic product cataloging, and reliable transaction endpoints under concurrent load.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans font-semibold items-center">
              <span>React</span> — <span>Node.js</span> — <span>MongoDB</span> — <span>JWT</span>
            </div>
          </motion.div>

          {/* EcoRoute Architecture */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-neutral-900/20 border border-purple-900/10 rounded-2xl p-6 shadow-sm hover:border-purple-900/30 hover:bg-purple-950/10 transition-all group flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-full h-48 rounded-xl bg-neutral-900/40 mb-6 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
                  alt="EcoRoute Navigation Systems" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-4 font-sans">
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Sustainability / Algorithms</span>
                <a href="https://github.com/misthi25/Ecoroute" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/Ecoroute" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">EcoRoute Navigation</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Eco-conscious routing and navigation solution designed to calculate and analyze resource optimization paths.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans">
              <span>TypeScript</span> — <span>Mapping API</span> — <span>Optimization</span>
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
                <span className="text-xs font-mono px-3 py-1 bg-purple-950/40 border border-purple-900/20 text-pink-300 rounded-full">Networking / Research</span>
                <a href="https://github.com/misthi25/TCP-Throughput-Analysis" target="_blank" rel="noreferrer" className="text-pink-400/60 hover:text-white transition-colors"><ExternalLink size={18} /></a>
              </div>
              <a href="https://github.com/misthi25/TCP-Throughput-Analysis" target="_blank" rel="noreferrer" className="inline-block group-hover:text-pink-400 transition-colors">
                <h3 className="text-2xl font-normal mb-3 text-white">TCP Throughput Analysis</h3>
              </a>
              <p className="text-pink-100/60 text-base font-light leading-relaxed">
                Comprehensive simulation exploring network thresholds, congestion window behavior, and protocol parameters.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans">
              <span>Network Simulation</span> — <span>TCP/IP</span> — <span>ns-3</span>
            </div>
          </motion.div>

          {/* Dropout Prediction Engine */}
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
                Custom Machine Learning classification model utilizing academic benchmarks and behavioral variables to identify risk factors early.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans">
              <span>Python</span> — <span>scikit-learn</span> — <span>Analytics</span>
            </div>
          </motion.div>

          {/* Bank Management Core */}
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
                Built a secure desktop app supporting account generation, tracking routines, and safe PIN authentication frameworks using OOP practices.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-900/10 flex gap-3 text-xs text-pink-400/40 font-sans">
              <span>Java Core</span> — <span>OOP</span> — <span>Security</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TECHNICAL SKILLS GRID */}
      <section id="skills" className="max-w-5xl mx-auto px-6 pt-24">
        <div className="border-t border-purple-900/20 pt-12 flex flex-col items-center">
          
          <div className="max-w-3xl w-full mx-auto space-y-16">
            
            {/* Languages Layout Row */}
            <div className="text-center">
              <h2 className="text-3xl font-normal tracking-tight text-white mb-10">Languages</h2>
              <div className="flex flex-wrap gap-10 justify-center items-center">
                {languages.map((lang, idx) => (
                  <a 
                    key={idx} 
                    href={lang.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center gap-3 group transition-all duration-200"
                  >
                    {lang.icon}
                    <span className="text-sm font-sans font-medium text-pink-200/50 group-hover:text-pink-300 transition-colors">{lang.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools Layout Row */}
            <div className="text-center">
              <h2 className="text-3xl font-normal tracking-tight text-white mb-10">Frameworks & Tools</h2>
              <div className="flex flex-wrap gap-10 justify-center items-center">
                {frameworksAndTools.map((tool, idx) => (
                  <a 
                    key={idx} 
                    href={tool.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center gap-3 group transition-all duration-200"
                  >
                    {tool.icon}
                    <span className="text-sm font-sans font-medium text-pink-200/50 group-hover:text-pink-300 transition-colors">{tool.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* AI / ML & Data Layout Row */}
            <div className="text-center">
              <h2 className="text-3xl font-normal tracking-tight text-white mb-10">AI / ML & Intelligence</h2>
              <div className="flex flex-wrap gap-10 justify-center items-center">
                {aiMlAndData.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center gap-3 group transition-all duration-200"
                  >
                    {item.icon}
                    <span className="text-sm font-sans font-medium text-pink-200/50 group-hover:text-pink-300 transition-colors">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Databases Layout Row */}
            <div className="text-center">
              <h2 className="text-3xl font-normal tracking-tight text-white mb-10">Databases</h2>
              <div className="flex flex-wrap gap-10 justify-center items-center">
                {databases.map((db, idx) => (
                  <a 
                    key={idx} 
                    href={db.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex flex-col items-center gap-3 group transition-all duration-200"
                  >
                    {db.icon}
                    <span className="text-sm font-sans font-medium text-pink-200/50 group-hover:text-pink-300 transition-colors">{db.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Industry Credentials & Metrics */}
            <div className="text-center pt-8">
              <h3 className="text-sm font-sans uppercase tracking-wider text-pink-400/50 mb-6">Certifications & Milestones</h3>
              <div className="flex gap-4 justify-center flex-wrap text-sm font-medium font-sans">
                <span className="px-4 py-2 bg-neutral-900/40 text-white font-semibold rounded-xl border border-purple-900/20 shadow-lg backdrop-blur-sm">
                  Deloitte Australia — Data Analytics
                </span>
                <span className="px-4 py-2 bg-neutral-900/40 text-white font-semibold rounded-xl border border-purple-900/20 shadow-lg backdrop-blur-sm">
                  IBM — AI Fundamentals
                </span>
                <span className="px-4 py-2 bg-neutral-900/40 text-white font-semibold rounded-xl border border-purple-900/20 shadow-lg backdrop-blur-sm">
                  LeetCode — 100+ Problems Solved
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 mt-32 pt-8 border-t border-purple-900/20 text-center text-sm text-pink-200/30 font-sans">
        © {new Date().getFullYear()} Misthi Pandey.
      </footer>
    </div>
  );
}