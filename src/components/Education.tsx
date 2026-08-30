import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  const timeline = [
    {
      type: 'current',
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'REVA University, Bengaluru',
      duration: '2025 - Present',
      location: 'Karnataka, India',
      status: 'Currently in 3rd Semester',
      details: [
        'Current CGPA: 9.1 / 10.',
        'Building foundations in programming, Data Structures & Algorithms, databases, and problem-solving.',
        'Core subjects include Problem Solving using C, Python Programming, Linear Algebra & Calculus, and Computer Graphics basics.',
      ],
    },
    {
      type: 'past',
      degree: 'Senior Secondary / Pre-University Education (Grade XII)',
      institution: 'Vyasa Vidhya Peethom',
      duration: '2023 - 2025',
      location: 'Kerala, India',
      status: 'Completed',
      details: [
        'Completed Senior Secondary / Pre-University education in the PCMC stream.',
        'Subjects included Physics, Chemistry, Mathematics, and Computer Science.',
        'Scored 92.4%.',
      ],
    },
    {
      type: 'past',
      degree: 'Secondary School Education (Grade X)',
      institution: 'The Elegant Public School',
      duration: 'Completed 2023',
      location: 'Kerala, India',
      status: 'Completed',
      details: [
        'Completed Secondary School education with a focus on Science and Mathematics.',
        'Scored 86%.',
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-[#F5EFE6] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#6B1F2A]">
            Education
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#6B1F2A] to-[#8A4A55] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#6B1F2A]/20 ml-4 md:ml-6 space-y-12">

          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">

              {/* Timeline Dot */}
              <span
                className={`absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-[#F5EFE6] ${
                  item.type === 'current'
                    ? 'bg-[#6B1F2A] text-white animate-pulse'
                    : 'bg-[#8A4A55] text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
              </span>

              {/* Education Card */}
              <div className="p-6 rounded-xl border border-[#6B1F2A]/15 bg-[#FBF8F2] glass space-y-4 shadow-sm hover:border-[#6B1F2A]/30 transition-colors">

                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">

                  <div>
                    <h3 className="text-xl font-bold text-[#6B1F2A] flex items-center gap-2 flex-wrap">
                      {item.degree}

                      {item.type === 'current' && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-[#6B1F2A]/10 text-[#6B1F2A]">
                          Active
                        </span>
                      )}
                    </h3>

                    <p className="text-base font-semibold text-[#6B1F2A]/80 mt-1">
                      {item.institution}
                    </p>
                  </div>

                  {/* Duration & Location */}
                  <div className="flex flex-col items-start md:items-end text-sm text-[#6B1F2A]/70">

                    <span className="flex items-center gap-1 font-medium text-[#6B1F2A]">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </span>

                    <span className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>

                  </div>
                </div>

                {/* Status */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F5EFE6] text-xs font-medium text-[#6B1F2A]">
                  <Award className="w-3.5 h-3.5" />
                  {item.status}
                </div>

                {/* Details List */}
                <ul className="space-y-2 text-[#6B1F2A]/80 text-sm md:text-base">

                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start">
                      <span className="mr-2 text-[#6B1F2A]">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}

                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
