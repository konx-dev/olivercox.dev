import { getFeaturedProjects } from '@/sanity/queries/projects';
import Link from 'next/link';

import ProjectCard from './cards/ProjectCard';

export default async function Experience() {
  const projects = await getFeaturedProjects();

  return (
    <div className="my-8 lg:my-16">
      <h3 className="mb-4 text-heading-lg font-bold">Projects</h3>
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard key={project._id} ctx={project} />
        ))}
      </div>
      <div className="text-body font-medium mt-6">
        <Link href="/projects">View Projects Archive</Link>
      </div>
    </div>
  );
}
