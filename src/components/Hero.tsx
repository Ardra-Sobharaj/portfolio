import { ArrowRight, Code, Cpu, Server } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
        <svg
          className="absolute right-0 top-0 w-full md:w-1/2 h-full max-h-[800px] text-cyan-500/10 dark:text-cyan-400/5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,0 L100,0 L100,100 Z" fill="url(#grid-grad)" />
          {/* Decorative lines representing connections/data */}
          <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1,1" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2,2" />
          <circle cx="50" cy="50" r="1" fill="currentColor" className="shape-bounce" />
          <circle cx="20" cy="20" r="1.5" fill="currentColor" />
          <circle cx="80" cy="80" r="2" fill="currentColor" />
          <circle cx="80" cy="20" r="1" fill="currentColor" />
          <circle cx="20" cy="80" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left column: Typography & Details */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <Cpu className="w-4 h-4 animate-spin-slow" />
            <span>Aspiring AI & Data Science Professional</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-cyan via-cyan-500 to-primary-violet bg-clip-text text-transparent">
              Ardra Sobharaj
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            I am a second-semester B.Tech Artificial Intelligence & Data Science student at REVA University. Passionate about technology, programming, problem-solving, and building smart software solutions.
          </p>

          {/* Quick Academic Card */}
          <div className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-light-card dark:bg-dark-card glass flex flex-wrap gap-4 items-center justify-around md:justify-start">
            <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
              <Server className="w-5 h-5 text-violet-500" />
              <div>
                <div className="text-xs text-slate-500">University</div>
                <div className="text-sm font-semibold">REVA University</div>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
            <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
              <Code className="w-5 h-5 text-cyan-500" />
              <div>
                <div className="text-xs text-slate-500">Degree</div>
                <div className="text-sm font-semibold">B.Tech AI & Data Science</div>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
            <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
              <Cpu className="w-5 h-5 text-emerald-500" />
              <div>
                <div className="text-xs text-slate-500">Current Status</div>
                <div className="text-sm font-semibold">2nd Semester</div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-cyan to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right column: Graphic Illustration */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">
            {/* Visual AI themed circle/network representation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-3xl opacity-60"></div>
            <div className="absolute inset-4 rounded-full border border-cyan-500/20 dark:border-cyan-500/10 flex items-center justify-center animate-spin-slow">
              <div className="w-4 h-4 rounded-full bg-cyan-500 absolute -top-2 left-1/2 -ml-2"></div>
            </div>
            <div className="absolute inset-12 rounded-full border border-violet-500/20 dark:border-violet-500/10 flex items-center justify-center animate-reverse-spin">
              <div className="w-3.5 h-3.5 rounded-full bg-violet-500 absolute -bottom-1.5 left-1/3"></div>
            </div>
            
            {/* The Central Profile Placeholder / Abstract Shape */}
            <div className="absolute inset-20 rounded-full bg-gradient-to-tr from-primary-cyan to-primary-violet p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white overflow-hidden relative">
                {/* AI / DS Binary background visual */}
                <div className="absolute inset-0 opacity-15 font-mono text-[9px] leading-tight select-none pointer-events-none break-all p-3 text-cyan-400">
                  010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101
                </div>
                {/* Visual Avatar Representation */}
                <svg
                  className="w-24 h-24 text-slate-300 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
