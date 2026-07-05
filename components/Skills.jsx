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
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-deepbrown mb-10 text-center">
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
                    p-4 border-2 border-transparent rounded-xl shadow-md text-center cursor-pointer font-bold
                    transition-all duration-300 transform
                    bg-white text-gray-800
                    hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white
                    hover:shadow-xl hover:-translate-y-1
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