import { getFeaturedProjects } from '@/sanity/queries/projects';
import Link from 'next/link';

export default async function Experience() {
  const projects = await getFeaturedProjects();

  return (
    <div>
      <h3>Projects</h3>
      <div>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
      <div>
        <Link href="/projects">View Project Archive</Link>
      </div>
    </div>
  );
}
