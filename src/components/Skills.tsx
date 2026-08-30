import { Code, GitPullRequest, Binary } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5 text-[#6B1F2A]" />,
      skills: [
        { name: 'C', level: 'Learning' },
        { name: 'Python', level: 'Learning' },
        { name: 'JavaScript', level: 'Beginner' },
      ],
    },
    {
      title: 'Core Concepts',
      icon: <Binary className="w-5 h-5 text-[#6B1F2A]" />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Learning' },
        { name: 'Problem Solving', level: 'Learning' },
        { name: 'SQL / MySQL', level: 'Fundamentals' },
      ],
    },
    {
      title: 'Development and Tools',
      icon: <GitPullRequest className="w-5 h-5 text-[#6B1F2A]" />,
      skills: [
        { name: 'HTML / CSS', level: 'Beginner' },
        { name: 'Node.js', level: 'Beginner' },
        { name: 'Git / GitHub', level: 'Beginner' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#F5EFE6] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1F2A]">
            Skills & Expertise
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#6B1F2A] to-[#8A4A55] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded-xl border border-[#6B1F2A]/15 bg-[#FBF8F2] glass hover:border-[#6B1F2A]/30 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-6 border-b border-[#6B1F2A]/10 pb-3">
                {category.icon}

                <h3 className="text-lg font-bold text-[#6B1F2A]">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-[#6B1F2A]/85">
                      {skill.name}
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-[#6B1F2A]/10 text-[#6B1F2A] text-xs font-semibold whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
