import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-[#0c1220] py-8 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p>© {currentYear} Ardra Sobharaj. All rights reserved.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            B.Tech in Artificial Intelligence & Data Science | REVA University
          </p>
        </div>

        {/* Center/Right Side: Tech stack info */}
        <div className="text-center md:text-right space-y-2">
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://github.com/Ardra-Sobharaj"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ardra-sobharaj"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ardra.sobharaj@gmail.com"
              className="hover:text-cyan-500 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Built with React, TypeScript & Tailwind CSS v4.
          </p>
        </div>

      </div>
    </footer>
  );
}
