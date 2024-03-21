import { PortableText } from '@portabletext/react';
import Link from 'next/link';

// Queries
import { getHomepage } from '@/sanity/queries/homepage';
import { getFeaturedInsights } from '@/sanity/queries/insights';
import { getFeaturedProjects } from '@/sanity/queries/projects';
import { getExperience } from '@/sanity/queries/experience';
import { getGlobals } from '@/sanity/queries/globals';

export default async function Home() {
  const page = await getHomepage();
  const insights = await getFeaturedInsights();
  const projects = await getFeaturedProjects();
  const experience = await getExperience();
  const globals = await getGlobals();

  console.log(globals);

  return (
    <section>
      {/* Left column */}
      <div>
        <div>logo</div>
        <h1>{page.heading}</h1>
        <PortableText value={page.introduction} />
        <div>socials</div>
        <div>lightswitch</div>
        <div>
          builtWith
          <PortableText value={globals.builtWith} />
        </div>
      </div>
      {/* Right column */}
      <div>
        <PortableText value={page.body} />
        <div>
          <h3>Experience</h3>
          <div>
            {experience.map((entry) => (
              <div key={entry._id}>{entry.role}</div>
            ))}
          </div>
          <div>
            <Link href="https://cv.konx.dev/" rel="noopener noreferrer" target="_blank">
              View Full Resume
            </Link>
          </div>
        </div>
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
        <div>
          <h3>Insights</h3>
          <PortableText value={page.insights} />
          <div>
            {insights.map((insight) => (
              <div key={insight._id}>{insight.name}</div>
            ))}
          </div>
          <div>
            <Link href="/insights">View all insights</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
