import { getFeaturedProjects } from '@/sanity/queries/projects';

import ProjectCard from './cards/ProjectCard';
import SectionHeading from '../atom/SectionHeading';
import ArrowLink from '../atom/ArrowLink';

export default async function Experience() {
  const projects = await getFeaturedProjects();

  return (
    <div className="">
      <SectionHeading heading={'Projects'} />

      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard key={project._id} ctx={project} />
        ))}
      </div>
      <div className="mt-6">
        <ArrowLink target={'/projects'} callToAction={'View Project Archive'} />
      </div>
    </div>
  );
}
