import ArrowLink from '@/components/atom/ArrowLink';
import RichText from '@/components/atom/RichText';
import ProjectCard from '@/components/organism/cards/ProjectCardThin';
import { getProjectsLanding, getProjects } from '@/sanity/queries/projects';

// SEO & Metadata
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  const projectsLanding = await getProjectsLanding();

  return {
    title: projectsLanding.name
  };
}

export default async function Projects() {
  const projects = await getProjects();

  const projectsLanding = await getProjectsLanding();

  return (
    <section className="my-10 lg:my-20">
      <div className="container max-w-[1000px]">
        <div className="px-4 mb-4 lg:mb-8 flex justify-start">
          <ArrowLink target={'/'} callToAction={'Return Home'} reversed />
        </div>
        <div className="px-4 mb-8 lg:mb-12">
          <h1 className="text-heading-xxl font-medium">{projectsLanding.name}</h1>
        </div>
        <div className="px-4">
          {projects.map((project, index) => (
            <div key={project._id}>
              <ProjectCard position={index} ctx={project} />
              {index !== projects.length - 1 && <hr className="border border-black-700" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 lg:mt-10 container max-w-[640px] text-center text-black-500 px-4 text-xs">
        <RichText ctx={projectsLanding.disclaimer} />
      </div>
    </section>
  );
}
