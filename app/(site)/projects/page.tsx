import { getProjectsLanding, getProjects } from '@/sanity/queries/projects';

export default async function Projects() {
  const projects = await getProjects();

  const projectsLanding = await getProjectsLanding();

  console.log(projectsLanding);

  return (
    <section>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <div>{project.name}</div>
            <div>{project.year}</div>
            <div>{project.madeAt}</div>
            <div>{project.builtWith}</div>
            <div>{project.url}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
