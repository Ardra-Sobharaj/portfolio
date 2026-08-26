import { Sparkles, BrainCircuit, Code, LineChart } from 'lucide-react';

export function LearningJourney() {
  const steps = [
    {
    phase: 'Phase 1: Foundations',
    status: 'Completed / Strengthening',
    icon: <Code className="w-5 h-5 text-cyan-500" />,
    title: 'Programming Fundamentals',
    description:
      'Building a strong programming foundation through C and Python while improving logical thinking, problem-solving, and understanding of core programming concepts.',
    focus: ['C Programming', 'Python', 'Problem Solving', 'Programming Fundamentals'],
    isActive: false,
  },
  {
    phase: 'Phase 2: DSA',
    status: 'Currently Learning',
    icon: <LineChart className="w-5 h-5 text-violet-500" />,
    title: 'Data Structures & Problem Solving',
    description:
      'Currently learning fundamental data structures and practicing problem solving through coding challenges. Focusing on understanding concepts and improving consistency rather than just solving large numbers of problems.',
    focus: ['Arrays', 'Strings', 'Linked Lists', 'Stacks', 'Sorting'],
    isActive: true,
  },
  {
    phase: 'Phase 3: Development',
    status: 'Exploring',
    icon: <Code className="w-5 h-5 text-emerald-500" />,
    title: 'Software Development',
    description:
      'Exploring software development through small projects and practical experimentation. Building familiarity with web technologies, Node.js, and databases while improving my ability to build and explain projects.',
    focus: ['HTML & CSS', 'JavaScript', 'Node.js', 'MySQL'],
    isActive: false,
  },
  {
    phase: 'Phase 4: AI & Data Science',
    status: 'Future Focus',
    icon: <BrainCircuit className="w-5 h-5 text-amber-500" />,
    title: 'Exploring AI & Data Science',
    description:
      'Planning to gradually explore data analysis, machine learning, and AI through structured learning and hands-on projects after strengthening my programming and problem-solving foundations.',
    focus: ['Data Analysis', 'Machine Learning', 'Statistics', 'AI Projects'],
    isActive: false,
  },
  ];

  return (
    <section id="learning-journey" className="py-24 bg-slate-50 dark:bg-[#0c1220] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Learning Journey
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A snapshot of what I have learned, what I am currently working on, and the areas I plan to explore next.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Roadmap Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                step.isActive
                  ? 'border-cyan-500/40 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.02] shadow-md shadow-cyan-500/5 ring-1 ring-cyan-500/30'
                  : 'border-slate-200/50 dark:border-slate-800/50 bg-light-card dark:bg-dark-card glass hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header Phase & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {step.phase}
                  </span>
                  
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    step.isActive
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    {step.status}
                  </span>
                </div>

                {/* Step Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Focus Tags */}
              <div className="border-t border-slate-150 dark:border-slate-800 pt-4 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Core Topics:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.focus.map((f, fIdx) => (
                    <span
                      key={fIdx}
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        step.isActive
                          ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                          : 'bg-slate-150 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
}
