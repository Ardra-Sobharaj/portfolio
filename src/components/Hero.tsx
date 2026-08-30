import { ArrowRight, Code, Cpu, Server } from 'lucide-react';
import profilePhoto from '../assets/profile.jpeg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#F5EFE6]">

      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg
          className="absolute right-0 top-0 w-full md:w-1/2 h-full max-h-[800px] text-[#6B1F2A]/10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="grid-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="currentColor"
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="M0,0 L100,0 L100,100 Z"
            fill="url(#grid-grad)"
          />

          <line
            x1="20"
            y1="20"
            x2="80"
            y2="80"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeDasharray="1,1"
          />

          <line
            x1="80"
            y1="20"
            x2="20"
            y2="80"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeDasharray="2,2"
          />

          <circle
            cx="50"
            cy="50"
            r="1"
            fill="currentColor"
            className="shape-bounce"
          />

          <circle
            cx="20"
            cy="20"
            r="1.5"
            fill="currentColor"
          />

          <circle
            cx="80"
            cy="80"
            r="2"
            fill="currentColor"
          />

          <circle
            cx="80"
            cy="20"
            r="1"
            fill="currentColor"
          />

          <circle
            cx="20"
            cy="80"
            r="1"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Left column */}
        <div className="md:col-span-7 space-y-6">

          {/* Introduction Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#6B1F2A]/30 bg-[#6B1F2A]/10 text-[#6B1F2A] text-sm font-medium">
            <Cpu className="w-4 h-4" />
            <span>Aspiring AI & Data Science Student</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#6B1F2A]">
            Hi, I'm{' '}
            <span className="text-[#6B1F2A]">
              Ardra Sobharaj
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#6B1F2A] max-w-2xl leading-relaxed">
            I am a 3rd-semester B.Tech Artificial Intelligence & Data Science
            student at REVA University, focused on strengthening my programming
            skills, learning Data Structures and Algorithms, and exploring
            software development, AI/ML, and data science.
          </p>

          {/* Quick Academic Card */}
          <div className="p-4 rounded-xl border border-[#6B1F2A]/25 bg-[#FBF8F2] glass flex flex-wrap gap-4 items-center justify-around md:justify-start">

            {/* University */}
            <div className="flex items-center space-x-2 text-[#6B1F2A]">
              <Server className="w-5 h-5 text-[#6B1F2A]" />

              <div>
                <div className="text-xs text-[#6B1F2A]/60">
                  University
                </div>

                <div className="text-sm font-semibold text-[#6B1F2A]">
                  REVA University
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-[#6B1F2A]/20 hidden sm:block"></div>

            {/* Degree */}
            <div className="flex items-center space-x-2 text-[#6B1F2A]">
              <Code className="w-5 h-5 text-[#6B1F2A]" />

              <div>
                <div className="text-xs text-[#6B1F2A]/60">
                  Degree
                </div>

                <div className="text-sm font-semibold text-[#6B1F2A]">
                  B.Tech AI & Data Science
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-[#6B1F2A]/20 hidden sm:block"></div>

            {/* Current Status */}
            <div className="flex items-center space-x-2 text-[#6B1F2A]">
              <Cpu className="w-5 h-5 text-[#6B1F2A]" />

              <div>
                <div className="text-xs text-[#6B1F2A]/60">
                  Current Status
                </div>

                <div className="text-sm font-semibold text-[#6B1F2A]">
                  3rd Semester
                </div>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">

            {/* View Projects */}
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#6B1F2A] text-[#F5EFE6] font-medium hover:bg-[#4A1720] transition-colors shadow-lg shadow-[#6B1F2A]/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#6B1F2A]/40 text-[#6B1F2A] font-medium hover:bg-[#6B1F2A]/10 transition-colors"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right column - Profile */}
        <div className="md:col-span-5 flex justify-center">

          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">

            {/* Burgundy glow */}
            <div className="absolute inset-0 rounded-full bg-[#6B1F2A]/10 blur-3xl opacity-60"></div>

            {/* Outer orbit */}
            <div className="absolute inset-4 rounded-full border border-[#6B1F2A]/20 flex items-center justify-center animate-spin-slow">

              <div className="w-4 h-4 rounded-full bg-[#6B1F2A] absolute -top-2 left-1/2 -ml-2"></div>

            </div>

            {/* Inner orbit */}
            <div className="absolute inset-12 rounded-full border border-[#8A4A55]/20 flex items-center justify-center animate-reverse-spin">

              <div className="w-3.5 h-3.5 rounded-full bg-[#8A4A55] absolute -bottom-1.5 left-1/3"></div>

            </div>

            {/* Profile photo */}
            <div className="absolute inset-20 rounded-full bg-[#6B1F2A] p-1 shadow-2xl">

              <div className="w-full h-full rounded-full overflow-hidden bg-[#F5EFE6]">

                <img
                  src={profilePhoto}
                  alt="Ardra Sobharaj"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
