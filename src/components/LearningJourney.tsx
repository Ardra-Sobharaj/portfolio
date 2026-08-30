import { BrainCircuit, Code, LineChart } from 'lucide-react';

export function LearningJourney() {
  const steps = [
    {
      phase: 'Phase 1: Foundations',
      status: 'Completed / Strengthening',
      icon: <Code className="w-5 h-5 text-[#6B1F2A]" />,
      title: 'Programming Fundamentals',
      description:
        'Building a strong programming foundation through C and Python while improving logical thinking, problem-solving, and understanding of core programming concepts.',
      focus: ['C Programming', 'Python', 'Problem Solving', 'Programming Fundamentals'],
      isActive: false,
    },
    {
      phase: 'Phase 2: DSA',
      status: 'Currently Learning',
      icon: <LineChart className="w-5 h-5 text-[#6B1F2A]" />,
      title: 'Data Structures & Problem Solving',
      description:
        'Currently learning fundamental data structures and practicing problem solving through coding challenges. Focusing on understanding concepts and improving consistency rather than just solving large numbers of problems.',
      focus: ['Arrays', 'Strings', 'Linked Lists', 'Stacks', 'Sorting'],
      isActive: true,
    },
    {
      phase: 'Phase 3: Development',
      status: 'Exploring',
      icon: <Code className="w-5 h-5 text-[#6B1F2A]" />,
      title: 'Software Development',
      description:
        'Exploring software development through small projects and practical experimentation. Building familiarity with web technologies, Node.js, and databases while improving my ability to build and explain projects.',
      focus: ['HTML & CSS', 'JavaScript', 'Node.js', 'MySQL'],
      isActive: false,
    },
    {
      phase: 'Phase 4: AI & Data Science',
      status: 'Future Focus',
      icon: <BrainCircuit className="w-5 h-5 text-[#6B1F2A]" />,
      title: 'Exploring AI & Data Science',
      description:
        'Planning to gradually explore data analysis, machine learning, and AI through structured learning and hands-on projects after strengthening my programming and problem-solving foundations.',
      focus: ['Data Analysis', 'Machine Learning', 'Statistics', 'AI Projects'],
      isActive: false,
    },
  ];

  return (
    <section
      id="learning-journey"
      className="py-24 bg-[#F5EFE6] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1F2A]">
            Learning Journey
          </h2>

          <p className="mt-4 text-[#6B1F2A]/70">
            A snapshot of what I have learned, what I am currently working on,
            and the areas I plan to explore next.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#6B1F2A] to-[#8A4A55] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Roadmap Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                step.isActive
                  ? 'border-[#6B1F2A]/40 bg-[#6B1F2A]/5 shadow-md shadow-[#6B1F2A]/10 ring-1 ring-[#6B1F2A]/20'
                  : 'border-[#6B1F2A]/15 bg-[#FBF8F2] glass hover:border-[#6B1F2A]/35 hover:-translate-y-1'
              }`}
            >
              <div>

                {/* Header Phase & Status */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-xs font-bold text-[#6B1F2A]/55 uppercase tracking-wider">
                    {step.phase}
                  </span>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      step.isActive
                        ? 'bg-[#6B1F2A]/10 text-[#6B1F2A]'
                        : 'bg-[#6B1F2A]/5 text-[#6B1F2A]/60'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                {/* Step Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#6B1F2A]/5 text-[#6B1F2A]">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#6B1F2A] leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[#6B1F2A]/70 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Focus Tags */}
              <div className="border-t border-[#6B1F2A]/10 pt-4 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B1F2A]/55 block">
                  Core Topics:
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {step.focus.map((focus, focusIdx) => (
                    <span
                      key={focusIdx}
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        step.isActive
                          ? 'bg-[#6B1F2A]/10 text-[#6B1F2A]'
                          : 'bg-[#6B1F2A]/5 text-[#6B1F2A]/70'
                      }`}
                    >
                      {focus}
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
