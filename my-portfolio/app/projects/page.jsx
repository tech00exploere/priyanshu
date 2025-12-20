import Projects from "@/components/Projects";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Todo App",
      description:
        "A task management application that allows users to add, update, and manage daily tasks efficiently.",
      images: [
        "/image/todo1.png",
        "/image/todo2.png",
        "/image/todo3.png",
        "/image/todo4.png",
      ],
      alts: [
        "Todo app homepage showing task list",
        "Todo app task creation page",
        "Todo app task update interface",
        "Todo app displaying all tasks",
      ],
    },
    {
      id: 2,
      title: "CommitPost",
      description:
        "A full-featured blogging platform where users can create, publish, and manage blog posts with a clean and responsive UI.",
      
        images: [
        "/image/commitpost1.png",
        "/image/commitpost2.png",
        "/image/commitpost3.png",
        "/image/commitpost4.png",
        "/image/commitpost5.png",
        "/image/commitpost6.png",
        "/image/commitpost7.png",
      ],
      alts: [
        "CommitPost blogging platform homepage",
        "CommitPost user authentication page",
        "CommitPost blog editor interface",
        "CommitPost blog listing page",
        "CommitPost single blog view page",
        "CommitPost user dashboard",
        "CommitPost responsive mobile blog view",
      ],
      live: "https://commitpostop-git-main-priyanshus-projects-2c0c2b1d.vercel.app/",
      github: "https://github.com/tech00exploere/CommitPost",
    },
  ];

  return <Projects projects={projects} />;
}
