import Projects from "@/components/Projects";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  return <Projects projects={projectsData} />;
}
