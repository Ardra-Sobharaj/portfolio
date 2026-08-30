import { Lightbulb, Code2, Target, BrainCircuit } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-[#6B1F2A]" />,
      title: 'Artificial Intelligence & DS',
      description:
        'Drawn to AI & DS for its power to uncover insights from complex data structures and make systems intelligent.',
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#6B1F2A]" />,
      title: 'Programming Foundations',
      description:
        'Strengthening programming fundamentals through C and Python, with a focus on writing clean, efficient code.',
    },
    {
      icon: <Target className="w-6 h-6 text-[#6B1F2A]" />,
      title: 'Problem Solving',
      description:
        'Enjoy breaking down complex problems into logical steps and designing systematic algorithms to solve them.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#6B1F2A]" />,
      title: 'Continuous Learning',
      description:
        'Building my skills through coding practice, projects, coursework, and exploring new areas of software development and AI/ML.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#F5EFE6] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1F2A]">
            About Me
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#6B1F2A] to-[#8A4A55] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Description */}
          <div className="lg:col-span-6 space-y-6">

            <h3 className="text-2xl font-bold text-[#6B1F2A]">
              Building my foundation through code.
            </h3>

            <p className="text-[#6B1F2A]/80 leading-relaxed">
              I am a 3rd-semester Artificial Intelligence & Data Science student
              with a growing interest in software development, AI/ML, data
              science, and problem-solving. I am currently strengthening my
              programming fundamentals in C and Python while learning Data
              Structures and Algorithms.
            </p>

            <p className="text-[#6B1F2A]/80 leading-relaxed">
              Currently, I am building my technical foundation through
              coursework, DSA practice, and hands-on projects. I enjoy breaking
              problems into smaller steps, understanding the logic behind
              solutions, and improving my coding skills through consistent
              practice.
            </p>

            {/* Personal Strengths */}
            <div className="pt-4 border-t border-[#6B1F2A]/15 flex flex-wrap gap-4">

              <div className="px-4 py-2 rounded-lg bg-[#FBF8F2] border border-[#6B1F2A]/15 text-sm font-semibold text-[#6B1F2A]">
                🚀 Dynamic Learner
              </div>

              <div className="px-4 py-2 rounded-lg bg-[#FBF8F2] border border-[#6B1F2A]/15 text-sm font-semibold text-[#6B1F2A]">
                🔍 Analytical Thinker
              </div>

              <div className="px-4 py-2 rounded-lg bg-[#FBF8F2] border border-[#6B1F2A]/15 text-sm font-semibold text-[#6B1F2A]">
                🤝 Collaborative Developer
              </div>

            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#6B1F2A]/15 bg-[#FBF8F2] hover:border-[#6B1F2A]/30 hover:-translate-y-1 transition-all duration-300 glass"
              >

                {/* Icon */}
                <div className="p-3 rounded-lg bg-[#F5EFE6] w-fit mb-4">
                  {card.icon}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-[#6B1F2A] mb-2">
                  {card.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[#6B1F2A]/70 leading-relaxed">
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
