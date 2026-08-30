import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#6B1F2A]/15 bg-[#F5EFE6] py-8 text-[#6B1F2A]/70 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-[#6B1F2A]">
            © {currentYear} Ardra Sobharaj. All rights reserved.
          </p>

          <p className="text-xs text-[#6B1F2A]/60">
            B.Tech in Artificial Intelligence & Data Science | REVA University
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="text-center md:text-right space-y-2">

          <div className="flex justify-center md:justify-end space-x-4">

            <a
              href="https://github.com/Ardra-Sobharaj"
              target="_blank"
              rel="noreferrer"
              className="text-[#6B1F2A] hover:text-[#4A1720] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/ardra-sobharaj"
              target="_blank"
              rel="noreferrer"
              className="text-[#6B1F2A] hover:text-[#4A1720] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:ardra.sobharaj@gmail.com"
              className="text-[#6B1F2A] hover:text-[#4A1720] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>

          <p className="text-[11px] text-[#6B1F2A]/50">
            Built with React, TypeScript & Tailwind CSS v4.
          </p>

        </div>

      </div>
    </footer>
  );
}
