import { Sparkles, BrainCircuit, Code, BookOpen, LineChart } from 'lucide-react';

export function LearningJourney() {
  const steps = [
    {
      phase: 'Phase 1: Foundations',
      status: 'In Progress (Sem 1 & 2)',
      icon: <Code className="w-5 h-5 text-cyan-500" />,
      title: 'Logic & Systems Programming',
      description: 'Building structural coding logic. Mastering pointers, arrays, and memory in C, and scripting essentials in Python. Tackling mathematical pre-requisites: Linear Algebra and Calculus.',
      focus: ['C Programming', 'Python basics', 'Mathematics', 'Logical reasoning'],
      isActive: true,
    },
    {
      phase: 'Phase 2: Data Core',
      status: 'Upcoming Focus',
      icon: <LineChart className="w-5 h-5 text-violet-500" />,
      title: 'Data Structures & Analysis',
      description: 'Strengthening fundamental data representations (stacks, trees, graphs) and applying them using Python. Learning data clean-up, analysis, and exploratory analysis tools (NumPy, Pandas).',
      focus: ['Data Structures', 'NumPy & Pandas', 'Data Visualisation', 'Object-Oriented Design'],
      isActive: false,
    },
    {
      phase: 'Phase 3: Machine Learning',
      status: 'Future Focus',
      icon: <BrainCircuit className="w-5 h-5 text-emerald-500" />,
      title: 'Algorithms & Models',
      description: 'Diving into supervised and unsupervised statistical learning models. Studying regression, classification, clustering algorithms, and the underlying probability and statistics.',
      focus: ['Scikit-Learn', 'Statistical Inference', 'Supervised Learning', 'Feature Engineering'],
      isActive: false,
    },
    {
      phase: 'Phase 4: Applied AI',
      status: 'Long-term Goal',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      title: 'Neural Networks & Deep Learning',
      description: 'Developing neural network models using frameworks like PyTorch or TensorFlow. Participating in hackathons and building real-world predictive models on tabular and unstructured data.',
      focus: ['Deep Learning', 'PyTorch / TensorFlow', 'Computer Vision / NLP', 'Capstone projects'],
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
            A structured roadmap showcasing my path towards becoming an Artificial Intelligence & Data Science professional.
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

        {/* Self Learning Quote */}
        <div className="mt-16 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-850 bg-light-card dark:bg-dark-card glass max-w-4xl mx-auto flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
          <BookOpen className="w-12 h-12 text-violet-500 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Continuous Skill Development
            </h4>
            <p className="text-slate-600 dark:text-slate-350 text-sm mt-1">
              "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice." I choose to spend my semesters actively exploring coding problems, documentation, and logic designs beyond the basic classroom syllabus.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
