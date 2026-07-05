"use client";
import { motion } from "framer-motion";

export default function MyResume() {
  return (
    <div className="min-h-screen bg-[#fdf8ef] pt-32 pb-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-deepbrown text-center mb-10">
        My Resume
      </h1>

      <div className="max-w-5xl mx-auto grid gap-8">
        
        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Software Engineer passionate about building scalable full-stack applications, solving real-world challenges, collaborating in team-driven environments, and contributing to impactful open-source software.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Education</h2>
          <div className="flex justify-between flex-wrap gap-2">
            <div>
              <p className="font-bold text-xl text-gray-900">Ajay Kumar Garg Engineering College (AKGEC)</p>
              <p className="text-gray-700 font-medium">Bachelor of Technology in Computer Science & Engineering (Data Science)</p>
            </div>
            <div className="text-gray-600 font-semibold sm:text-right">
              <p>Ghaziabad, India</p>
              <p>2023 – 2027</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Technical Skills</h2>
          <ul className="text-gray-700 space-y-3">
            <li><span className="font-bold text-gray-900">Programming Languages:</span> C++, C, Java, JavaScript, Python</li>
            <li><span className="font-bold text-gray-900">Frontend:</span> React.js, Next.js, HTML5, CSS3, Tailwind CSS</li>
            <li><span className="font-bold text-gray-900">Backend:</span> Node.js, Express.js, REST APIs, JWT Authentication, Google OAuth, Socket.IO</li>
            <li><span className="font-bold text-gray-900">Databases:</span> MongoDB, MySQL</li>
            <li><span className="font-bold text-gray-900">Developer Tools:</span> Git, GitHub, Linux, VS Code, Postman</li>
            <li><span className="font-bold text-gray-900">Core Concepts:</span> Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, REST API Design, Authentication, Role-Based Access Control</li>
          </ul>
        </motion.div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Open Source Contributions</h2>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg text-gray-900">Idurar ERP CRM | <span className="text-orange-600 text-base font-semibold">React.js, Node.js, MongoDB (PR #1464)</span></p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Implemented a production-ready CSV Export feature for the DataTable component, resolving Issue #1403.</li>
                <li>Integrated toolbar actions, handled empty-table states, and improved ESLint compatibility while maintaining clean, production-ready code.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900">Supabase Auth | <span className="text-orange-600 text-base font-semibold">Go, Authentication (PR #1322)</span></p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Resolved a WebOTP compatibility issue by fixing SMS OTP template newline handling, improving authentication reliability.</li>
                <li>Added regression tests to strengthen authentication stability and prevent future regressions.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900">Socket.IO | <span className="text-orange-600 text-base font-semibold">Developer Documentation (PR #542)</span></p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Improved the official documentation by clarifying that server.on() and server.emit() are aliases of the main namespace APIs, resolving Issue #4608.</li>
                <li>Enhanced API consistency and improved onboarding for developers using the Socket.IO Server API.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Projects</h2>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg text-gray-900 flex justify-between flex-wrap">
                <span>Kisaan-Setu | <span className="text-orange-600 text-base font-semibold">Next.js, Node.js, Express.js, MongoDB, React.js, AI</span></span>
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Built an AI-powered agritech marketplace connecting farmers, buyers, and companies through a scalable platform with 26+ responsive pages.</li>
                <li>Implemented JWT + Google OAuth, role-based access control, AI-powered yield analysis, market price prediction, analytics dashboards, and a pseudo-payment workflow.</li>
                <li>Designed scalable REST APIs and marketplace modules using Next.js, Node.js, Express.js, and MongoDB.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900 flex justify-between flex-wrap">
                <span>Connectly | <span className="text-orange-600 text-base font-semibold">React.js, Node.js, Express.js, MongoDB, Socket.IO</span></span>
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                <li>Developed a professional networking platform featuring secure JWT authentication, profile management, and connection requests.</li>
                <li>Integrated Socket.IO for real-time messaging, typing indicators, and online presence with a scalable backend architecture.</li>
                <li>Built responsive interfaces and RESTful APIs to deliver a seamless networking experience across devices.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Achievements</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Solved 400+ Data Structures & Algorithms problems across competitive programming platforms.</li>
            <li><span className="font-bold text-gray-900">LeetCode:</span> Rating 1600+</li>
            <li><span className="font-bold text-gray-900">CodeChef:</span> 2⋆ Rated Programmer</li>
            <li>Open-source contributor to Supabase Auth, Socket.IO, Immich, and Idurar, delivering production-ready bug fixes and feature enhancements.</li>
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Certifications</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Complete Machine Learning & Data Science – SkillUp (GeeksforGeeks)</li>
            <li>DevOps – SkillUp (GeeksforGeeks)</li>
            <li>Generative AI & ChatGPT – Self-Paced (GeeksforGeeks)</li>
          </ul>
        </motion.div>

        {/* Download Button */}
<<<<<<< HEAD
        <div className="text-center mt-6">
          <a
            href="/image/priyanshuOnWork2.pdf"
            download="Priyanshu_Resume.pdf"
            className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
=======
        <div className="text-center mt-4">
          <a 
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-black text-white rounded-xl shadow hover:opacity-80 transition"
>>>>>>> 0804e6901ac7b3c8cc5b7d5466884b16fb9f7ee6
          >
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  );
}
