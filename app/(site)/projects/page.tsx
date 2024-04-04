import ProjectCard from '@/components/organism/cards/ProjectCardThin';
import { getProjectsLanding, getProjects } from '@/sanity/queries/projects';

export default async function Projects() {
  const projects = await getProjects();

  const projectsLanding = await getProjectsLanding();

  return (
    <section>
      <div>return home button</div>
      <h1>Projects</h1>
      <div className="container px-4">
        {projects.map((project, index) => (
          <>
            <ProjectCard key={project._id} position={index} ctx={project} />
            {index !== projects.length - 1 && <hr className="border border-black-700" />}
          </>
        ))}
      </div>
    </section>
  );
}
