import { Lightbulb, Code2, Target, BrainCircuit } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-cyan-500" />,
      title: 'Artificial Intelligence & DS',
      description: 'Drawn to AI & DS for its power to uncover insights from complex data structures and make systems intelligent.',
    },
    {
      icon: <Code2 className="w-6 h-6 text-violet-500" />,
      title: 'Programming Foundations',
      description: 'Strengthening programming fundamentals through C and Python, with a focus on writing clean, efficient code.',
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-500" />,
      title: 'Problem Solving',
      description: 'Enjoy breaking down complex problems into logical steps and designing systematic algorithms to solve them.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
      title: 'Continuous Growth',
      description: 'Actively participating in hands-on mini projects, technical communities, and self-directed coding courses.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#0c1220] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Description */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Building the Future with Code and Intelligence
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a second-semester Artificial Intelligence & Data Science student. My fascination with technology began with programming, and it has evolved into a deep interest in machine learning, data structures, and computer graphics.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently, I am building my technical core through coursework, practical laboratory work, and personal coding projects. I thrive on problem-solving and love the process of taking an abstract concept—like mathematical shapes—and bringing it to life on screen through code.
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-light-card dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/50 text-sm font-semibold text-slate-700 dark:text-slate-200">
                🚀 Dynamic Learner
              </div>
              <div className="px-4 py-2 rounded-lg bg-light-card dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/50 text-sm font-semibold text-slate-700 dark:text-slate-200">
                🔍 Analytical Thinker
              </div>
              <div className="px-4 py-2 rounded-lg bg-light-card dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/50 text-sm font-semibold text-slate-700 dark:text-slate-200">
                🤝 Collaborative Developer
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-light-card dark:bg-dark-card hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 glass"
              >
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 w-fit mb-4">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
