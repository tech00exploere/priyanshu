import Projects from "@/components/Projects";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Kisaan-Setu",
      technologies: "Next.js, Node.js, Express.js, MongoDB, React.js, AI",
      description: [
        "Built an AI-powered agritech marketplace connecting farmers, buyers, and companies through a scalable platform with 26+ responsive pages.",
        "Implemented JWT + Google OAuth, role-based access control, AI-powered yield analysis, market price prediction, analytics dashboards, and a pseudo-payment workflow.",
        "Designed scalable REST APIs and marketplace modules using Next.js, Node.js, Express.js, and MongoDB."
      ],
      images: [
        "/image/placeholder-project.png" // User can update this later
      ],
      alts: [
        "Kisaan-Setu platform preview"
      ],
      live: "https://kisaan-setu-kappa.vercel.app",
      github: "https://github.com/tech00exploere/kisaan-setu",
    },
    {
      id: 2,
      title: "Connectly",
      technologies: "React.js, Node.js, Express.js, MongoDB, Socket.IO",
      description: [
        "Developed a professional networking platform featuring secure JWT authentication, profile management, and connection requests.",
        "Integrated Socket.IO for real-time messaging, typing indicators, and online presence with a scalable backend architecture.",
        "Built responsive interfaces and RESTful APIs to deliver a seamless networking experience across devices."
      ],
      images: [
        "/image/placeholder-project.png" // User can update this later
      ],
      alts: [
        "Connectly networking platform preview"
      ],
      live: "https://connectly-omega-orpin.vercel.app/",
      github: "https://connectly-omega-orpin.vercel.app/",
    }
  ];

  return <Projects projects={projects} />;
}
