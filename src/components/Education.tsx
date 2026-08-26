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
    <section id="education" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              
              {/* Timeline dot */}
              <span className={`absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-light-bg dark:ring-dark-bg ${
                item.type === 'current'
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white animate-pulse'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}>
                <GraduationCap className="w-4 h-4" />
              </span>

              {/* Box Content */}
              <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-light-card dark:bg-dark-card glass space-y-4 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 flex-wrap">
                      {item.degree}
                      {item.type === 'current' && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          Active
                        </span>
                      )}
                    </h3>
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      {item.institution}
                    </p>
                  </div>
                  
                  {/* Status/Duration Pill */}
                  <div className="flex flex-col items-start md:items-end text-sm text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-cyan-600 dark:text-cyan-400">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Status */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <Award className="w-3.5 h-3.5" />
                  {item.status}
                </div>

                {/* Details List */}
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm md:text-base">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start">
                      <span className="mr-2 text-cyan-500">•</span>
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
