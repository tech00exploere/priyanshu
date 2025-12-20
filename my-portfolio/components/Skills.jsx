"use client";

const skillCategories = {
  "Frontend :": ["HTML", "CSS", "TailwindCSS", "JavaScript", "React.js", "Next.js"],
  "Backend :": ["Node.js", "Express"],
  "Database :": ["SQL", "MongoDB"],
  "DevOps / Cloud :": ["AWS", "Git"],
  "Machine Learning / AI :": ["Python", "Data Visualization in Matplotlib and Seaborn","Machine Learning"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#fdf8ef] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Skills
        </h2>

        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    p-4 border rounded-xl shadow-sm text-center cursor-pointer
                    transition-colors duration-200
                    bg-white text-gray-800
                    hover:bg-orange-500 hover:text-white
                    hover:shadow-md
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}