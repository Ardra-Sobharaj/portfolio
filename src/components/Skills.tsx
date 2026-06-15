import { Code, GitPullRequest, Binary, PenTool, Cpu, FileJson } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5 text-cyan-500" />,
      skills: [
        { name: 'C Programming', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 60 },
      ],
    },
    {
      title: 'Core Concepts',
      icon: <Binary className="w-5 h-5 text-violet-500" />,
      skills: [
        { name: 'Problem Solving', level: 85 },
        { name: 'Algorithms & Logic', level: 75 },
        { name: 'Linear Algebra & Math', level: 70 },
      ],
    },
    {
      title: 'Tools & Version Control',
      icon: <GitPullRequest className="w-5 h-5 text-emerald-500" />,
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Jupyter Notebook', level: 70 },
      ],
    },
  ];

  const conceptualStrengths = [
    { name: 'Data Visualization', icon: <PenTool className="w-4 h-4" /> },
    { name: 'Algorithm Optimization', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Structured Code Design', icon: <FileJson className="w-4 h-4" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#0c1220] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-light-card dark:bg-dark-card glass flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                  {category.icon}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress bar wrapper */}
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-cyan to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Strengths Panel */}
        <div className="p-6 rounded-xl border border-slate-200/40 dark:border-slate-800/40 bg-light-card/40 dark:bg-dark-card/40 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-6">
            Strengths & Methodologies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {conceptualStrengths.map((strength, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm text-sm font-medium hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-colors"
              >
                <span className="text-cyan-500">{strength.icon}</span>
                <span>{strength.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
