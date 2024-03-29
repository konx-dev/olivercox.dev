import { getFeaturedProjects } from '@/sanity/queries/projects';
import Link from 'next/link';
import RichText from '../atom/RichText';
import Image from 'next/image';

export default async function Experience() {
  const projects = await getFeaturedProjects();

  console.log(projects);

  return (
    <div>
      <h3>Projects</h3>
      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <div>
              <Image src={project.image} alt={project.alt} width={200} height={200} />
            </div>
            <div>{project.name}</div>
            <div>{project.url}</div>
            <RichText ctx={project.content} />
            <div>{project.builtWith}</div>
          </div>
        ))}
      </div>
      <div>
        <Link href="/projects">View Project Archive</Link>
      </div>
    </div>
  );
}
