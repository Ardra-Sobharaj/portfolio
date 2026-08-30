import { Github, Play } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: '2D Graphics Shapes - Mini Project',
      tag: 'Academic Mini Project',
      tech: ['C Programming', 'OpenGL / GLUT', 'Computer Graphics'],
      description:
        'A mini project exploring the generation and rendering of 2D geometric shapes using C and OpenGL/GLUT, with implementations of basic geometric transformations.',
      features: [
        'Rendering of 2D geometric shapes',
        'Implementation of translation, scaling, and rotation',
        'Coordinate-based shape generation',
        'Exploration of basic computer graphics concepts',
      ],
      github: 'https://github.com/Ardra-Sobharaj/2d-graphics-shapes',
      demo: '',
    },
    {
      title: 'Smart Door Lock System',
      tag: 'Team Project',
      tech: ['Arduino', 'Keypad', 'LCD', 'Servo Motor'],
      description:
        'A team-based Arduino project that implements a password-based door authentication system using a keypad, LCD display, buzzer, and servo motor.',
      features: [
        'Password-based authentication',
        'Keypad input and LCD feedback',
        'Servo motor-based door control',
        'Buzzer-based system feedback',
      ],
      github: '',
      demo: '',
    },
    {
      title: 'Personal Portfolio',
      tag: 'Personal Project',
      tech: ['React', 'TypeScript', 'Vite'],
      description:
        'A personal portfolio website created to showcase my education, skills, projects, and learning journey.',
      features: [
        'Responsive portfolio interface',
        'Light beige and burgundy visual theme',
        'Education, skills, and project sections',
        'Deployed using Vercel',
      ],
      github: 'https://github.com/Ardra-Sobharaj/portfolio',
      demo:
        'https://portfolio-7vzc53lx3-ardra-sobharaj-s-projects.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#F5EFE6] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1F2A]">
            Projects
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#6B1F2A] to-[#8A4A55] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#6B1F2A]/15 bg-[#FBF8F2] glass hover:border-[#6B1F2A]/35 hover:-translate-y-1 transition-all duration-300"
            >
              <div>

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

                  <span className="w-fit px-3 py-1 rounded-full text-xs font-semibold bg-[#6B1F2A]/10 text-[#6B1F2A] border border-[#6B1F2A]/20">
                    {proj.tag}
                  </span>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 rounded bg-[#6B1F2A]/5 text-[11px] font-medium text-[#6B1F2A]/75 border border-[#6B1F2A]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#6B1F2A] mb-3">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B1F2A]/70 text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B1F2A]/60">
                    Core Implementations
                  </h4>

                  <ul className="space-y-2 text-sm text-[#6B1F2A]/70">
                    {proj.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-start"
                      >
                        <span className="mr-2 text-[#6B1F2A]">
                          ✔
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-5 mt-auto border-t border-[#6B1F2A]/10 pt-4">

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-xs font-semibold text-[#6B1F2A]/75 hover:text-[#4A1720] transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1.5" />
                    Code Repository
                  </a>
                )}

                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-xs font-semibold text-[#6B1F2A]/75 hover:text-[#4A1720] transition-colors"
                  >
                    <Play className="w-4 h-4 mr-1.5" />
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
