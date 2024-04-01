import { getFeaturedProjects } from '@/sanity/queries/projects';
import Link from 'next/link';

import ProjectCard from './cards/ProjectCard';
import SectionHeading from '../atom/SectionHeading';

export default async function Experience() {
  const projects = await getFeaturedProjects();

  return (
    <div className="my-8 lg:my-16">
      <SectionHeading heading={'Projects'} />

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
